import { COMPONENT_DEFS } from '../data/components';

// Global SVG defs (gradients for 3D effect) — injected once per SVG
export function SvgDefs() {
  return (
    <defs>
      {/* Gray plastic body */}
      <linearGradient id="gBodyGray" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#f0f0f0"/>
        <stop offset="40%" stopColor="#e2e2e2"/>
        <stop offset="100%" stopColor="#c4c4c4"/>
      </linearGradient>
      {/* Light gray cap */}
      <linearGradient id="gCap" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#eaeaea"/>
        <stop offset="100%" stopColor="#c8c8c8"/>
      </linearGradient>
      {/* Orange handle */}
      <linearGradient id="gOrange" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#ffd04a"/>
        <stop offset="40%" stopColor="#f5a623"/>
        <stop offset="100%" stopColor="#c47a10"/>
      </linearGradient>
      {/* Schneider green */}
      <linearGradient id="gGreenSch" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#00b83a"/>
        <stop offset="100%" stopColor="#006e22"/>
      </linearGradient>
      {/* ABB red */}
      <linearGradient id="gRedABB" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#e53935"/>
        <stop offset="100%" stopColor="#b71c1c"/>
      </linearGradient>
      {/* Siemens teal */}
      <linearGradient id="gTealSie" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#00bcd4"/>
        <stop offset="100%" stopColor="#00838f"/>
      </linearGradient>
      {/* Legrand white */}
      <linearGradient id="gLeg" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#ffffff"/>
        <stop offset="100%" stopColor="#d8d8d8"/>
      </linearGradient>
      {/* Metal screw */}
      <radialGradient id="gScrew" cx="35%" cy="30%" r="65%">
        <stop offset="0%" stopColor="#e8e8e8"/>
        <stop offset="60%" stopColor="#b0b0b0"/>
        <stop offset="100%" stopColor="#787878"/>
      </radialGradient>
      {/* Terminal block */}
      <linearGradient id="gTerminal" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#d8d8d8"/>
        <stop offset="100%" stopColor="#a8a8a8"/>
      </linearGradient>
      {/* Blue toggle */}
      <linearGradient id="gBlue" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#64b5f6"/>
        <stop offset="100%" stopColor="#1565c0"/>
      </linearGradient>
      {/* Drop shadow filter */}
      <filter id="fShadow" x="-20%" y="-20%" width="150%" height="150%">
        <feDropShadow dx="1.5" dy="2" stdDeviation="1.5" floodColor="#00000040"/>
      </filter>
      <filter id="fShadowDeep" x="-20%" y="-20%" width="160%" height="160%">
        <feDropShadow dx="2" dy="3" stdDeviation="2.5" floodColor="#00000055"/>
      </filter>
    </defs>
  );
}

// Auto-upgrade flat fills to gradients for instant 3D
const AUTO_GRADIENT = {
  '#f5f5f5': 'url(#gBodyGray)', '#efefef': 'url(#gBodyGray)', '#f0f0f0': 'url(#gBodyGray)',
  '#e0e0e0': 'url(#gCap)',      '#d8d8d8': 'url(#gCap)',      '#e8e8e8': 'url(#gCap)',
  '#f5a623': 'url(#gOrange)',   '#ffa726': 'url(#gOrange)',
  '#009530': 'url(#gGreenSch)', '#00953f': 'url(#gGreenSch)',
  '#c8c8c8': 'url(#gScrew)',    '#bbb':    'url(#gScrew)',
  '#e53935': 'url(#gRedABB)',   '#f44336': 'url(#gRedABB)',
  '#00bcd4': 'url(#gTealSie)',  '#009688': 'url(#gTealSie)',
  '#1565c0': 'url(#gBlue)',     '#1976d2': 'url(#gBlue)',
};

function renderShape(shape, i, tintSelected) {
  const stroke = shape.stroke !== undefined ? shape.stroke : (tintSelected ? '#6366f1' : '#555');
  const strokeWidth = shape.strokeWidth ?? 1;
  const rawFill = shape.fill !== undefined ? shape.fill : 'none';
  // auto-upgrade flat fills to gradient (skip if already gradient, transparent, or 'none')
  const fill = (rawFill && rawFill !== 'none' && !rawFill.startsWith('url(') && !tintSelected)
    ? (AUTO_GRADIENT[rawFill] || rawFill)
    : rawFill;
  const opacity = shape.opacity !== undefined ? shape.opacity : undefined;
  const filter = shape.filter !== undefined ? shape.filter : undefined;
  const common = { stroke, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', opacity, filter };

  switch (shape.type) {
    case 'line':
      return <line key={i} x1={shape.x1} y1={shape.y1} x2={shape.x2} y2={shape.y2} {...common} />;
    case 'rect':
      return <rect key={i} x={shape.x} y={shape.y} width={shape.width} height={shape.height}
        rx={shape.rx ?? 0} ry={shape.ry ?? 0} fill={fill} {...common} />;
    case 'circle':
      return <circle key={i} cx={shape.cx} cy={shape.cy} r={shape.r} fill={fill} {...common} />;
    case 'path':
      return <path key={i} d={shape.d} fill={fill} {...common} />;
    case 'polygon':
      return <polygon key={i} points={shape.points} fill={fill} {...common} />;
    case 'ellipse':
      return <ellipse key={i} cx={shape.cx} cy={shape.cy} rx={shape.rx} ry={shape.ry} fill={fill} {...common} />;
    case 'text':
      return (
        <text key={i} x={shape.x} y={shape.y}
          fontSize={shape.fontSize ?? 7}
          fontWeight={shape.fontWeight ?? 'normal'}
          fontFamily="system-ui, sans-serif"
          fill={shape.fill ?? '#333'}
          stroke="none"
          opacity={opacity}
          textAnchor={shape.anchor ?? 'middle'}
          dominantBaseline={shape.baseline ?? 'middle'}>
          {shape.text}
        </text>
      );
    default:
      return null;
  }
}

// ── Per-component animation overlays ─────────────────────────────────────────
const MCB1 = new Set(['sch_mcb1','abb_mcb1','sie_mcb1','leg_mcb1']);
const MCB3 = new Set(['sch_mcb3','abb_mcb3','sie_mcb3','leg_mcb3']);
const RCCB = new Set(['sch_rccb','abb_rccb','sie_rccb']);
const CONT = new Set(['sch_contactor','abb_contactor']);

function AnimationLayer({ defId, switchClosed, isEnergized }) {
  const t = s => ({ transition: `transform ${s}s ease`, style: true });

  // ── MCB 1-pole: orange rocker slides I↔O ──────────────────────────────
  if (MCB1.has(defId)) {
    return (
      <g style={{ transform: `translateY(${switchClosed ? 0 : 9}px)`, transition: 'transform 0.25s ease' }}>
        <rect x={-9} y={-9} width={18} height={9} rx={2}
          fill={switchClosed ? '#4caf5066' : 'transparent'} stroke="none" />
      </g>
    );
  }

  // ── MCB 3-pole: same but wider ─────────────────────────────────────────
  if (MCB3.has(defId)) {
    return (
      <g style={{ transform: `translateY(${switchClosed ? 0 : 9}px)`, transition: 'transform 0.25s ease' }}>
        <rect x={-29} y={-9} width={58} height={9} rx={2}
          fill={switchClosed ? '#4caf5044' : 'transparent'} stroke="none" />
      </g>
    );
  }

  // ── RCCB: same toggle ─────────────────────────────────────────────────
  if (RCCB.has(defId)) {
    return (
      <g style={{ transform: `translateY(${switchClosed ? 0 : 8}px)`, transition: 'transform 0.25s ease' }}>
        <rect x={-20} y={-12} width={40} height={10} rx={2}
          fill={switchClosed ? '#4caf5044' : 'transparent'} stroke="none" />
      </g>
    );
  }

  // ── Contactor: contact bridge moves down when coil energized ──────────
  if (CONT.has(defId)) {
    const bridgeY = switchClosed ? 6 : -4;
    return (
      <g style={{ transform: `translateY(${bridgeY}px)`, transition: 'transform 0.15s cubic-bezier(0.34,1.56,0.64,1)' }}>
        <rect x={-24} y={-4} width={48} height={5} rx={2}
          fill={switchClosed ? '#e53935' : '#9e9e9e'} opacity={0.85} />
        {/* contact dots */}
        {[-18, 0, 18].map(cx => (
          <circle key={cx} cx={cx} cy={-1.5} r={2.5}
            fill={switchClosed ? '#ff8a65' : '#bdbdbd'} stroke="none" />
        ))}
      </g>
    );
  }

  // ── Pushbutton NO: button cap moves down when pressed ──────────────────
  if (defId === 'gen_pushno') {
    return (
      <g style={{ transform: `translateY(${switchClosed ? 4 : 0}px)`, transition: 'transform 0.08s ease' }}>
        <rect x={-9} y={-26} width={18} height={8} rx={3}
          fill={switchClosed ? '#43a047' : '#e53935'} stroke={switchClosed ? '#2e7d32' : '#c62828'} strokeWidth={1} />
      </g>
    );
  }

  // ── Pushbutton NC: same visual, inverted logic ─────────────────────────
  if (defId === 'gen_pushnc') {
    return (
      <g style={{ transform: `translateY(${switchClosed ? 0 : 4}px)`, transition: 'transform 0.08s ease' }}>
        <rect x={-9} y={-26} width={18} height={8} rx={3}
          fill={switchClosed ? '#43a047' : '#e53935'} stroke={switchClosed ? '#2e7d32' : '#c62828'} strokeWidth={1} />
      </g>
    );
  }

  // ── E-stop: mushroom head presses down when activated ─────────────────
  if (defId === 'gen_estop') {
    return (
      <g style={{ transform: `translateY(${switchClosed ? 0 : 6}px)`, transition: 'transform 0.15s ease' }}>
        <ellipse cx={0} cy={-22} rx={13} ry={7}
          fill={switchClosed ? '#f44336' : '#b71c1c'} stroke={switchClosed ? '#c62828' : '#7f0000'} strokeWidth={1.5} />
      </g>
    );
  }

  // ── Motor: spinning arc when energized ───────────────────────────────
  if (defId === 'gen_motor3' && isEnergized) {
    return (
      <g className="anim-spin">
        <path d="M0,-12 A12,12 0 0,1 10.4,6" fill="none" stroke="#2196f3" strokeWidth={2.5} strokeLinecap="round" />
        <path d="M10.4,6 A12,12 0 0,1 -10.4,6" fill="none" stroke="#4caf50" strokeWidth={2.5} strokeLinecap="round" />
        <path d="M-10.4,6 A12,12 0 0,1 0,-12" fill="none" stroke="#f44336" strokeWidth={2.5} strokeLinecap="round" />
      </g>
    );
  }

  // ── Lamp: warm glow pulse when energized ─────────────────────────────
  if (defId === 'gen_lamp' && isEnergized) {
    return (
      <>
        <circle cx={0} cy={0} r={14} fill="#ffeb3b" opacity={0.35} className="anim-pulse" />
        <circle cx={0} cy={0} r={8}  fill="#fff176" opacity={0.6}  className="anim-flicker" />
      </>
    );
  }

  // ── Coil / relay: magnetic field lines when energized ────────────────
  if (defId === 'gen_coil' && isEnergized) {
    return (
      <>
        {[-12, -4, 4, 12].map((cx, i) => (
          <ellipse key={cx} cx={cx} cy={0} rx={3} ry={10}
            fill="none" stroke="#2196f3" strokeWidth={1}
            opacity={0.5} className="anim-pulse"
            style={{ animationDelay: `${i * 0.15}s` }} />
        ))}
      </>
    );
  }

  return null;
}

export default function ComponentSymbol({ defId, size = 44 }) {
  const def = COMPONENT_DEFS.find(d => d.id === defId);
  if (!def) return null;
  const vb = def.viewBox ?? '-24 -32 48 64';
  return (
    <svg width={size} height={size} viewBox={vb}
      style={{ overflow: 'visible' }}>
      {def.symbol.map((s, i) => renderShape(s, i, false))}
    </svg>
  );
}

export function ComponentOnCanvas({
  comp, def, isSelected, onMouseDown, onPortClick, wireMode, onClick,
  isEnergized, isSwitchable, switchClosed,
}) {
  const portColor = wireMode ? '#10b981' : '#6366f1';
  const vb = def.viewBox ?? '-24 -32 48 64';
  const [vx, vy, vw, vh] = vb.split(' ').map(Number);

  const cursor = isSwitchable ? 'pointer' : wireMode ? 'default' : 'move';

  return (
    <g
      transform={`translate(${comp.x},${comp.y}) rotate(${comp.rotation || 0})`}
      style={{ cursor }}
      filter="url(#fShadow)"
      onMouseDown={(!wireMode && !isSwitchable) ? onMouseDown : undefined}
      onClick={onClick}
    >
      {/* energized glow */}
      {isEnergized && (
        <rect x={vx - 6} y={vy - 6} width={vw + 12} height={vh + 12} rx={6}
          fill="#ffeb3b30" stroke="#ffeb3b" strokeWidth={2} opacity={0.8} />
      )}

      {/* selection highlight */}
      {isSelected && (
        <rect x={vx - 4} y={vy - 4} width={vw + 8} height={vh + 8} rx={5}
          fill="#6366f120" stroke="#6366f1" strokeWidth={1.5} strokeDasharray="4 2" />
      )}

      {/* switch state indicator */}
      {isSwitchable && (
        <circle cx={vx + vw - 2} cy={vy + 2} r={5}
          fill={switchClosed ? '#4caf50' : '#f44336'} stroke="#fff" strokeWidth={1} />
      )}

      {def.symbol.map((s, i) => renderShape(s, i, isSelected))}

      {/* animation overlay */}
      <AnimationLayer defId={comp.defId} switchClosed={switchClosed} isEnergized={isEnergized} />

      {/* label + value below */}
      {(comp.label || comp.value) && (
        <text x={0} y={vy + vh + 8} textAnchor="middle" fontSize={9} fill="#475569"
          stroke="none" fontFamily="system-ui,sans-serif" style={{ userSelect: 'none' }}>
          {[comp.label, comp.value].filter(Boolean).join(' ')}
        </text>
      )}

      {/* ports */}
      {def.ports.map((p, i) => (
        <circle key={i} cx={p.x} cy={p.y} r={wireMode ? 5 : 3}
          fill={wireMode ? portColor : '#fff'}
          stroke={portColor} strokeWidth={1.5}
          style={{ cursor: 'crosshair' }}
          onMouseDown={(e) => { e.stopPropagation(); onPortClick && onPortClick(i, e); }}
        />
      ))}
    </g>
  );
}
