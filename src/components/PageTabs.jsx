import { useState } from 'react';

export default function PageTabs({ pages, pageIdx, onSwitch, onAdd, onRename, onDelete }) {
  const [editing, setEditing] = useState(null); // index being renamed

  return (
    <div className="flex items-center bg-slate-100 border-t border-slate-200 px-2 gap-1 shrink-0 overflow-x-auto">
      {pages.map((pg, i) => (
        <div key={pg.id}
          className={`flex items-center gap-1 px-3 py-1.5 rounded-t-lg text-xs font-medium cursor-pointer transition-colors shrink-0
            ${i === pageIdx ? 'bg-white border border-b-white border-slate-200 text-slate-800 -mb-px' : 'text-slate-500 hover:text-slate-700'}`}
          onClick={() => onSwitch(i)}>
          {editing === i ? (
            <input autoFocus className="w-24 text-xs border border-indigo-300 rounded px-1 outline-none"
              defaultValue={pg.name}
              onBlur={e => { onRename(i, e.target.value || pg.name); setEditing(null); }}
              onKeyDown={e => { if (e.key === 'Enter') e.target.blur(); if (e.key === 'Escape') setEditing(null); }}
              onClick={e => e.stopPropagation()} />
          ) : (
            <span onDoubleClick={e => { e.stopPropagation(); setEditing(i); }}>{pg.name}</span>
          )}
          {pages.length > 1 && (
            <button className="ml-1 opacity-40 hover:opacity-100 text-slate-500 hover:text-red-500"
              onClick={e => { e.stopPropagation(); onDelete(i); }}>✕</button>
          )}
        </div>
      ))}
      <button onClick={onAdd}
        className="px-2 py-1.5 text-xs text-slate-400 hover:text-slate-700 transition-colors shrink-0"
        title="Tambah halaman baru">
        + Halaman
      </button>
    </div>
  );
}
