export default function TitleBlock({ info, onChange }) {
  const { project='', drawnBy='', date='', revision='A', description='' } = info;
  const today = new Date().toLocaleDateString('id-ID');

  return (
    <div className="absolute bottom-0 left-0 right-0 bg-white border-t-2 border-slate-700 z-10
      flex items-stretch text-xs font-mono select-none" style={{ height: 72 }}>

      {/* description area */}
      <div className="flex-1 border-r border-slate-400 flex flex-col justify-center px-3 py-1 min-w-0">
        <input className="text-sm font-bold text-slate-800 bg-transparent outline-none truncate"
          value={description} placeholder="Deskripsi diagram..."
          onChange={e => onChange({ description: e.target.value })} />
        <input className="text-xs text-slate-500 bg-transparent outline-none truncate mt-0.5"
          value={project} placeholder="Nama Proyek"
          onChange={e => onChange({ project: e.target.value })} />
      </div>

      {/* metadata grid */}
      <div className="grid grid-cols-2 divide-x divide-slate-300" style={{ width: 320 }}>
        <div className="flex flex-col divide-y divide-slate-200">
          <div className="flex items-center px-2 py-0.5 gap-1">
            <span className="text-slate-400 w-16 shrink-0">Dibuat</span>
            <input className="bg-transparent outline-none text-slate-700 flex-1 min-w-0"
              value={drawnBy} placeholder="Nama"
              onChange={e => onChange({ drawnBy: e.target.value })} />
          </div>
          <div className="flex items-center px-2 py-0.5 gap-1">
            <span className="text-slate-400 w-16 shrink-0">Tanggal</span>
            <input className="bg-transparent outline-none text-slate-700 flex-1 min-w-0"
              value={date || today} placeholder={today}
              onChange={e => onChange({ date: e.target.value })} />
          </div>
          <div className="flex items-center px-2 py-0.5 gap-1">
            <span className="text-slate-400 w-16 shrink-0">Revisi</span>
            <input className="bg-transparent outline-none text-slate-700 w-10"
              value={revision} placeholder="A"
              onChange={e => onChange({ revision: e.target.value })} />
          </div>
        </div>

        <div className="flex flex-col items-center justify-center px-3">
          <div className="text-[10px] text-slate-400 mb-0.5">DIAGRAM KELISTRIKAN</div>
          <div className="text-xs font-bold text-indigo-600">Circuit Designer</div>
          <div className="mt-1 flex gap-1 text-[10px] text-slate-400">
            <span>Sheet 1/1</span>
            <span>·</span>
            <span>Rev {revision || 'A'}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
