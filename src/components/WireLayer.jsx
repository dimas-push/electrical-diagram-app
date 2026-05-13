import { COMPONENT_DEFS } from '../data/components';

export function getPortWorld(comp, def, portIndex) {
  if (!def || portIndex >= def.ports.length) return null;
  const p = def.ports[portIndex];
  const rad = ((comp.rotation || 0) * Math.PI) / 180;
  return {
    x: comp.x + p.x * Math.cos(rad) - p.y * Math.sin(rad),
    y: comp.y + p.x * Math.sin(rad) + p.y * Math.cos(rad),
  };
}

// Returns array of {x,y} points for the full wire path
export function getWirePoints(w, compMap, defMap) {
  const fromComp = compMap[w.fromComp];
  const toComp   = compMap[w.toComp];
  if (!fromComp || !toComp) return null;
  const a = getPortWorld(fromComp, defMap[fromComp.defId], w.fromPort);
  const b = getPortWorld(toComp,   defMap[toComp.defId],   w.toPort);
  if (!a || !b) return null;
  const waypoints = w.waypoints || [];
  if (waypoints.length === 0) {
    // default orthogonal elbow
    const mx = (a.x + b.x) / 2;
    return [a, { x: mx, y: a.y }, { x: mx, y: b.y }, b];
  }
  return [a, ...waypoints, b];
}

export default function WireLayer({
  placed, wires, onDeleteWire, pendingWire,
  energizedWires, simMode, onSelectWire, selectedWire,
  onWaypointMouseDown, onSegmentMouseDown, onWaypointDoubleClick,
}) {
  const compMap = Object.fromEntries(placed.map(c => [c.id, c]));
  const defMap  = Object.fromEntries(COMPONENT_DEFS.map(d => [d.id, d]));

  return (
    <g>
      {wires.map(w => {
        const allPoints = getWirePoints(w, compMap, defMap);
        if (!allPoints) return null;

        const pts = allPoints.map(p => `${p.x},${p.y}`).join(' ');
        const isEnergized = simMode && energizedWires?.has(w.id);
        const isSelected  = selectedWire === w.id;
        const strokeColor = isEnergized ? '#ffeb3b' : (w.color || '#334155');
        const strokeW     = isEnergized ? 3 : 2;
        const waypoints   = w.waypoints || [];

        // label at midpoint
        const midPt = allPoints[Math.floor(allPoints.length / 2)];

        return (
          <g key={w.id}>
            {isEnergized && (
              <polyline points={pts} fill="none" stroke="#ffeb3b" strokeWidth={8} opacity={0.3}
                strokeLinecap="round" strokeLinejoin="round" pointerEvents="none" />
            )}
            <polyline points={pts} fill="none" stroke={strokeColor}
              strokeWidth={isSelected ? strokeW + 1.5 : strokeW}
              strokeLinecap="round" strokeLinejoin="round"
              strokeDasharray={isSelected ? '5 3' : undefined}
              pointerEvents="none" />

            {/* per-segment hit areas */}
            {allPoints.slice(0, -1).map((p, segIdx) => {
              const q = allPoints[segIdx + 1];
              const mx = (p.x + q.x) / 2;
              const my = (p.y + q.y) / 2;
              const dx = q.x - p.x;
              const dy = q.y - p.y;
              const len = Math.sqrt(dx * dx + dy * dy) || 1;
              const angle = Math.atan2(dy, dx) * 180 / Math.PI;
              const canDrag = isSelected && !simMode && !onDeleteWire && onSegmentMouseDown;
              return (
                <rect
                  key={segIdx}
                  x={-len / 2} y={-8} width={len} height={16}
                  fill="transparent"
                  transform={`translate(${mx},${my}) rotate(${angle})`}
                  style={{ cursor: onDeleteWire ? 'pointer' : canDrag ? 'move' : 'pointer' }}
                  onClick={(e) => {
                    e.stopPropagation();
                    if (onDeleteWire) onDeleteWire(w.id);
                    else onSelectWire?.(w.id);
                  }}
                  onMouseDown={(e) => {
                    if (canDrag) {
                      e.stopPropagation();
                      onSegmentMouseDown(e, w.id, segIdx, mx, my);
                    }
                  }}
                />
              );
            })}

            {/* waypoint drag handles (visible when selected) */}
            {isSelected && !simMode && !onDeleteWire && waypoints.map((wp, wpIdx) => (
              <g key={`wp-${wpIdx}`}>
                <circle cx={wp.x} cy={wp.y} r={7} fill="transparent" />
                <circle cx={wp.x} cy={wp.y} r={5}
                  fill="#6366f1" stroke="#fff" strokeWidth={1.5}
                  style={{ cursor: 'move' }}
                  onMouseDown={(e) => { e.stopPropagation(); onWaypointMouseDown?.(e, w.id, wpIdx); }}
                  onDoubleClick={(e) => { e.stopPropagation(); onWaypointDoubleClick?.(w.id, wpIdx); }}
                />
              </g>
            ))}

            {/* wire label */}
            {w.label && (
              <g pointerEvents="none">
                <rect x={midPt.x - 12} y={midPt.y - 6} width={24} height={12} rx={2}
                  fill="#fff" stroke={w.color || '#334155'} strokeWidth={0.8} opacity={0.9} />
                <text x={midPt.x} y={midPt.y} textAnchor="middle" dominantBaseline="middle"
                  fontSize={7} fill={w.color || '#334155'} fontFamily="system-ui,sans-serif"
                  fontWeight="600" style={{ userSelect: 'none' }}>
                  {w.label}
                </text>
              </g>
            )}
          </g>
        );
      })}

      {/* pending wire preview */}
      {pendingWire && (
        <line x1={pendingWire.x1} y1={pendingWire.y1} x2={pendingWire.x2} y2={pendingWire.y2}
          stroke={pendingWire.color || '#10b981'} strokeWidth={2}
          strokeDasharray="6 3" strokeLinecap="round" />
      )}
    </g>
  );
}
