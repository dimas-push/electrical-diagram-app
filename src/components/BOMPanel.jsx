import { generateBOM, generateConnections } from '../utils/bom';

export default function BOMPanel({ placed, wires, onClose }) {
  const bom  = generateBOM(placed);
  const conn = generateConnections(placed, wires);

  return (
    <div className="absolute inset-0 bg-black/40 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-4xl max-h-[90vh] flex flex-col overflow-hidden">
        <div className="flex items-center justify-between px-5 py-3 border-b border-slate-200 bg-slate-50">
          <h2 className="text-sm font-semibold text-slate-700">Bill of Materials & Koneksi Kabel</h2>
          <button onClick={onClose} className="text-slate-400 hover:text-slate-600 text-lg font-bold">✕</button>
        </div>

        <div className="flex-1 overflow-auto p-4 space-y-6">
          {/* BOM Table */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wide text-slate-500 mb-2">
              Bill of Materials ({bom.length} komponen)
            </h3>
            <table className="w-full text-xs border-collapse">
              <thead>
                <tr className="bg-indigo-50">
                  {['No','TAG','Tipe','Merek','Model','Rating'].map(h => (
                    <th key={h} className="border border-slate-200 px-2 py-1.5 text-left font-semibold text-slate-600">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {bom.map(row => (
                  <tr key={row.No} className="hover:bg-slate-50">
                    <td className="border border-slate-200 px-2 py-1 text-slate-500">{row.No}</td>
                    <td className="border border-slate-200 px-2 py-1 font-medium text-indigo-700">{row.TAG}</td>
                    <td className="border border-slate-200 px-2 py-1">{row.Tipe}</td>
                    <td className="border border-slate-200 px-2 py-1 text-slate-600">{row.Merek}</td>
                    <td className="border border-slate-200 px-2 py-1 text-slate-600">{row.Model}</td>
                    <td className="border border-slate-200 px-2 py-1 text-slate-600">{row.Rating}</td>
                  </tr>
                ))}
                {bom.length === 0 && (
                  <tr><td colSpan={6} className="text-center py-4 text-slate-400">Belum ada komponen</td></tr>
                )}
              </tbody>
            </table>
          </div>

          {/* Connection Table */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wide text-slate-500 mb-2">
              Tabel Koneksi ({conn.length} kabel)
            </h3>
            <table className="w-full text-xs border-collapse">
              <thead>
                <tr className="bg-emerald-50">
                  {['No','Label','Warna','Dari','Port','Ke','Port'].map(h => (
                    <th key={h} className="border border-slate-200 px-2 py-1.5 text-left font-semibold text-slate-600">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {conn.map(row => (
                  <tr key={row.No} className="hover:bg-slate-50">
                    <td className="border border-slate-200 px-2 py-1 text-slate-500">{row.No}</td>
                    <td className="border border-slate-200 px-2 py-1 font-medium">
                      <span className="inline-flex items-center gap-1">
                        <span className="w-3 h-3 rounded-sm inline-block" style={{ background: row['Warna'] }} />
                        {row['Label Kabel']}
                      </span>
                    </td>
                    <td className="border border-slate-200 px-2 py-1">
                      <span className="px-1.5 py-0.5 rounded text-white text-[10px]" style={{ background: row['Warna'] }}>
                        {row['Warna']}
                      </span>
                    </td>
                    <td className="border border-slate-200 px-2 py-1 text-indigo-700">{row['Dari (TAG)']}</td>
                    <td className="border border-slate-200 px-2 py-1 text-center text-slate-500">{row['Port Dari']}</td>
                    <td className="border border-slate-200 px-2 py-1 text-indigo-700">{row['Ke (TAG)']}</td>
                    <td className="border border-slate-200 px-2 py-1 text-center text-slate-500">{row['Port Ke']}</td>
                  </tr>
                ))}
                {conn.length === 0 && (
                  <tr><td colSpan={7} className="text-center py-4 text-slate-400">Belum ada kabel</td></tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
