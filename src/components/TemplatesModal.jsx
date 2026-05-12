import { TEMPLATES } from '../data/templates';

export default function TemplatesModal({ onLoad, onClose }) {
  const handleLoad = (tpl) => {
    if (window.confirm(`Muat template "${tpl.name}"? Diagram saat ini akan diganti.`)) {
      onLoad(tpl.data);
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[80vh] overflow-hidden flex flex-col"
        onClick={e => e.stopPropagation()}>

        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100">
          <div>
            <h2 className="text-lg font-bold text-slate-800">Template Diagram</h2>
            <p className="text-xs text-slate-400 mt-0.5">Pilih template untuk memulai lebih cepat</p>
          </div>
          <button onClick={onClose} className="text-slate-400 hover:text-slate-600 text-xl leading-none">✕</button>
        </div>

        <div className="overflow-y-auto p-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {TEMPLATES.map(tpl => (
            <button key={tpl.id} onClick={() => handleLoad(tpl)}
              className="text-left p-4 rounded-xl border border-slate-200 hover:border-indigo-300 hover:bg-indigo-50 transition-colors group">
              <div className="text-3xl mb-2">{tpl.thumbnail}</div>
              <div className="font-semibold text-slate-800 group-hover:text-indigo-700">{tpl.name}</div>
              <div className="text-xs text-slate-400 mt-1">{tpl.description}</div>
            </button>
          ))}
        </div>

      </div>
    </div>
  );
}
