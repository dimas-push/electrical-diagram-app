import { useState } from 'react';
import { COMPONENT_DEFS, CATEGORIES } from '../data/components';
import ComponentSymbol from './ComponentSymbol';

export default function Sidebar() {
  const [open,   setOpen]   = useState(Object.fromEntries(CATEGORIES.map(c => [c, true])));
  const [search, setSearch] = useState('');

  const toggle = (cat) => setOpen(o => ({ ...o, [cat]: !o[cat] }));

  const handleDragStart = (e, defId) => {
    e.dataTransfer.setData('defId', defId);
    e.dataTransfer.effectAllowed = 'copy';
  };

  const query = search.trim().toLowerCase();
  const filtered = query
    ? COMPONENT_DEFS.filter(d => d.name.toLowerCase().includes(query) || d.id.includes(query))
    : null; // null = show grouped view

  return (
    <aside className="w-52 bg-slate-800 text-slate-100 flex flex-col overflow-y-auto shrink-0 border-r border-slate-700">
      <div className="px-3 py-3 border-b border-slate-700">
        <h1 className="text-sm font-semibold tracking-wide text-slate-200">Komponen</h1>
        <p className="text-xs text-slate-400 mt-0.5">Seret ke kanvas untuk menempatkan</p>
      </div>

      {/* search */}
      <div className="px-3 py-2 border-b border-slate-700">
        <input
          type="text"
          placeholder="Cari komponen..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="w-full bg-slate-700 text-slate-200 placeholder-slate-400 text-xs rounded px-2 py-1.5 outline-none focus:ring-1 focus:ring-indigo-400"
        />
      </div>

      {filtered ? (
        /* search results — flat list */
        <div className="py-1">
          {filtered.length === 0 ? (
            <p className="px-3 py-4 text-xs text-slate-400 text-center">Tidak ditemukan</p>
          ) : filtered.map(def => (
            <div
              key={def.id}
              draggable
              onDragStart={(e) => handleDragStart(e, def.id)}
              className="flex items-center gap-2 px-3 py-1.5 cursor-grab hover:bg-slate-700 active:bg-slate-600 transition-colors select-none"
              title={`Seret untuk menempatkan ${def.name}`}
            >
              <div className="w-8 h-8 flex items-center justify-center shrink-0">
                <ComponentSymbol defId={def.id} color="#94a3b8" size={36} />
              </div>
              <div className="min-w-0">
                <span className="text-xs text-slate-300 leading-tight block truncate">{def.name}</span>
                <span className="text-[10px] text-slate-500 leading-none">{def.category}</span>
              </div>
            </div>
          ))}
        </div>
      ) : (
        /* grouped view */
        CATEGORIES.map(cat => {
          const items = COMPONENT_DEFS.filter(d => d.category === cat);
          return (
            <div key={cat}>
              <button
                className="w-full flex items-center justify-between px-3 py-2 text-xs font-semibold uppercase tracking-wider text-slate-400 hover:text-slate-200 hover:bg-slate-700 transition-colors"
                onClick={() => toggle(cat)}
              >
                {cat}
                <span>{open[cat] ? '▾' : '▸'}</span>
              </button>

              {open[cat] && (
                <div className="pb-1">
                  {items.map(def => (
                    <div
                      key={def.id}
                      draggable
                      onDragStart={(e) => handleDragStart(e, def.id)}
                      className="flex items-center gap-2 px-3 py-1.5 cursor-grab hover:bg-slate-700 active:bg-slate-600 transition-colors select-none"
                      title={`Seret untuk menempatkan ${def.name}`}
                    >
                      <div className="w-8 h-8 flex items-center justify-center shrink-0">
                        <ComponentSymbol defId={def.id} color="#94a3b8" size={36} />
                      </div>
                      <span className="text-xs text-slate-300 leading-tight">{def.name}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })
      )}
    </aside>
  );
}
