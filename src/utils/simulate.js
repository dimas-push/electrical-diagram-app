import { COMPONENT_DEFS } from '../data/components';

// Loads / passives — always conduct when connected
const ALWAYS_CONDUCTING = new Set([
  // Generic
  'gen_motor3','gen_coil','gen_lamp','gen_terminal',
  // Household loads
  'socket_1p','socket_3p','lamp_tube','lamp_led','fan_motor','heater_el',
  // Control loads
  'pilot_r','pilot_g','pilot_y','buzzer','relay_gen','timer_on','timer_off','plc','hmi',
  // Sensors (always pass signal)
  'limit_sw','prox_npn','prox_pnp','photo_ee','temp_sw','pressure_sw','float_sw',
  // Motor & Drive (load side)
  'motor_1ph','motor_servo','vfd','soft_start','dol_starter','star_delta',
  // Proteksi passives
  'fuse','fuse_nh','spd','overload_th','motor_prot','safety_rly',
  // Power passives
  'transformer','transformer3','ct','pt','meter_v','meter_a','meter_w',
  'battery_pack','cap_bank','ups','generator',
  // Aktuator (load side)
  'sol_pneu','sol_liquid','motor_valve','servo_drive','stepper_drv',
  // HVAC & Utilitas
  'pump_motor','vacuum_pump','compressor','chiller','cooling_tower','boiler','ahu',
  // Instrumen
  'kwh_meter','flow_meter','level_ultra','ph_sensor','encoder','pid_ctrl','ssrelay',
  // Bangunan
  'fire_alarm','smoke_det','emergency_lt','acb','mccb',
  // Proses Industri
  'mixer_motor','conveyor_motor','filling_valve','uv_lamp','heat_ctrl','peristaltic',
]);

// Conduct only when switchStates[id] === true
const SWITCH_CONDUCTING = new Set([
  'gen_pushno','gen_pushnc','gen_estop',
  'sch_mcb1','sch_mcb3','sch_rccb',
  'abb_mcb1','abb_mcb3','abb_rccb',
  'sie_mcb1','sie_mcb3','sie_rccb',
  'leg_mcb1','leg_mcb3',
  'sch_contactor','abb_contactor',
  'switch_1g','switch_2g','sel_sw2','sel_sw3','ats',
]);

// All ports shorted internally (distribution bars)
const BUSBAR = new Set(['gen_busbar']);
// Neutral / return reference
const GROUND = new Set(['gen_ground']);

function nodeId(compId, portIdx) { return `${compId}:${portIdx}`; }

function bfs(adj, seeds) {
  const visited = new Set(seeds);
  const queue   = [...seeds];
  while (queue.length) {
    const n = queue.shift();
    for (const nb of (adj[n] || [])) {
      if (!visited.has(nb)) { visited.add(nb); queue.push(nb); }
    }
  }
  return visited;
}

export function simulate(placed, wires, switchStates) {
  const adj = {};
  const addEdge = (a, b) => {
    (adj[a] = adj[a] || new Set()).add(b);
    (adj[b] = adj[b] || new Set()).add(a);
  };

  // Wire connections
  wires.forEach(w => addEdge(nodeId(w.fromComp, w.fromPort), nodeId(w.toComp, w.toPort)));

  // Internal component connections
  placed.forEach(comp => {
    const def = COMPONENT_DEFS.find(d => d.id === comp.defId);
    if (!def) return;
    const n = def.ports.length;

    // Busbar & ground: all ports shorted
    if (BUSBAR.has(comp.defId) || GROUND.has(comp.defId)) {
      for (let i = 1; i < n; i++) addEdge(nodeId(comp.id, 0), nodeId(comp.id, i));
      return;
    }

    const conducting = ALWAYS_CONDUCTING.has(comp.defId) ||
      (SWITCH_CONDUCTING.has(comp.defId) && !!switchStates[comp.id]);
    if (!conducting) return;

    if (n === 2) {
      addEdge(nodeId(comp.id, 0), nodeId(comp.id, 1));
    } else if (n === 3) {
      // 3-phase load: all three terminals connected (star point)
      addEdge(nodeId(comp.id, 0), nodeId(comp.id, 1));
      addEdge(nodeId(comp.id, 1), nodeId(comp.id, 2));
    } else if (n === 4) {
      // RCCB: two independent poles  top-L(0)↔bottom-L(2), top-N(1)↔bottom-N(3)
      addEdge(nodeId(comp.id, 0), nodeId(comp.id, 2));
      addEdge(nodeId(comp.id, 1), nodeId(comp.id, 3));
    } else if (n >= 6) {
      // 3-pole device: top(0,1,2) ↔ bottom(3,4,5)
      for (let i = 0; i < 3; i++) addEdge(nodeId(comp.id, i), nodeId(comp.id, i + 3));
    }
  });

  // Live seeds — all busbar ports
  const liveSeeds = new Set();
  placed.forEach(comp => {
    if (!BUSBAR.has(comp.defId)) return;
    const def = COMPONENT_DEFS.find(d => d.id === comp.defId);
    def.ports.forEach((_, i) => liveSeeds.add(nodeId(comp.id, i)));
  });

  // Neutral seeds — all ground ports
  const neutralSeeds = new Set();
  placed.forEach(comp => {
    if (!GROUND.has(comp.defId)) return;
    const def = COMPONENT_DEFS.find(d => d.id === comp.defId);
    def.ports.forEach((_, i) => neutralSeeds.add(nodeId(comp.id, i)));
  });

  // BFS from both sides
  const liveSet    = bfs(adj, liveSeeds);
  const neutralSet = bfs(adj, neutralSeeds);

  // Closed-circuit nodes: reachable from BOTH live and neutral
  const closedNodes = new Set([...liveSet].filter(n => neutralSet.has(n)));

  const energizedWires = new Set();
  wires.forEach(w => {
    if (closedNodes.has(nodeId(w.fromComp, w.fromPort)) &&
        closedNodes.has(nodeId(w.toComp,   w.toPort)))
      energizedWires.add(w.id);
  });

  const energizedComps = new Set();
  placed.forEach(comp => {
    const def = COMPONENT_DEFS.find(d => d.id === comp.defId);
    if (!def) return;
    if (def.ports.some((_, i) => closedNodes.has(nodeId(comp.id, i))))
      energizedComps.add(comp.id);
  });

  return { energizedWires, energizedComps };
}
