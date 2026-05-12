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

export default function WireLayer({
  placed, wires, onDeleteWire, pendingWire,
  energizedWires, simMode, onSelectWire, selectedWire,
}) {
  const compMap = Object.fromEntries(placed.map(c => [c.id, c]));
  const defMap  = Object.fromEntries(COMPONENT_DEFS.map(d => [d.id, d]));

  return (
    <g>
      {wires.map(w => {
        const fromComp = compMap[w.fromComp];
        const toComp   = compMap[w.toComp];
        if (!fromComp || !toComp) return null;
        const a = getPortWorld(fromComp, defMap[fromComp.defId], w.fromPort);
        const b = getPortWorld(toComp,   defMap[toComp.defId],   w.toPort);
        if (!a || !b) return null;

        const mx  = (a.x + b.x) / 2;
        const my  = (a.y + b.y) / 2;
        const pts = `${a.x},${a.y} ${mx},${a.y} ${mx},${b.y} ${b.x},${b.y}`;

        const isEnergized = simMode && energizedWires?.has(w.id);
        const isSelected  = selectedWire === w.id;
        const strokeColor = isEnergized ? '#ffeb3b' : (w.color || '#334155');
        const strokeW     = isEnergized ? 3 : 2;

        // label midpoint (midpoint of the elbow)
        const lx = mx;
        const ly = (a.y + b.y) / 2;

        return (
          <g key={w.id}>
            {/* glow for energized */}
            {isEnergized && (
              <polyline points={pts} fill="none" stroke="#ffeb3b" strokeWidth={8} opacity={0.3}
                strokeLinecap="round" strokeLinejoin="round" />
            )}
            <polyline points={pts} fill="none" stroke={strokeColor}
              strokeWidth={isSelected ? strokeW + 1.5 : strokeW}
              strokeLinecap="round" strokeLinejoin="round"
              strokeDasharray={isSelected ? '5 3' : undefined} />
            {/* hit area */}
            <polyline points={pts} fill="none" stroke="transparent" strokeWidth={12}
              style={{ cursor: onDeleteWire ? 'pointer' : 'pointer' }}
              onClick={() => onDeleteWire ? onDeleteWire(w.id) : onSelectWire?.(w.id)} />
            {/* wire label */}
            {w.label && (
              <g>
                <rect x={lx - 12} y={ly - 6} width={24} height={12} rx={2}
                  fill="#fff" stroke={w.color || '#334155'} strokeWidth={0.8} opacity={0.9} />
                <text x={lx} y={ly} textAnchor="middle" dominantBaseline="middle"
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
