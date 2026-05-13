import { useRef, useState, useCallback, useEffect, useMemo } from 'react';
import { COMPONENT_DEFS } from '../data/components';
import { ComponentOnCanvas, SvgDefs } from './ComponentSymbol';
import WireLayer, { getPortWorld, getWirePoints } from './WireLayer';
import { simulate } from '../utils/simulate';

const GRID = 20;
const MIN_SCALE = 0.15;
const MAX_SCALE = 5;
const clamp = (v, lo, hi) => Math.max(lo, Math.min(hi, v));

const SWITCHABLE = new Set([
  'gen_pushno','gen_pushnc','gen_estop',
  'sch_mcb1','sch_mcb3','sch_rccb','sch_contactor',
  'abb_mcb1','abb_mcb3','abb_rccb','abb_contactor',
  'sie_mcb1','sie_mcb3','sie_rccb',
  'leg_mcb1','leg_mcb3',
  'switch_1g','switch_2g','sel_sw2','sel_sw3','ats',
]);

export default function Canvas({ diagram, mode, onModeChange, wireColor, simMode, titleBlockHeight = 0, onZoomToFitRef }) {
  const {
    placed, wires, selection, selected, setSelected, selectedWire, setSelectedWire,
    toggleSelect, selectMany, clearSelection,
    addComponent, applyPositions, commitMove, deleteComponent, deleteSelected,
    addWire, deleteWire, updateWire, applyWireWaypoints, commitWireWaypointsEnd,
    switchStates, toggleSwitch, addAnnotation,
  } = diagram;

  const svgRef  = useRef(null);
  const wrapRef = useRef(null);

  const [vt, setVt]             = useState({ x: 40, y: 40, scale: 1 });
  const [dragging, setDragging]  = useState(null);   // { ids: Set, origPositions: Map, startX, startY }
  const [panning,  setPanning]   = useState(null);
  const [spaceDown, setSpaceDown] = useState(false);
  const [pendingWire, setPendingWire] = useState(null);
  const [rubberBand, setRubberBand]  = useState(null); // { sx, sy, ex, ey } in world coords
  // { wireId, idx (into waypoints array), origWaypoints }
  const [draggingWire, setDraggingWire] = useState(null);

  const defMap  = useMemo(() => Object.fromEntries(COMPONENT_DEFS.map(d => [d.id, d])), []);
  const compMap = useMemo(() => Object.fromEntries(placed.map(c => [c.id, c])), [placed]);

  // zoom to fit all components
  const zoomToFit = useCallback(() => {
    if (!placed.length || !wrapRef.current) return;
    const PAD = 60;
    const xs = placed.map(c => c.x), ys = placed.map(c => c.y);
    const minX = Math.min(...xs) - 40, maxX = Math.max(...xs) + 40;
    const minY = Math.min(...ys) - 40, maxY = Math.max(...ys) + 40;
    const { width, height } = wrapRef.current.getBoundingClientRect();
    const scale = clamp(Math.min((width - PAD * 2) / (maxX - minX), (height - PAD * 2) / (maxY - minY)), MIN_SCALE, MAX_SCALE);
    const x = (width - (maxX + minX) * scale) / 2;
    const y = (height - (maxY + minY) * scale) / 2;
    setVt({ x, y, scale });
  }, [placed]);

  useEffect(() => { if (onZoomToFitRef) onZoomToFitRef.current = zoomToFit; }, [zoomToFit, onZoomToFitRef]);

  const simResult = useMemo(() => {
    if (!simMode) return { energizedWires: new Set(), energizedComps: new Set() };
    return simulate(placed, wires, switchStates);
  }, [simMode, placed, wires, switchStates]);

  const clientToWorld = useCallback((cx, cy) => {
    const rect = wrapRef.current.getBoundingClientRect();
    return { x: (cx - rect.left - vt.x) / vt.scale, y: (cy - rect.top - vt.y) / vt.scale };
  }, [vt]);

  // wheel zoom
  useEffect(() => {
    const el = wrapRef.current;
    const onWheel = (e) => {
      e.preventDefault();
      const rect = el.getBoundingClientRect();
      const ox = e.clientX - rect.left;
      const oy = e.clientY - rect.top;
      const delta = e.deltaY > 0 ? 0.9 : 1.1;
      setVt(v => {
        const ns = clamp(v.scale * delta, MIN_SCALE, MAX_SCALE);
        const r  = ns / v.scale;
        return { scale: ns, x: ox - r * (ox - v.x), y: oy - r * (oy - v.y) };
      });
    };
    el.addEventListener('wheel', onWheel, { passive: false });
    return () => el.removeEventListener('wheel', onWheel);
  }, []);

  // spacebar
  useEffect(() => {
    const d = (e) => { if (e.code === 'Space' && !e.repeat) { e.preventDefault(); setSpaceDown(true); } };
    const u = (e) => { if (e.code === 'Space') setSpaceDown(false); };
    window.addEventListener('keydown', d);
    window.addEventListener('keyup', u);
    return () => { window.removeEventListener('keydown', d); window.removeEventListener('keyup', u); };
  }, []);

  const handleDragOver = (e) => { e.preventDefault(); e.dataTransfer.dropEffect = 'copy'; };
  const handleDrop = (e) => {
    e.preventDefault();
    const defId = e.dataTransfer.getData('defId');
    if (!defId) return;
    const { x, y } = clientToWorld(e.clientX, e.clientY);
    addComponent(defId, x, y);
  };

  const handleCanvasMouseDown = (e) => {
    if (e.button === 1 || spaceDown) {
      e.preventDefault();
      setPanning({ sx: e.clientX, sy: e.clientY, ox: vt.x, oy: vt.y });
      return;
    }
    if (e.target.dataset.bg) {
      clearSelection(); setSelectedWire(null); setPendingWire(null);
      if (mode === 'text' && !simMode) {
        const w = clientToWorld(e.clientX, e.clientY);
        const text = window.prompt('Ketik teks anotasi:', 'Teks');
        if (text) addAnnotation(w.x, w.y, text);
        return;
      }
      // start rubber band
      if (mode === 'select' && !simMode) {
        const w = clientToWorld(e.clientX, e.clientY);
        setRubberBand({ sx: w.x, sy: w.y, ex: w.x, ey: w.y });
      }
    }
  };

  const handleCompMouseDown = (e, id) => {
    if (simMode) return;
    if (mode === 'wire' || mode === 'delete' || spaceDown) return;
    e.stopPropagation();

    if (e.ctrlKey || e.metaKey) {
      toggleSelect(id);
      return;
    }

    // if clicking a component not in current selection, select it alone
    if (!selection.has(id)) {
      setSelected(id);
      setSelectedWire(null);
    }

    // start drag for all currently selected (or just this one if newly selected)
    const ids = selection.has(id) ? selection : new Set([id]);
    const w = clientToWorld(e.clientX, e.clientY);
    const origPositions = new Map(
      placed.filter(c => ids.has(c.id)).map(c => [c.id, { x: c.x, y: c.y }])
    );
    // store anchor in world coords for absolute delta calculation
    setDragging({ ids, origPositions, anchorX: w.x, anchorY: w.y });
  };

  const handleCompClick = (e, id) => {
    if (simMode) {
      e.stopPropagation();
      const comp = placed.find(c => c.id === id);
      if (comp && SWITCHABLE.has(comp.defId)) toggleSwitch(id);
      return;
    }
    if (mode === 'delete') { e.stopPropagation(); deleteComponent(id); }
  };

  const handleMouseMove = useCallback((e) => {
    if (panning) {
      setVt(v => ({ ...v, x: panning.ox + (e.clientX - panning.sx), y: panning.oy + (e.clientY - panning.sy) }));
      return;
    }
    const w = clientToWorld(e.clientX, e.clientY);
    if (dragging) {
      const dx = w.x - dragging.anchorX;
      const dy = w.y - dragging.anchorY;
      const snapV = v => Math.round(v / GRID) * GRID;
      const posMap = new Map(
        [...dragging.origPositions.entries()].map(([cid, orig]) => [
          cid, { x: snapV(orig.x + dx), y: snapV(orig.y + dy) },
        ])
      );
      applyPositions(posMap);
    }
    if (draggingWire) {
      const { wireId, segIdx, isH } = draggingWire;
      const wire = wires.find(wr => wr.id === wireId);
      if (wire) {
        const allPoints = getWirePoints(wire, compMap, defMap);
        if (allPoints && segIdx > 0 && segIdx + 1 < allPoints.length) {
          const snap = v => Math.round(v / GRID) * GRID;
          const newPts = allPoints.map(p => ({ ...p }));
          if (isH) {
            const newY = snap(w.y);
            newPts[segIdx].y     = newY;
            newPts[segIdx + 1].y = newY;
          } else {
            const newX = snap(w.x);
            newPts[segIdx].x     = newX;
            newPts[segIdx + 1].x = newX;
          }
          applyWireWaypoints(wireId, newPts.slice(1, -1));
        }
      }
    }
    if (rubberBand) setRubberBand(rb => rb ? { ...rb, ex: w.x, ey: w.y } : rb);
    if (pendingWire) setPendingWire(pw => pw ? { ...pw, x2: w.x, y2: w.y } : pw);
  }, [panning, dragging, draggingWire, rubberBand, pendingWire, applyPositions, applyWireWaypoints, clientToWorld, wires, compMap, defMap]);

  const handleMouseUp = useCallback(() => {
    if (panning) { setPanning(null); return; }
    if (dragging) {
      commitMove(dragging.ids, dragging.origPositions);
      setDragging(null);
    }
    if (draggingWire) {
      commitWireWaypointsEnd(draggingWire.wireId, draggingWire.origWaypoints);
      setDraggingWire(null);
    }
    if (rubberBand) {
      const { sx, sy, ex, ey } = rubberBand;
      const minX = Math.min(sx, ex), maxX = Math.max(sx, ex);
      const minY = Math.min(sy, ey), maxY = Math.max(sy, ey);
      // only select if dragged at least a few pixels
      if (maxX - minX > 4 || maxY - minY > 4) {
        const R = 40; // half typical component size
        const ids = placed
          .filter(c => c.x + R >= minX && c.x - R <= maxX && c.y + R >= minY && c.y - R <= maxY)
          .map(c => c.id);
        selectMany(ids);
      }
      setRubberBand(null);
    }
  }, [panning, dragging, draggingWire, rubberBand, commitMove, commitWireWaypointsEnd, placed, selectMany]);

  const handlePortClick = (compId, portIdx) => {
    if (mode !== 'wire') return;
    const comp = placed.find(c => c.id === compId);
    if (!comp) return;
    const def = defMap[comp.defId];
    if (!def) return;
    const world = getPortWorld(comp, def, portIdx);
    if (!world) return;
    if (!pendingWire) {
      setPendingWire({ compId, portIdx, x1: world.x, y1: world.y, x2: world.x, y2: world.y });
    } else {
      if (pendingWire.compId !== compId || pendingWire.portIdx !== portIdx)
        addWire(pendingWire.compId, pendingWire.portIdx, compId, portIdx, wireColor);
      setPendingWire(null);
    }
  };

  // Convert a port-adjacent segment to an inner segment by inserting a
  // zero-length junction at the port position. Returns the new waypoints array
  // and the corrected segIdx that points at the now-inner segment.
  const prepDogLeg = useCallback((allPoints, segIdx) => {
    const n   = allPoints.length;
    const wps = allPoints.slice(1, -1).map(p => ({ ...p }));
    if (segIdx === 0) {
      wps.unshift({ x: allPoints[0].x, y: allPoints[0].y });
      return { wps, newIdx: 1 };
    }
    if (segIdx === n - 2) {
      wps.push({ x: allPoints[n - 1].x, y: allPoints[n - 1].y });
      return { wps, newIdx: n - 2 }; // same numeric index; n grew by 1 so it's now inner
    }
    return { wps, newIdx: segIdx };
  }, []);

  // wire segment drag — orthogonal axis-constrained, ALL segments draggable
  const handleSegmentMouseDown = useCallback((e, wireId, segIdx, isH) => {
    if (simMode || mode === 'delete') return;
    const wire = wires.find(w => w.id === wireId);
    if (!wire) return;
    setSelectedWire(wireId);
    clearSelection();
    const origWaypoints = [...(wire.waypoints || [])];
    const allPoints = getWirePoints(wire, compMap, defMap);
    if (!allPoints) return;
    const { wps, newIdx } = prepDogLeg(allPoints, segIdx);
    if (newIdx !== segIdx) applyWireWaypoints(wireId, wps);
    setDraggingWire({ wireId, segIdx: newIdx, isH, origWaypoints });
  }, [simMode, mode, wires, compMap, defMap, prepDogLeg, applyWireWaypoints, setSelectedWire, clearSelection]);

  const handleResetWire = useCallback((wireId) => {
    updateWire(wireId, { waypoints: [] });
  }, [updateWire]);

  // clear pending wire whenever mode changes
  useEffect(() => { setPendingWire(null); }, [mode]);

  // keyboard
  useEffect(() => {
    const onKey = (e) => {
      if ((e.key === 'Delete' || e.key === 'Backspace') && !simMode) {
        if (['INPUT','TEXTAREA'].includes(document.activeElement?.tagName)) return;
        deleteSelected();
      }
      if (e.key === 'Escape') { setPendingWire(null); onModeChange('select'); }
      const ctrl = e.ctrlKey || e.metaKey;
      if (ctrl && (e.key === '=' || e.key === '+')) { e.preventDefault(); setVt(v => ({ ...v, scale: clamp(v.scale * 1.2, MIN_SCALE, MAX_SCALE) })); }
      if (ctrl && e.key === '-') { e.preventDefault(); setVt(v => ({ ...v, scale: clamp(v.scale / 1.2, MIN_SCALE, MAX_SCALE) })); }
      if (ctrl && e.key === '0') { e.preventDefault(); setVt({ x: 40, y: 40, scale: 1 }); }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [simMode, deleteSelected, onModeChange]);


  const cursor = spaceDown || panning ? 'grab'
    : simMode ? 'default'
    : mode === 'wire' ? 'crosshair'
    : mode === 'delete' ? 'not-allowed'
    : mode === 'text' ? 'text'
    : 'default';

  // rubber band in SVG coords
  const rb = rubberBand ? {
    x: Math.min(rubberBand.sx, rubberBand.ex),
    y: Math.min(rubberBand.sy, rubberBand.ey),
    w: Math.abs(rubberBand.ex - rubberBand.sx),
    h: Math.abs(rubberBand.ey - rubberBand.sy),
  } : null;

  return (
    <div ref={wrapRef}
      className="flex-1 w-full h-full overflow-hidden bg-slate-50 relative select-none"
      style={{ cursor, paddingBottom: titleBlockHeight }}
      onMouseDown={handleCanvasMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      <svg ref={svgRef} id="diagram-canvas" width="100%" height="100%" style={{ display: 'block' }}>
        <SvgDefs />
        <defs>
          <pattern id="gridPat" width={GRID} height={GRID} patternUnits="userSpaceOnUse">
            <circle cx={0} cy={0} r={0.6} fill="#cbd5e1" />
          </pattern>
        </defs>
        <g transform={`translate(${vt.x},${vt.y}) scale(${vt.scale})`}>
          <rect data-bg="1" x={-5000} y={-5000} width={15000} height={15000} fill="transparent" />
          <rect x={-5000} y={-5000} width={15000} height={15000} fill="url(#gridPat)" pointerEvents="none" />

          <WireLayer
            wires={wires}
            compMap={compMap} defMap={defMap}
            onDeleteWire={mode === 'delete' ? deleteWire : undefined}
            onSelectWire={mode !== 'delete' ? (id) => { setSelectedWire(id); clearSelection(); } : undefined}
            pendingWire={pendingWire ? { ...pendingWire, color: wireColor } : null}
            energizedWires={simResult.energizedWires}
            simMode={simMode}
            selectedWire={selectedWire}
            onSegmentMouseDown={handleSegmentMouseDown}
            onResetWire={handleResetWire}
          />

          {/* text annotations */}
          {placed.filter(c => c.defId === '__text__').map(comp => (
            <g key={comp.id}
              transform={`translate(${comp.x},${comp.y})`}
              style={{ cursor: 'move' }}
              onMouseDown={(e) => handleCompMouseDown(e, comp.id)}
              onClick={(e) => { if (mode === 'delete') { e.stopPropagation(); deleteComponent(comp.id); } }}>
              {selection.has(comp.id) && (
                <rect x={-4} y={-14} width={(comp.label?.length || 4) * 7 + 8} height={20} rx={3}
                  fill="#6366f120" stroke="#6366f1" strokeWidth={1.5} strokeDasharray="4 2" />
              )}
              <text x={0} y={0} fontSize={13} fill="#1e293b" fontFamily="system-ui,sans-serif"
                fontWeight="600" style={{ userSelect: 'none' }}>{comp.label}</text>
            </g>
          ))}

          {placed.map(comp => {
            const def = defMap[comp.defId];
            if (!def || comp.defId === '__text__') return null;
            const isEnergized = simMode && simResult.energizedComps.has(comp.id);
            const isSwitchable = simMode && SWITCHABLE.has(comp.defId);
            return (
              <ComponentOnCanvas
                key={comp.id}
                comp={comp} def={def}
                isSelected={selection.has(comp.id)}
                wireMode={mode === 'wire'}
                isEnergized={isEnergized}
                isSwitchable={isSwitchable}
                switchClosed={switchStates[comp.id]}
                onMouseDown={(e) => handleCompMouseDown(e, comp.id)}
                onPortClick={(portIdx, e) => { e.stopPropagation(); handlePortClick(comp.id, portIdx); }}
                onClick={(e) => handleCompClick(e, comp.id)}
              />
            );
          })}

          {/* rubber band selection rect */}
          {rb && (
            <rect x={rb.x} y={rb.y} width={rb.w} height={rb.h}
              fill="#6366f110" stroke="#6366f1" strokeWidth={1 / vt.scale}
              strokeDasharray={`${4 / vt.scale} ${2 / vt.scale}`} pointerEvents="none" />
          )}
        </g>
      </svg>

      {/* empty state guide */}
      {placed.length === 0 && !simMode && (
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none select-none gap-3">
          <div className="text-6xl opacity-20">⚡</div>
          <p className="text-slate-400 text-lg font-medium">Kanvas kosong</p>
          <p className="text-slate-400 text-sm">Seret komponen dari panel kiri ke sini untuk memulai</p>
          <div className="flex gap-4 mt-2 text-xs text-slate-300">
            <span>📌 Seret komponen</span>
            <span>〰 Tarik kabel antar titik</span>
            <span>⚡ Jalankan simulasi</span>
          </div>
        </div>
      )}

      {/* zoom + sim indicator */}
      <div className="absolute bottom-3 right-3 flex items-center gap-2 pointer-events-none">
        {simMode && (
          <span className="text-xs bg-yellow-400 text-yellow-900 px-2 py-1 rounded font-semibold animate-pulse">
            ⚡ MODE SIMULASI
          </span>
        )}
        {selection.size > 1 && !simMode && (
          <span className="text-xs bg-indigo-100 text-indigo-700 px-2 py-1 rounded">
            {selection.size} dipilih
          </span>
        )}
        <span className="text-xs text-slate-400 bg-white/80 px-2 py-1 rounded shadow-sm">
          {Math.round(vt.scale * 100)}%
        </span>
      </div>
    </div>
  );
}
