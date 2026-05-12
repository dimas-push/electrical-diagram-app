import { COMPONENT_DEFS } from '../data/components';
import * as XLSX from 'xlsx';

function getBrand(defId) {
  if (defId.startsWith('sch_')) return 'Schneider Electric';
  if (defId.startsWith('abb_')) return 'ABB';
  if (defId.startsWith('sie_')) return 'Siemens';
  if (defId.startsWith('leg_')) return 'Legrand';
  return 'Generic';
}

function getModel(defId) {
  const map = {
    sch_mcb1:'Easy9', sch_mcb3:'iC60N', sch_rccb:'iID', sch_contactor:'LC1D',
    abb_mcb1:'S200', abb_mcb3:'S200', abb_rccb:'F200', abb_contactor:'AF series',
    sie_mcb1:'5SL', sie_mcb3:'5SL', sie_rccb:'5SV',
    leg_mcb1:'DX³', leg_mcb3:'DX³',
  };
  return map[defId] || '-';
}

export function generateBOM(placed) {
  // count duplicates
  const countMap = {};
  placed.forEach(c => { countMap[c.defId] = (countMap[c.defId] || 0) + 1; });

  return placed.map((c, i) => {
    const def = COMPONENT_DEFS.find(d => d.id === c.defId);
    return {
      No:      i + 1,
      TAG:     c.label || `${c.defId.toUpperCase()}_${i + 1}`,
      Tipe:    def?.name || c.defId,
      Merek:   getBrand(c.defId),
      Model:   getModel(c.defId),
      Rating:  c.value || '-',
      Jumlah:  1,
    };
  });
}

export function generateConnections(placed, wires) {
  const compMap = Object.fromEntries(placed.map(c => [c.id, c]));
  return wires.map((w, i) => {
    const from = compMap[w.fromComp];
    const to   = compMap[w.toComp];
    return {
      No:         i + 1,
      'Label Kabel': w.label || `W${String(i + 1).padStart(3,'0')}`,
      'Warna':    w.color || '#334155',
      'Dari (TAG)':  from?.label || w.fromComp,
      'Port Dari':   w.fromPort + 1,
      'Ke (TAG)':    to?.label   || w.toComp,
      'Port Ke':     w.toPort + 1,
    };
  });
}

export function exportExcel(placed, wires, projectInfo = {}) {
  const wb = XLSX.utils.book_new();

  // BOM sheet
  const bom = generateBOM(placed);
  const bomWs = XLSX.utils.json_to_sheet(bom);
  XLSX.utils.book_append_sheet(wb, bomWs, 'BOM');

  // Connections sheet
  const conn = generateConnections(placed, wires);
  const connWs = XLSX.utils.json_to_sheet(conn);
  XLSX.utils.book_append_sheet(wb, connWs, 'Koneksi Kabel');

  // Project Info sheet
  const info = [
    ['Proyek',       projectInfo.project  || ''],
    ['Digambar oleh',projectInfo.drawnBy  || ''],
    ['Tanggal',      projectInfo.date     || new Date().toLocaleDateString('id-ID')],
    ['Revisi',       projectInfo.revision || 'A'],
    ['Deskripsi',    projectInfo.description || ''],
  ];
  const infoWs = XLSX.utils.aoa_to_sheet(info);
  XLSX.utils.book_append_sheet(wb, infoWs, 'Info Proyek');

  XLSX.writeFile(wb, `BOM-${projectInfo.project || 'diagram'}.xlsx`);
}
