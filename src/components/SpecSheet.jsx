export default function SpecSheet({ def, comp, onClose }) {
  const s = def.specs;
  const rows = [
    ['Nama Produk',       def.name],
    ['Merek',             def.category],
    ['Kode Katalog',      s.catalogNumber],
    ['Kutub (Poles)',     s.poles],
    ['Rating Arus',       s.ampOptions?.join(', ')],
    ['Sensitivitas',      s.sensitivityOptions?.join(', ')],
    ['Rating Terpilih',   comp.value || '-'],
    ['Kurva Pelepasan',   s.curveType],
    ['Kapasitas Icu',     s.Icu],
    ['Kapasitas Ics',     s.Ics],
    ['Tegangan',          s.voltage],
    ['Frekuensi',         s.frequency],
    ['Tingkat Proteksi',  s.ipRating],
    ['Dimensi (H×W×D)',   s.dimensions],
    ['Berat',             s.weight],
    ['Standar',           s.standard],
  ].filter(([, v]) => v != null);

  return (
    <div
      className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-xl shadow-2xl w-full max-w-sm overflow-hidden"
        onClick={e => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-4 py-3 bg-slate-50 border-b border-slate-200">
          <h2 className="text-sm font-semibold text-slate-700">Lembar Spesifikasi</h2>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-slate-700 text-xl leading-none font-light"
          >
            ×
          </button>
        </div>
        <div className="p-4 overflow-y-auto max-h-[70vh]">
          <table className="w-full text-xs border-collapse">
            <tbody>
              {rows.map(([label, value]) => (
                <tr key={label} className="border-b border-slate-100">
                  <td className="py-1.5 pr-3 font-medium text-slate-500 w-[45%]">{label}</td>
                  <td className="py-1.5 text-slate-800 font-mono">{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
