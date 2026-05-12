import { useState, useCallback, useEffect } from 'react';

const GRID = 20;
const snap = (v) => Math.round(v / GRID) * GRID;

let nextId = 1;
const uid = () => `${nextId++}`;

const EMPTY = { placed: [], wires: [] };

// IEC 81346 wire color → prefix
const COLOR_PREFIX = {
  '#a0522d': 'L1', '#111111': 'L2', '#888888': 'L3',
  '#1565c0': 'N',  '#4caf50': 'PE', '#e53935': 'L+',
  '#ff9800': 'X',  '#334155': 'W',
  '#7b1fa2': 'L-', '#00838f': 'C',  '#558b2f': 'G',
  '#f57f17': 'U',  '#37474f': 'V',  '#4e342e': 'T',
};

// IEC 81346 equipment TAG prefix by component type
const IEC_TAG = {
  // Q — switching / circuit protection
  sch_mcb1:'Q', sch_mcb3:'Q', abb_mcb1:'Q', abb_mcb3:'Q',
  sie_mcb1:'Q', sie_mcb3:'Q', leg_mcb1:'Q', leg_mcb3:'Q',
  // F — fuses, overloads, RCDs
  fuse:'F', fuse_nh:'F', overload_th:'F',
  sch_rccb:'F', abb_rccb:'F', sie_rccb:'F', spd:'F', motor_prot:'F',
  // K — contactors, relays, timers, safety
  sch_contactor:'K', abb_contactor:'K',
  relay_gen:'K', timer_on:'K', timer_off:'K', safety_rly:'K',
  // S — switches, pushbuttons, sensors
  gen_pushno:'S', gen_pushnc:'S', gen_estop:'S',
  switch_1g:'S', switch_2g:'S', sel_sw2:'S', sel_sw3:'S',
  limit_sw:'S', pressure_sw:'S', float_sw:'S',
  // B — sensors (transducers)
  prox_npn:'B', prox_pnp:'B', photo_ee:'B', temp_sw:'B',
  // M — motors
  gen_motor3:'M', motor_1ph:'M', motor_servo:'M',
  // H — signal / indication
  gen_lamp:'H', lamp_led:'H', lamp_tube:'H',
  pilot_r:'H', pilot_g:'H', pilot_y:'H', buzzer:'H',
  // T — transformers
  transformer:'T', transformer3:'T', ct:'T', pt:'T',
  // G — generators / sources
  generator:'G', battery_pack:'G', gen_busbar:'G',
  // X — terminals
  gen_terminal:'X',
  // P — meters
  meter_v:'P', meter_a:'P', meter_w:'P',
  // U — power conversion / drives
  vfd:'U', soft_start:'U', dol_starter:'U', star_delta:'U', ups:'U',
  // E — general electrical (sockets, heaters)
  socket_1p:'E', socket_3p:'E', heater_el:'E',
  // A — assemblies (PLC, HMI)
  plc:'A', hmi:'A',
  // C — capacitors
  cap_bank:'C', fan_motor:'M',
  // Q — power switchgear
  ats:'Q',
  // Y — solenoid valves / actuators
  sol_pneu:'Y', sol_liquid:'Y', motor_valve:'Y', servo_drive:'U', stepper_drv:'U',
  // P — instruments / meters
  kwh_meter:'P', flow_meter:'B', level_ultra:'B', ph_sensor:'B', encoder:'B', pid_ctrl:'A', ssrelay:'K',
  // M — pumps and motors (process)
  pump_motor:'M', vacuum_pump:'M', compressor:'M', mixer_motor:'M', conveyor_motor:'M', peristaltic:'M',
  // HVAC
  chiller:'U', cooling_tower:'M', boiler:'E', ahu:'U',
  // Bangunan
  fire_alarm:'H', smoke_det:'B', emergency_lt:'H', acb:'Q', mccb:'Q',
  // Process loads
  filling_valve:'Y', uv_lamp:'H', heat_ctrl:'A',
};

function autoTag(placed, defId) {
  const prefix = IEC_TAG[defId] || 'E';
  const nums = placed
    .filter(c => (c.label || '').match(new RegExp(`^${prefix}(\\d+)$`)))
    .map(c => parseInt(c.label.replace(prefix, ''), 10));
  const next = nums.length ? Math.max(...nums) + 1 : 1;
  return `${prefix}${next}`;
}
function autoWireLabel(wires, color) {
  const prefix = COLOR_PREFIX[color] || 'W';
  const nums = wires
    .filter(w => (w.label || '').startsWith(prefix))
    .map(w => parseInt((w.label || '').replace(prefix, ''), 10))
    .filter(n => !isNaN(n));
  const next = nums.length ? Math.max(...nums) + 1 : 1;
  return `${prefix}${String(next).padStart(3, '0')}`;
}

export function useDiagram() {
  const [past,    setPast]    = useState([]);
  const [present, setPresent] = useState(EMPTY);
  const [future,  setFuture]  = useState([]);

  // selection = Set of component IDs
  const [selection,    setSelection]    = useState(new Set());
  const [selectedWire, setSelectedWire] = useState(null);
  const [switchStates, setSwitchStates] = useState({});
  const [clipboard,    setClipboard]    = useState(null); // { comps, wires }

  const { placed, wires } = present;

  // single selected id (for properties panel)
  const selected = selection.size === 1 ? [...selection][0] : null;
  const setSelected = useCallback((id) => {
    setSelection(id ? new Set([id]) : new Set());
    if (id) setSelectedWire(null);
  }, []);

  // ── history ───────────────────────────────────────────────────────────────
  const commit = useCallback((next) => {
    setPast(p => [...p, present]);
    setPresent(next);
    setFuture([]);
  }, [present]);

  const undo = useCallback(() => {
    if (!past.length) return;
    setPast(p => p.slice(0, -1));
    setFuture(f => [present, ...f]);
    setPresent(past[past.length - 1]);
    setSelection(new Set()); setSelectedWire(null);
  }, [past, present]);

  const redo = useCallback(() => {
    if (!future.length) return;
    setFuture(f => f.slice(1));
    setPast(p => [...p, present]);
    setPresent(future[0]);
    setSelection(new Set()); setSelectedWire(null);
  }, [future, present]);

  // ── keyboard shortcuts ────────────────────────────────────────────────────
  useEffect(() => {
    const onKey = (e) => {
      const ctrl = e.ctrlKey || e.metaKey;
      if (ctrl && e.key === 'z' && !e.shiftKey) { e.preventDefault(); undo(); }
      if (ctrl && (e.key === 'y' || (e.key === 'z' && e.shiftKey))) { e.preventDefault(); redo(); }
      if (ctrl && e.key === 'a') { e.preventDefault(); setSelection(new Set(placed.map(c => c.id))); }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [undo, redo, placed]);

  // ── selection helpers ─────────────────────────────────────────────────────
  const toggleSelect = useCallback((id) => {
    setSelection(s => {
      const n = new Set(s);
      n.has(id) ? n.delete(id) : n.add(id);
      return n;
    });
    setSelectedWire(null);
  }, []);

  const selectMany = useCallback((ids) => {
    setSelection(new Set(ids));
    setSelectedWire(null);
  }, []);

  const clearSelection = useCallback(() => {
    setSelection(new Set());
    setSelectedWire(null);
  }, []);

  // ── component actions ─────────────────────────────────────────────────────
  // Normally-closed in default/off state
  const DEFAULT_CLOSED = new Set([
    'gen_pushnc','gen_estop',
    'sch_mcb1','sch_mcb3','sch_rccb',
    'abb_mcb1','abb_mcb3','abb_rccb',
    'sie_mcb1','sie_mcb3','sie_rccb',
    'leg_mcb1','leg_mcb3',
    'switch_1g','switch_2g',  // light switches default ON
    // sel_sw2, sel_sw3 start at pos 0 (open), ats starts on PLN side (open for gen)
  ]);

  const addComponent = useCallback((defId, x, y) => {
    const id = uid();
    const label = autoTag(placed, defId);
    commit({ ...present, placed: [...placed, { id, defId, x: snap(x), y: snap(y), label, value: '', rotation: 0 }] });
    setSwitchStates(s => ({ ...s, [id]: DEFAULT_CLOSED.has(defId) }));
    setSelection(new Set([id])); setSelectedWire(null);
    return id;
  }, [present, placed, commit]);

  const moveComponent = useCallback((id, dx, dy) => {
    setPresent(p => ({ ...p, placed: p.placed.map(c => c.id === id ? { ...c, x: snap(c.x + dx), y: snap(c.y + dy) } : c) }));
  }, []);

  // move all selected components together
  const moveSelection = useCallback((ids, dx, dy) => {
    setPresent(p => ({
      ...p,
      placed: p.placed.map(c => ids.has(c.id) ? { ...c, x: snap(c.x + dx), y: snap(c.y + dy) } : c),
    }));
  }, []);

  // set absolute positions for a Map<id, {x,y}> (used during drag)
  const applyPositions = useCallback((posMap) => {
    setPresent(p => ({
      ...p,
      placed: p.placed.map(c => posMap.has(c.id) ? { ...c, ...posMap.get(c.id) } : c),
    }));
  }, []);

  const commitMove = useCallback((movedIds, origPositions) => {
    // origPositions: Map<id, {x,y}>
    const hasChange = [...movedIds].some(id => {
      const comp = present.placed.find(c => c.id === id);
      const orig = origPositions.get(id);
      return comp && orig && (comp.x !== orig.x || comp.y !== orig.y);
    });
    if (!hasChange) return;
    const before = {
      ...present,
      placed: present.placed.map(c => {
        const orig = origPositions.get(c.id);
        return orig ? { ...c, x: orig.x, y: orig.y } : c;
      }),
    };
    setPast(p => [...p, before]);
    setFuture([]);
  }, [present]);

  const deleteComponent = useCallback((id) => {
    const ids = id ? new Set([id]) : selection;
    commit({
      placed: present.placed.filter(c => !ids.has(c.id)),
      wires:  present.wires.filter(w => !ids.has(w.fromComp) && !ids.has(w.toComp)),
    });
    setSelection(new Set()); setSelectedWire(null);
    setSwitchStates(s => { const n = { ...s }; ids.forEach(i => delete n[i]); return n; });
  }, [present, selection, commit]);

  const deleteSelected = useCallback(() => {
    if (selection.size > 0) deleteComponent(null);
    if (selectedWire) {
      commit({ ...present, wires: wires.filter(w => w.id !== selectedWire) });
      setSelectedWire(null);
    }
  }, [selection, selectedWire, deleteComponent, present, wires, commit]);

  const updateComponent = useCallback((id, patch) => {
    commit({ ...present, placed: present.placed.map(c => c.id === id ? { ...c, ...patch } : c) });
  }, [present, commit]);

  // ── copy / paste ──────────────────────────────────────────────────────────
  const copySelection = useCallback(() => {
    if (!selection.size) return;
    const comps = placed.filter(c => selection.has(c.id));
    // include wires that connect two selected components
    const internalWires = wires.filter(w => selection.has(w.fromComp) && selection.has(w.toComp));
    setClipboard({ comps, wires: internalWires });
  }, [selection, placed, wires]);

  const pasteClipboard = useCallback(() => {
    if (!clipboard) return;
    const OFFSET = 40;
    const idMap = new Map(); // old id → new id
    clipboard.comps.forEach(c => idMap.set(c.id, uid()));
    const newComps = clipboard.comps.map(c => ({
      ...c, id: idMap.get(c.id), x: snap(c.x + OFFSET), y: snap(c.y + OFFSET),
    }));
    const newWires = clipboard.wires.map(w => ({
      ...w, id: uid(),
      fromComp: idMap.get(w.fromComp),
      toComp:   idMap.get(w.toComp),
    }));
    commit({ placed: [...placed, ...newComps], wires: [...wires, ...newWires] });
    setSelection(new Set(newComps.map(c => c.id)));
    // inherit switch states
    setSwitchStates(s => {
      const n = { ...s };
      clipboard.comps.forEach(c => { if (s[c.id] !== undefined) n[idMap.get(c.id)] = s[c.id]; });
      return n;
    });
  }, [clipboard, placed, wires, commit]);

  // ── wires ─────────────────────────────────────────────────────────────────
  const addWire = useCallback((fromComp, fromPort, toComp, toPort, color) => {
    const dup = wires.find(w =>
      (w.fromComp === fromComp && w.fromPort === fromPort && w.toComp === toComp && w.toPort === toPort) ||
      (w.fromComp === toComp   && w.fromPort === toPort   && w.toComp === fromComp && w.toPort === fromPort));
    if (dup) return;
    const c = color || '#334155';
    commit({ ...present, wires: [...wires, { id: uid(), fromComp, fromPort, toComp, toPort, color: c, label: autoWireLabel(wires, c) }] });
  }, [present, wires, commit]);

  const deleteWire = useCallback((id) => {
    commit({ ...present, wires: wires.filter(w => w.id !== id) });
    if (selectedWire === id) setSelectedWire(null);
  }, [present, wires, commit, selectedWire]);

  const updateWire = useCallback((id, patch) => {
    commit({ ...present, wires: wires.map(w => w.id === id ? { ...w, ...patch } : w) });
  }, [present, wires, commit]);

  const toggleSwitch = useCallback((id) => {
    setSwitchStates(s => ({ ...s, [id]: !s[id] }));
  }, []);

  const loadDiagram = useCallback((data) => {
    const allIds = [...(data.placed || []).map(c => c.id), ...(data.wires || []).map(w => w.id)]
      .map(id => parseInt(id, 10)).filter(n => !isNaN(n));
    if (allIds.length) nextId = Math.max(...allIds) + 1;
    setPast([]); setPresent(data); setFuture([]);
    setSelection(new Set()); setSelectedWire(null); setSwitchStates({});
  }, []);

  return {
    placed, wires,
    selection, selected, setSelected, toggleSelect, selectMany, clearSelection,
    selectedWire, setSelectedWire,
    switchStates, toggleSwitch,
    clipboard,
    canUndo: past.length > 0, canRedo: future.length > 0,
    undo, redo,
    addComponent, moveComponent, moveSelection, applyPositions, commitMove,
    deleteComponent, deleteSelected, updateComponent,
    addWire, deleteWire, updateWire,
    copySelection, pasteClipboard,
    loadDiagram,
    getState: () => present,
  };
}
