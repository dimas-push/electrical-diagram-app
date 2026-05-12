import { useState } from 'react';
import { exportSVG, exportPNG, exportPDF, saveDiagram, loadDiagram } from '../utils/export';
import { exportExcel } from '../utils/bom';

const MODES = [
  { id: 'select', icon: '↖', label: 'Pilih',       hint: 'Klik untuk memilih • Drag untuk memindah • Ctrl+C/V salin' },
  { id: 'wire',   icon: '〰', label: 'Tarik Kabel', hint: 'Klik titik koneksi pertama, lalu klik titik koneksi kedua' },
  { id: 'delete', icon: '✕', label: 'Hapus',       hint: 'Klik komponen atau kabel untuk menghapus' },
];

const WIRE_COLORS = [
  { label: 'L1 – Fasa 1', color: '#a0522d' },
  { label: 'L2 – Fasa 2', color: '#111111' },
  { label: 'L3 – Fasa 3', color: '#888888' },
  { label: 'N – Netral',  color: '#1565c0' },
  { label: 'PE – Grounding', color: '#4caf50' },
  { label: 'L+ – DC Positif', color: '#e53935' },
  { label: 'L– – DC Negatif', color: '#7b1fa2' },
  { label: 'X – Kontrol', color: '#ff9800' },
  { label: 'C – Umum',   color: '#00838f' },
  { label: 'W – Lainnya', color: '#334155' },
];

export default function Toolbar({
  mode, onModeChange, wireColor, onWireColorChange,
  diagram, canUndo, canRedo, onUndo, onRedo,
  simMode, onToggleSim, showTitleBlock, onToggleTitleBlock,
  onShowBOM, projectInfo,
}) {
  const [showWireMenu,   setShowWireMenu]   = useState(false);
  const [showExportMenu, setShowExportMenu] = useState(false);

  const activeMode  = MODES.find(m => m.id === mode);
  const activeColor = WIRE_COLORS.find(c => c.color === wireColor);
  const hint = simMode
    ? 'Mode Simulasi aktif — klik switch, MCB, atau kontaktor untuk toggle on/off'
    : activeMode?.hint;

  return (
    <header className="shrink-0 bg-white border-b border-slate-200 shadow-sm">

      {/* ── Baris utama ─────────────────────────────────────────────────── */}
      <div className="flex items-center gap-2 px-4 py-2 flex-wrap">

        {/* Logo / nama */}
        <span className="text-sm font-bold text-indigo-700 mr-2 hidden sm:block whitespace-nowrap">
          ⚡ Diagram Listrik
        </span>

        {/* Mode kerja */}
        <div className="flex rounded-lg border border-slate-200 overflow-hidden">
          {MODES.map(m => (
            <button key={m.id} onClick={() => { if (!simMode) onModeChange(m.id); }}
              title={m.label}
              disabled={simMode}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium transition-colors
                ${mode === m.id && !simMode
                  ? 'bg-indigo-600 text-white'
                  : 'bg-white text-slate-600 hover:bg-slate-50'}
                disabled:opacity-40 disabled:cursor-not-allowed border-r border-slate-200 last:border-r-0`}>
              <span>{m.icon}</span>
              <span className="hidden md:inline">{m.label}</span>
            </button>
          ))}
        </div>

        {/* Undo / Redo */}
        <div className="flex rounded-lg border border-slate-200 overflow-hidden">
          <button onClick={onUndo} disabled={!canUndo} title="Batalkan (Ctrl+Z)"
            className="px-3 py-1.5 text-sm bg-white text-slate-600 hover:bg-slate-50 transition-colors
              disabled:opacity-30 disabled:cursor-not-allowed border-r border-slate-200">
            ↩ <span className="hidden md:inline text-xs">Batalkan</span>
          </button>
          <button onClick={onRedo} disabled={!canRedo} title="Ulangi (Ctrl+Y)"
            className="px-3 py-1.5 text-sm bg-white text-slate-600 hover:bg-slate-50 transition-colors
              disabled:opacity-30 disabled:cursor-not-allowed">
            ↪ <span className="hidden md:inline text-xs">Ulangi</span>
          </button>
        </div>

        <div className="h-5 w-px bg-slate-200" />

        {/* Warna kabel — dropdown */}
        <div className="relative">
          <button onClick={() => { setShowWireMenu(v => !v); setShowExportMenu(false); }}
            title="Pilih warna / jenis kabel"
            className={`flex items-center gap-2 px-3 py-1.5 rounded-lg border text-sm font-medium transition-colors
              ${mode === 'wire' ? 'border-indigo-300 bg-indigo-50 text-indigo-700' : 'border-slate-200 bg-white text-slate-600 hover:bg-slate-50'}`}>
            <div className="w-4 h-4 rounded-sm border border-slate-300" style={{ background: wireColor }} />
            <span className="hidden md:inline">{activeColor?.label.split(' – ')[0] ?? 'Kabel'}</span>
            <span className="text-slate-400 text-xs">▾</span>
          </button>

          {showWireMenu && (
            <div className="absolute top-full left-0 mt-1 bg-white border border-slate-200 rounded-xl shadow-lg z-50 py-1 min-w-[180px]"
              onMouseLeave={() => setShowWireMenu(false)}>
              <p className="px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-slate-400">Jenis Kabel</p>
              {WIRE_COLORS.map(wc => (
                <button key={wc.color} onClick={() => { onWireColorChange(wc.color); setShowWireMenu(false); }}
                  className={`w-full flex items-center gap-2.5 px-3 py-2 text-sm text-left hover:bg-slate-50 transition-colors
                    ${wireColor === wc.color ? 'bg-indigo-50 text-indigo-700 font-medium' : 'text-slate-700'}`}>
                  <div className="w-5 h-3 rounded-sm shrink-0" style={{ background: wc.color }} />
                  {wc.label}
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="h-5 w-px bg-slate-200" />

        {/* Simulasi */}
        <button onClick={onToggleSim}
          title={simMode ? 'Keluar dari mode simulasi' : 'Jalankan simulasi rangkaian'}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-sm font-medium transition-colors
            ${simMode
              ? 'bg-yellow-400 border-yellow-500 text-yellow-900 font-bold'
              : 'border-slate-200 bg-white text-slate-600 hover:bg-yellow-50 hover:text-yellow-700 hover:border-yellow-300'}`}>
          ⚡ <span className="hidden md:inline">{simMode ? 'Simulasi Aktif' : 'Simulasi'}</span>
        </button>

        <div className="h-5 w-px bg-slate-200" />

        {/* Simpan / Buka */}
        <button onClick={() => saveDiagram(diagram.getState())} title="Simpan diagram ke file"
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 bg-white text-slate-600 hover:bg-slate-50 text-sm transition-colors">
          💾 <span className="hidden md:inline">Simpan</span>
        </button>
        <button onClick={() => loadDiagram(diagram.loadDiagram)} title="Buka file diagram"
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 bg-white text-slate-600 hover:bg-slate-50 text-sm transition-colors">
          📂 <span className="hidden md:inline">Buka</span>
        </button>

        <div className="h-5 w-px bg-slate-200" />

        {/* Laporan */}
        <button onClick={onShowBOM} title="Lihat daftar material & koneksi"
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 bg-white text-slate-600 hover:bg-slate-50 text-sm transition-colors">
          📋 <span className="hidden md:inline">Laporan</span>
        </button>

        {/* Title Block */}
        <button onClick={onToggleTitleBlock} title="Tampilkan / sembunyikan kop gambar"
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-sm transition-colors
            ${showTitleBlock ? 'bg-slate-700 border-slate-700 text-white' : 'border-slate-200 bg-white text-slate-600 hover:bg-slate-50'}`}>
          🗒 <span className="hidden md:inline">Kop Gambar</span>
        </button>

        {/* Export dropdown */}
        <div className="relative ml-auto">
          <button onClick={() => { setShowExportMenu(v => !v); setShowWireMenu(false); }}
            title="Export gambar atau laporan"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-emerald-200 bg-emerald-50 text-emerald-700 hover:bg-emerald-100 text-sm font-medium transition-colors">
            ⬇ <span className="hidden md:inline">Ekspor</span> <span className="text-xs">▾</span>
          </button>

          {showExportMenu && (
            <div className="absolute top-full right-0 mt-1 bg-white border border-slate-200 rounded-xl shadow-lg z-50 py-1 min-w-[160px]"
              onMouseLeave={() => setShowExportMenu(false)}>
              <p className="px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-slate-400">Format Gambar</p>
              <button onClick={() => { exportPNG(); setShowExportMenu(false); }}
                className="w-full flex items-center gap-2 px-3 py-2 text-sm text-slate-700 hover:bg-slate-50">
                🖼 Gambar PNG
              </button>
              <button onClick={() => { exportPDF(); setShowExportMenu(false); }}
                className="w-full flex items-center gap-2 px-3 py-2 text-sm text-slate-700 hover:bg-slate-50">
                📄 Dokumen PDF
              </button>
              <button onClick={() => { exportSVG(); setShowExportMenu(false); }}
                className="w-full flex items-center gap-2 px-3 py-2 text-sm text-slate-700 hover:bg-slate-50">
                ✏ Vektor SVG
              </button>
              <div className="border-t border-slate-100 my-1" />
              <p className="px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-slate-400">Laporan</p>
              <button onClick={() => { exportExcel(diagram.placed, diagram.wires, projectInfo); setShowExportMenu(false); }}
                className="w-full flex items-center gap-2 px-3 py-2 text-sm text-slate-700 hover:bg-slate-50">
                📊 Excel (BOM)
              </button>
            </div>
          )}
        </div>

      </div>

      {/* ── Status bar / panduan kontekstual ────────────────────────────── */}
      <div className={`px-4 py-1.5 text-xs flex items-center gap-2 border-t border-slate-100
        ${simMode ? 'bg-yellow-50 text-yellow-800' : 'bg-slate-50 text-slate-500'}`}>
        {simMode
          ? <span className="animate-pulse font-semibold">⚡ SIMULASI AKTIF</span>
          : <span className="font-semibold text-slate-600">{activeMode?.label}:</span>
        }
        <span>{hint}</span>
        <span className="ml-auto hidden lg:block opacity-60">Scroll = zoom · Spasi+drag = geser layar · Del = hapus · Esc = batal</span>
      </div>

    </header>
  );
}
