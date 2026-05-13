export function getPortWorld(comp, def, portIndex) {
  if (!def || portIndex >= def.ports.length) return null;
  const p = def.ports[portIndex];
  const rad = ((comp.rotation || 0) * Math.PI) / 180;
  return {
    x: comp.x + p.x * Math.cos(rad) - p.y * Math.sin(rad),
    y: comp.y + p.x * Math.sin(rad) + p.y * Math.cos(rad),
  };
}

// Returns all points on the wire path including the two port endpoints
export function getWirePoints(w, compMap, defMap) {
  const fromComp = compMap[w.fromComp];
  const toComp   = compMap[w.toComp];
  if (!fromComp || !toComp) return null;
  const a = getPortWorld(fromComp, defMap[fromComp.defId], w.fromPort);
  const b = getPortWorld(toComp,   defMap[toComp.defId],   w.toPort);
  if (!a || !b) return null;
  const wps = w.waypoints || [];
  if (wps.length === 0) {
    // default orthogonal elbow: H → V → H
    const mx = (a.x + b.x) / 2;
    return [a, { x: mx, y: a.y }, { x: mx, y: b.y }, b];
  }
  return [a, ...wps, b];
}

export default function WireLayer({
  wires, compMap, defMap, onDeleteWire, pendingWire,
  energizedWires, simMode, onSelectWire, selectedWire,
  onSegmentMouseDown, onResetWire,
}) {

  return (
    <g>
      {wires.map(w => {
        const allPoints = getWirePoints(w, compMap, defMap);
        if (!allPoints) return null;

        const pts = allPoints.map(p => `${p.x},${p.y}`).join(' ');
        const n   = allPoints.length;
        const isEnergized = simMode && energizedWires?.has(w.id);
        const isSelected  = selectedWire === w.id;
        const strokeColor = isEnergized ? '#ffeb3b' : (w.color || '#334155');
        const strokeW     = isEnergized ? 3 : 2;
        const midPt       = allPoints[Math.floor(n / 2)];

        return (
          <g key={w.id}>
            {isEnergized && (
              <polyline points={pts} fill="none" stroke="#ffeb3b" strokeWidth={8}
                opacity={0.3} strokeLinecap="round" strokeLinejoin="round" pointerEvents="none" />
            )}
            <polyline points={pts} fill="none" stroke={strokeColor}
              strokeWidth={isSelected ? strokeW + 1.5 : strokeW}
              strokeLinecap="round" strokeLinejoin="round"
              strokeDasharray={isSelected ? '5 3' : undefined}
              pointerEvents="none" />

            {/* per-segment interactive areas */}
            {allPoints.slice(0, -1).map((p, segIdx) => {
              const q   = allPoints[segIdx + 1];
              const dx  = q.x - p.x, dy = q.y - p.y;
              const len = Math.sqrt(dx * dx + dy * dy) || 1;
              const angle = Math.atan2(dy, dx) * 180 / Math.PI;
              const mx = (p.x + q.x) / 2, my = (p.y + q.y) / 2;
              // Horizontal segment: |dx|>|dy| (or dy≈0 for orthogonal)
              const isH = Math.abs(dy) < 1;
              // Only inner segments (not anchored to a port) are draggable
              const isDraggable = isSelected && !simMode && !onDeleteWire
                && segIdx > 0 && segIdx < n - 2;
              const cursor = onDeleteWire
                ? 'pointer'
                : isDraggable
                  ? (isH ? 'ns-resize' : 'ew-resize')
                  : 'pointer';

              return (
                <g key={segIdx}>
                  <rect
                    x={-len / 2} y={-8} width={len} height={16}
                    fill="transparent"
                    transform={`translate(${mx},${my}) rotate(${angle})`}
                    style={{ cursor }}
                    onClick={(e) => {
                      e.stopPropagation();
                      if (onDeleteWire) onDeleteWire(w.id);
                      else onSelectWire?.(w.id);
                    }}
                    onDoubleClick={(e) => {
                      e.stopPropagation();
                      if (!simMode && !onDeleteWire) onResetWire?.(w.id);
                    }}
                    onMouseDown={(e) => {
                      if (isDraggable) {
                        e.stopPropagation();
                        onSegmentMouseDown?.(e, w.id, segIdx, isH);
                      }
                    }}
                  />
                  {/* direction indicator shown on draggable segments when wire is selected */}
                  {isDraggable && (
                    <g transform={`translate(${mx},${my})`} pointerEvents="none">
                      <circle r={7} fill="#6366f1" opacity={0.18} />
                      <text textAnchor="middle" dominantBaseline="middle"
                        fontSize={9} fill="#6366f1" fontWeight="bold">
                        {isH ? '↕' : '↔'}
                      </text>
                    </g>
                  )}
                </g>
              );
            })}

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
