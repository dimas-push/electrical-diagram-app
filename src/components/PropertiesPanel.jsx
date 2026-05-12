import { COMPONENT_DEFS } from '../data/components';

const WIRE_COLORS = [
  { label: 'L1',  color: '#a0522d' },
  { label: 'L2',  color: '#111111' },
  { label: 'L3',  color: '#888888' },
  { label: 'N',   color: '#1565c0' },
  { label: 'PE',  color: '#4caf50' },
  { label: 'PWR', color: '#e53935' },
  { label: 'CTL', color: '#ff9800' },
  { label: 'COM', color: '#334155' },
];

export default function PropertiesPanel({
  placed, wires, selected, selectedWire, selectionSize,
  onUpdate, onDelete, onRotate, onUpdateWire, onDeleteWire, onDeleteSelected,
}) {
  // ── multi-select ──────────────────────────────────────────────────────────
  if (selectionSize > 1) {
    return (
      <aside className="w-52 bg-white border-l border-slate-200 p-4 flex flex-col gap-3 shrink-0">
        <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Multi Seleksi</p>
        <p className="text-sm text-slate-700">{selectionSize} komponen dipilih</p>
        <p className="text-xs text-slate-400">Ctrl+C untuk salin, Ctrl+V untuk tempel</p>
        <button onClick={onDeleteSelected}
          className="mt-auto py-1.5 rounded text-xs bg-red-50 text-red-600 hover:bg-red-100 transition-colors">
          ✕ Hapus Semua ({selectionSize})
        </button>
      </aside>
    );
  }

  // ── wire selected ─────────────────────────────────────────────────────────
  if (selectedWire) {
    const w = wires.find(x => x.id === selectedWire);
    if (!w) return null;
    return (
      <aside className="w-52 bg-white border-l border-slate-200 p-4 flex flex-col gap-3 shrink-0 overflow-y-auto">
        <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Properti Kabel</p>

        <label className="flex flex-col gap-1">
          <span className="text-xs text-slate-500">Label / Nomor</span>
          <input className="border border-slate-300 rounded px-2 py-1 text-sm focus:outline-none focus:ring-1 focus:ring-indigo-400"
            value={w.label || ''} placeholder="e.g. W001"
            onChange={e => onUpdateWire(w.id, { label: e.target.value })} />
        </label>

        <div className="flex flex-col gap-1">
          <span className="text-xs text-slate-500">Warna / Fasa</span>
          <div className="flex flex-wrap gap-1">
            {WIRE_COLORS.map(wc => (
              <button key={wc.color} title={wc.label}
                onClick={() => onUpdateWire(w.id, { color: wc.color })}
                className="flex flex-col items-center gap-0.5 px-1.5 py-1 rounded"
                style={{ outline: w.color === wc.color ? `2px solid ${wc.color}` : '2px solid transparent', outlineOffset: 1 }}>
                <div className="w-5 h-3 rounded-sm" style={{ background: wc.color }} />
                <span className="text-[9px] text-slate-500">{wc.label}</span>
              </button>
            ))}
          </div>
        </div>

        <button onClick={() => onDeleteWire(w.id)}
          className="mt-auto py-1.5 rounded text-xs bg-red-50 text-red-600 hover:bg-red-100 transition-colors">
          ✕ Hapus Kabel
        </button>
      </aside>
    );
  }

  // ── component selected ────────────────────────────────────────────────────
  const comp = placed.find(c => c.id === selected);
  if (!comp) return null;
  const def = COMPONENT_DEFS.find(d => d.id === comp.defId);

  return (
    <aside className="w-52 bg-white border-l border-slate-200 p-4 flex flex-col gap-3 shrink-0 overflow-y-auto">
      <div>
        <p className="text-xs font-semibold uppercase tracking-wide text-slate-400 mb-1">Properti Komponen</p>
        <p className="text-sm font-medium text-slate-800">{def?.name}</p>
      </div>

      <label className="flex flex-col gap-1">
        <span className="text-xs text-slate-500">Label (TAG)</span>
        <input className="border border-slate-300 rounded px-2 py-1 text-sm focus:outline-none focus:ring-1 focus:ring-indigo-400"
          value={comp.label} placeholder="e.g. Q1, K1, M1"
          onChange={e => onUpdate(comp.id, { label: e.target.value })} />
      </label>

      <label className="flex flex-col gap-1">
        <span className="text-xs text-slate-500">Nilai / Rating</span>
        <input className="border border-slate-300 rounded px-2 py-1 text-sm focus:outline-none focus:ring-1 focus:ring-indigo-400"
          value={comp.value} placeholder="e.g. 16A, 5.5kW"
          onChange={e => onUpdate(comp.id, { value: e.target.value })} />
      </label>

      {/* rotation */}
      <div className="flex flex-col gap-1">
        <span className="text-xs text-slate-500">Rotasi: {comp.rotation || 0}°</span>
        <input type="range" min={0} max={359} step={1}
          value={comp.rotation || 0}
          onChange={e => onUpdate(comp.id, { rotation: Number(e.target.value) })}
          className="w-full accent-indigo-600" />
        <div className="flex gap-1">
          {[0, 90, 180, 270].map(deg => (
            <button key={deg} onClick={() => onUpdate(comp.id, { rotation: deg })}
              className={`flex-1 py-1 rounded text-xs transition-colors
                ${(comp.rotation || 0) === deg ? 'bg-indigo-600 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}>
              {deg}°
            </button>
          ))}
        </div>
      </div>

      <div className="flex gap-2 pt-1">
        <button onClick={() => onDelete(comp.id)}
          className="flex-1 py-1.5 rounded text-xs bg-red-50 text-red-600 hover:bg-red-100 transition-colors">
          ✕ Hapus
        </button>
      </div>

      <p className="mt-auto text-[10px] text-slate-300 text-center">Klik di luar untuk membatalkan pilihan</p>
    </aside>
  );
}
