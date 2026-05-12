// Branded electrical components — realistic pictorial symbols
// Brands: Schneider Electric, ABB, Siemens, Legrand, Generic

export const COMPONENT_DEFS = [

  // ══════════════════════════════════════════════════════
  // SCHNEIDER ELECTRIC  — green #009530 / orange #f5a623
  // ══════════════════════════════════════════════════════

  {
    id: 'sch_mcb1',
    name: 'MCB 1P – Easy9',
    category: 'Schneider',
    viewBox: '-16 -42 32 86',
    ports: [{ x: 0, y: -42 }, { x: 0, y: 42 }],
    symbol: [
      // shadow
      { type: 'rect', x: -13, y: -31, width: 26, height: 70, rx: 5, fill: '#00000028', stroke: 'none', filter: 'url(#fShadow)' },
      // body
      { type: 'rect', x: -14, y: -33, width: 26, height: 70, rx: 5, fill: 'url(#gBodyGray)', stroke: '#999', strokeWidth: 1 },
      // edge highlights
      { type: 'rect', x: -14, y: -33, width: 3, height: 70, rx: 2, fill: '#fff', stroke: 'none', opacity: 0.6 },
      { type: 'rect', x: -14, y: -33, width: 26, height: 3, rx: 2, fill: '#fff', stroke: 'none', opacity: 0.6 },
      { type: 'rect', x: 9,   y: -28, width: 2,  height: 58, rx: 1, fill: '#888', stroke: 'none', opacity: 0.4 },
      // top cap
      { type: 'rect', x: -14, y: -33, width: 26, height: 16, rx: 5, fill: 'url(#gCap)', stroke: '#aaa', strokeWidth: 0.8 },
      { type: 'rect', x: -13, y: -33, width: 24, height: 7,  rx: 4, fill: '#fff', stroke: 'none', opacity: 0.5 },
      // bottom cap
      { type: 'rect', x: -14, y: 20,  width: 26, height: 16, rx: 5, fill: 'url(#gCap)', stroke: '#aaa', strokeWidth: 0.8 },
      { type: 'rect', x: -13, y: 20,  width: 24, height: 7,  rx: 4, fill: '#fff', stroke: 'none', opacity: 0.4 },
      // wire stubs
      { type: 'line', x1: 0, y1: -42, x2: 0, y2: -33, stroke: '#777', strokeWidth: 2 },
      { type: 'line', x1: 0, y1: 36,  x2: 0, y2: 42,  stroke: '#777', strokeWidth: 2 },
      // 3D screws
      { type: 'circle', cx: 0, cy: -26, r: 5.5, fill: '#aaa',  stroke: 'none' },
      { type: 'circle', cx: 0, cy: -26, r: 5,   fill: 'url(#gScrew)', stroke: '#888', strokeWidth: 0.8 },
      { type: 'line',   x1: -2.8, y1: -26, x2: 2.8, y2: -26, stroke: '#666', strokeWidth: 1 },
      { type: 'circle', cx: 0, cy: 28,  r: 5.5, fill: '#aaa',  stroke: 'none' },
      { type: 'circle', cx: 0, cy: 28,  r: 5,   fill: 'url(#gScrew)', stroke: '#888', strokeWidth: 0.8 },
      { type: 'line',   x1: -2.8, y1: 28, x2: 2.8, y2: 28, stroke: '#666', strokeWidth: 1 },
      // Schneider green band
      { type: 'rect', x: -14, y: -18, width: 26, height: 9, fill: 'url(#gGreenSch)', stroke: 'none' },
      { type: 'rect', x: -14, y: -18, width: 26, height: 4, fill: '#fff', stroke: 'none', opacity: 0.15 },
      { type: 'text', x: -1, y: -13, text: 'Schneider', fontSize: 3.8, fill: '#fff', fontWeight: 'bold' },
      // orange rocker
      { type: 'rect', x: -11, y: -7,  width: 20, height: 25, rx: 4, fill: '#00000020', stroke: 'none' },
      { type: 'rect', x: -12, y: -8,  width: 20, height: 25, rx: 4, fill: 'url(#gOrange)', stroke: '#c47a10', strokeWidth: 1 },
      { type: 'rect', x: -10, y: -7,  width: 16, height: 10, rx: 3, fill: '#fff', stroke: 'none', opacity: 0.35 },
      { type: 'text', x: -2, y: -1,   text: 'I', fontSize: 9, fill: '#7a3800', fontWeight: 'bold' },
      { type: 'text', x: -2, y: 11,   text: 'O', fontSize: 8, fill: '#7a3800', fontWeight: 'bold' },
      // label
      { type: 'rect', x: -12, y: 18,  width: 22, height: 7,  rx: 1.5, fill: '#fff', stroke: '#ccc', strokeWidth: 0.5 },
      { type: 'text', x: -1, y: 21.5, text: 'Easy9', fontSize: 5, fill: '#009530', fontWeight: 'bold' },
    ],
  },

  {
    id: 'sch_mcb3',
    name: 'MCB 3P – iC60N',
    category: 'Schneider',
    viewBox: '-36 -42 76 88',
    ports: [
      { x: -20, y: -42 }, { x: 0, y: -42 }, { x: 20, y: -42 },
      { x: -20, y: 42 },  { x: 0, y: 42 },  { x: 20, y: 42 },
    ],
    symbol: [
      // ── drop shadow ──
      { type: 'rect', x: -32, y: -32, width: 68, height: 70, rx: 5, fill: '#00000030', stroke: 'none', filter: 'url(#fShadowDeep)' },
      // ── main body ──
      { type: 'rect', x: -34, y: -34, width: 68, height: 70, rx: 5, fill: 'url(#gBodyGray)', stroke: '#999', strokeWidth: 1 },
      // ── left edge highlight ──
      { type: 'rect', x: -34, y: -34, width: 3, height: 70, rx: 2, fill: '#fff', stroke: 'none', opacity: 0.6 },
      // ── top edge highlight ──
      { type: 'rect', x: -34, y: -34, width: 68, height: 3, rx: 2, fill: '#fff', stroke: 'none', opacity: 0.6 },
      // ── right shadow edge ──
      { type: 'rect', x: 31, y: -28, width: 3, height: 58, rx: 1, fill: '#888', stroke: 'none', opacity: 0.5 },
      // ── bottom shadow edge ──
      { type: 'rect', x: -28, y: 33, width: 60, height: 3, rx: 1, fill: '#888', stroke: 'none', opacity: 0.5 },

      // ── top terminal cap ──
      { type: 'rect', x: -34, y: -34, width: 68, height: 16, rx: 5, fill: 'url(#gCap)', stroke: '#aaa', strokeWidth: 0.8 },
      { type: 'rect', x: -33, y: -34, width: 66, height: 7, rx: 4, fill: '#fff', stroke: 'none', opacity: 0.5 },
      // ── bottom terminal cap ──
      { type: 'rect', x: -34, y: 20, width: 68, height: 16, rx: 5, fill: 'url(#gCap)', stroke: '#aaa', strokeWidth: 0.8 },
      { type: 'rect', x: -33, y: 20, width: 66, height: 7, rx: 4, fill: '#fff', stroke: 'none', opacity: 0.4 },

      // ── pole dividers ──
      { type: 'line', x1: -11, y1: -18, x2: -11, y2: 20, stroke: '#bbb', strokeWidth: 1 },
      { type: 'line', x1: 11,  y1: -18, x2: 11,  y2: 20, stroke: '#bbb', strokeWidth: 1 },

      // ── wire stubs ──
      { type: 'line', x1: -20, y1: -42, x2: -20, y2: -34, stroke: '#777', strokeWidth: 2 },
      { type: 'line', x1: 0,   y1: -42, x2: 0,   y2: -34, stroke: '#777', strokeWidth: 2 },
      { type: 'line', x1: 20,  y1: -42, x2: 20,  y2: -34, stroke: '#777', strokeWidth: 2 },
      { type: 'line', x1: -20, y1: 36,  x2: -20, y2: 42,  stroke: '#777', strokeWidth: 2 },
      { type: 'line', x1: 0,   y1: 36,  x2: 0,   y2: 42,  stroke: '#777', strokeWidth: 2 },
      { type: 'line', x1: 20,  y1: 36,  x2: 20,  y2: 42,  stroke: '#777', strokeWidth: 2 },

      // ── 3D screws (top) ──
      { type: 'circle', cx: -20, cy: -26, r: 5.5, fill: '#aaa', stroke: 'none' },
      { type: 'circle', cx: -20, cy: -26, r: 5,   fill: 'url(#gScrew)', stroke: '#888', strokeWidth: 0.8 },
      { type: 'line',   x1: -22.5, y1: -26, x2: -17.5, y2: -26, stroke: '#666', strokeWidth: 1 },
      { type: 'circle', cx: 0,   cy: -26, r: 5.5, fill: '#aaa', stroke: 'none' },
      { type: 'circle', cx: 0,   cy: -26, r: 5,   fill: 'url(#gScrew)', stroke: '#888', strokeWidth: 0.8 },
      { type: 'line',   x1: -2.5,  y1: -26, x2: 2.5,   y2: -26, stroke: '#666', strokeWidth: 1 },
      { type: 'circle', cx: 20,  cy: -26, r: 5.5, fill: '#aaa', stroke: 'none' },
      { type: 'circle', cx: 20,  cy: -26, r: 5,   fill: 'url(#gScrew)', stroke: '#888', strokeWidth: 0.8 },
      { type: 'line',   x1: 17.5,  y1: -26, x2: 22.5,  y2: -26, stroke: '#666', strokeWidth: 1 },

      // ── 3D screws (bottom) ──
      { type: 'circle', cx: -20, cy: 28, r: 5.5, fill: '#aaa', stroke: 'none' },
      { type: 'circle', cx: -20, cy: 28, r: 5,   fill: 'url(#gScrew)', stroke: '#888', strokeWidth: 0.8 },
      { type: 'line',   x1: -22.5, y1: 28, x2: -17.5, y2: 28, stroke: '#666', strokeWidth: 1 },
      { type: 'circle', cx: 0,   cy: 28, r: 5.5, fill: '#aaa', stroke: 'none' },
      { type: 'circle', cx: 0,   cy: 28, r: 5,   fill: 'url(#gScrew)', stroke: '#888', strokeWidth: 0.8 },
      { type: 'line',   x1: -2.5,  y1: 28, x2: 2.5,   y2: 28, stroke: '#666', strokeWidth: 1 },
      { type: 'circle', cx: 20,  cy: 28, r: 5.5, fill: '#aaa', stroke: 'none' },
      { type: 'circle', cx: 20,  cy: 28, r: 5,   fill: 'url(#gScrew)', stroke: '#888', strokeWidth: 0.8 },
      { type: 'line',   x1: 17.5,  y1: 28, x2: 22.5,  y2: 28, stroke: '#666', strokeWidth: 1 },

      // ── Schneider green band ──
      { type: 'rect', x: -34, y: -18, width: 68, height: 9, fill: 'url(#gGreenSch)', stroke: 'none' },
      { type: 'rect', x: -34, y: -18, width: 68, height: 4, fill: '#fff', stroke: 'none', opacity: 0.15 },
      { type: 'text', x: 0, y: -13, text: 'Schneider Electric', fontSize: 4.5, fill: '#fff', fontWeight: 'bold' },

      // ── orange toggle rocker ──
      { type: 'rect', x: -31, y: -8, width: 62, height: 26, rx: 4, fill: '#00000020', stroke: 'none' },
      { type: 'rect', x: -32, y: -9, width: 62, height: 26, rx: 4, fill: 'url(#gOrange)', stroke: '#c47a10', strokeWidth: 1 },
      { type: 'rect', x: -30, y: -8, width: 58, height: 10, rx: 3, fill: '#fff', stroke: 'none', opacity: 0.35 },
      { type: 'text', x: 0, y: -2, text: 'I', fontSize: 9, fill: '#7a3800', fontWeight: 'bold' },
      { type: 'text', x: 0, y: 11, text: 'O', fontSize: 8, fill: '#7a3800', fontWeight: 'bold' },

      // ── label strip ──
      { type: 'rect', x: -30, y: 18, width: 60, height: 8, rx: 1.5, fill: '#fff', stroke: '#ccc', strokeWidth: 0.5 },
      { type: 'text', x: 0, y: 22, text: 'iC60N  3P', fontSize: 5.5, fill: '#009530', fontWeight: 'bold' },
    ],
  },

  {
    id: 'sch_rccb',
    name: 'RCCB – iID',
    category: 'Schneider',
    viewBox: '-30 -44 60 88',
    ports: [
      { x: -12, y: -44 }, { x: 12, y: -44 },
      { x: -12, y: 44 },  { x: 12, y: 44 },
    ],
    symbol: [
      { type: 'rect', x: -28, y: -38, width: 56, height: 76, rx: 3, fill: '#f5f5f5', stroke: '#bbb', strokeWidth: 1 },
      { type: 'rect', x: -28, y: -38, width: 56, height: 12, rx: 3, fill: '#e0e0e0', stroke: '#bbb', strokeWidth: 0.8 },
      { type: 'rect', x: -28, y: 26, width: 56, height: 12, rx: 3, fill: '#e0e0e0', stroke: '#bbb', strokeWidth: 0.8 },
      { type: 'line', x1: 0, y1: -36, x2: 0, y2: 34, stroke: '#ccc', strokeWidth: 0.8 },
      { type: 'line', x1: -12, y1: -44, x2: -12, y2: -38, stroke: '#555', strokeWidth: 1.5 },
      { type: 'line', x1: 12,  y1: -44, x2: 12,  y2: -38, stroke: '#555', strokeWidth: 1.5 },
      { type: 'line', x1: -12, y1: 38, x2: -12, y2: 44, stroke: '#555', strokeWidth: 1.5 },
      { type: 'line', x1: 12,  y1: 38, x2: 12,  y2: 44, stroke: '#555', strokeWidth: 1.5 },
      { type: 'circle', cx: -12, cy: -31, r: 3.5, fill: '#c8c8c8', stroke: '#999', strokeWidth: 0.8 },
      { type: 'circle', cx: 12,  cy: -31, r: 3.5, fill: '#c8c8c8', stroke: '#999', strokeWidth: 0.8 },
      { type: 'circle', cx: -12, cy: 31, r: 3.5, fill: '#c8c8c8', stroke: '#999', strokeWidth: 0.8 },
      { type: 'circle', cx: 12,  cy: 31, r: 3.5, fill: '#c8c8c8', stroke: '#999', strokeWidth: 0.8 },
      // green band
      { type: 'rect', x: -28, y: -22, width: 56, height: 8, fill: '#009530', stroke: 'none' },
      { type: 'text', x: 0, y: -18, text: 'Schneider', fontSize: 4.5, fill: '#fff', fontWeight: 'bold' },
      // orange toggle
      { type: 'rect', x: -22, y: -12, width: 44, height: 28, rx: 3, fill: '#f5a623', stroke: '#d4891e', strokeWidth: 1 },
      { type: 'rect', x: -20, y: -10, width: 40, height: 10, rx: 2, fill: '#ffc84a', stroke: 'none' },
      { type: 'text', x: 0, y: -4, text: 'I', fontSize: 8, fill: '#7a4800', fontWeight: 'bold' },
      { type: 'text', x: 0, y: 8, text: 'O', fontSize: 7, fill: '#7a4800', fontWeight: 'bold' },
      // TEST button
      { type: 'rect', x: -10, y: 18, width: 20, height: 8, rx: 3, fill: '#ffe082', stroke: '#f9a825', strokeWidth: 0.8 },
      { type: 'text', x: 0, y: 22, text: 'TEST', fontSize: 4.5, fill: '#5d4037' },
      // label
      { type: 'rect', x: -24, y: -36, width: 48, height: 7, rx: 1, fill: '#fff', stroke: '#ddd', strokeWidth: 0.5 },
      { type: 'text', x: 0, y: -32, text: 'iID  RCCB  2P', fontSize: 5, fill: '#009530', fontWeight: 'bold' },
    ],
  },

  {
    id: 'sch_contactor',
    name: 'Contactor – LC1D',
    category: 'Schneider',
    viewBox: '-34 -48 68 96',
    ports: [
      { x: -18, y: -48 }, { x: 0, y: -48 }, { x: 18, y: -48 },
      { x: -18, y: 48 },  { x: 0, y: 48 },  { x: 18, y: 48 },
    ],
    symbol: [
      { type: 'rect', x: -32, y: -42, width: 64, height: 84, rx: 4, fill: '#f5f5f5', stroke: '#bbb', strokeWidth: 1 },
      { type: 'rect', x: -32, y: -42, width: 64, height: 14, rx: 3, fill: '#e0e0e0', stroke: '#bbb', strokeWidth: 0.8 },
      { type: 'rect', x: -32, y: 28, width: 64, height: 14, rx: 3, fill: '#e0e0e0', stroke: '#bbb', strokeWidth: 0.8 },
      { type: 'line', x1: -18, y1: -48, x2: -18, y2: -42, stroke: '#555', strokeWidth: 1.5 },
      { type: 'line', x1: 0,   y1: -48, x2: 0,   y2: -42, stroke: '#555', strokeWidth: 1.5 },
      { type: 'line', x1: 18,  y1: -48, x2: 18,  y2: -42, stroke: '#555', strokeWidth: 1.5 },
      { type: 'line', x1: -18, y1: 42, x2: -18, y2: 48, stroke: '#555', strokeWidth: 1.5 },
      { type: 'line', x1: 0,   y1: 42, x2: 0,   y2: 48, stroke: '#555', strokeWidth: 1.5 },
      { type: 'line', x1: 18,  y1: 42, x2: 18,  y2: 48, stroke: '#555', strokeWidth: 1.5 },
      { type: 'circle', cx: -18, cy: -34, r: 4, fill: '#c8c8c8', stroke: '#999', strokeWidth: 0.8 },
      { type: 'circle', cx: 0,   cy: -34, r: 4, fill: '#c8c8c8', stroke: '#999', strokeWidth: 0.8 },
      { type: 'circle', cx: 18,  cy: -34, r: 4, fill: '#c8c8c8', stroke: '#999', strokeWidth: 0.8 },
      { type: 'circle', cx: -18, cy: 34, r: 4, fill: '#c8c8c8', stroke: '#999', strokeWidth: 0.8 },
      { type: 'circle', cx: 0,   cy: 34, r: 4, fill: '#c8c8c8', stroke: '#999', strokeWidth: 0.8 },
      { type: 'circle', cx: 18,  cy: 34, r: 4, fill: '#c8c8c8', stroke: '#999', strokeWidth: 0.8 },
      // green top band
      { type: 'rect', x: -32, y: -26, width: 64, height: 8, fill: '#009530', stroke: 'none' },
      { type: 'text', x: 0, y: -22, text: 'Schneider Electric', fontSize: 4.5, fill: '#fff', fontWeight: 'bold' },
      // coil body
      { type: 'rect', x: -28, y: -16, width: 56, height: 36, rx: 3, fill: '#e8e8e8', stroke: '#ccc', strokeWidth: 1 },
      // coil winding decoration
      { type: 'path', d: 'M-22,-8 C-18,-16 -12,-16 -8,-8 C-4,0 2,0 6,-8 C10,-16 16,-16 20,-8', fill: 'none', stroke: '#009530', strokeWidth: 1.5 },
      { type: 'path', d: 'M-22,4 C-18,-4 -12,-4 -8,4 C-4,12 2,12 6,4 C10,-4 16,-4 20,4', fill: 'none', stroke: '#009530', strokeWidth: 1.5 },
      { type: 'text', x: 0, y: 16, text: 'LC1D', fontSize: 7, fill: '#009530', fontWeight: 'bold' },
    ],
  },

  // ══════════════════════════════════════════════════════
  // ABB  — red #cc0000 / dark gray
  // ══════════════════════════════════════════════════════

  {
    id: 'abb_mcb1',
    name: 'MCB 1P – S200',
    category: 'ABB',
    viewBox: '-14 -40 28 80',
    ports: [{ x: 0, y: -40 }, { x: 0, y: 40 }],
    symbol: [
      { type: 'rect', x: -12, y: -34, width: 24, height: 68, rx: 3, fill: '#eeeeee', stroke: '#aaa', strokeWidth: 1 },
      { type: 'rect', x: -12, y: -34, width: 24, height: 12, rx: 3, fill: '#d5d5d5', stroke: '#aaa', strokeWidth: 0.8 },
      { type: 'rect', x: -12, y: 22, width: 24, height: 12, rx: 3, fill: '#d5d5d5', stroke: '#aaa', strokeWidth: 0.8 },
      { type: 'line', x1: 0, y1: -40, x2: 0, y2: -34, stroke: '#555', strokeWidth: 1.5 },
      { type: 'line', x1: 0, y1: 34, x2: 0, y2: 40, stroke: '#555', strokeWidth: 1.5 },
      { type: 'circle', cx: 0, cy: -28, r: 4, fill: '#c0c0c0', stroke: '#888', strokeWidth: 0.8 },
      { type: 'line', x1: -2.8, y1: -28, x2: 2.8, y2: -28, stroke: '#666', strokeWidth: 0.8 },
      { type: 'circle', cx: 0, cy: 28, r: 4, fill: '#c0c0c0', stroke: '#888', strokeWidth: 0.8 },
      { type: 'line', x1: -2.8, y1: 28, x2: 2.8, y2: 28, stroke: '#666', strokeWidth: 0.8 },
      // ABB red band
      { type: 'rect', x: -12, y: -20, width: 24, height: 8, fill: '#cc0000', stroke: 'none' },
      { type: 'text', x: 0, y: -16, text: 'ABB', fontSize: 5.5, fill: '#fff', fontWeight: 'bold' },
      // dark gray toggle
      { type: 'rect', x: -10, y: -10, width: 20, height: 24, rx: 3, fill: '#424242', stroke: '#222', strokeWidth: 1 },
      { type: 'rect', x: -8, y: -8, width: 16, height: 9, rx: 2, fill: '#616161', stroke: 'none' },
      { type: 'text', x: 0, y: -3, text: 'I', fontSize: 8, fill: '#fff', fontWeight: 'bold' },
      { type: 'text', x: 0, y: 8, text: 'O', fontSize: 7, fill: '#aaa' },
      // red rating label
      { type: 'rect', x: -10, y: 15, width: 20, height: 7, rx: 1, fill: '#cc0000', stroke: 'none' },
      { type: 'text', x: 0, y: 18, text: 'S200', fontSize: 5, fill: '#fff', fontWeight: 'bold' },
    ],
  },

  {
    id: 'abb_mcb3',
    name: 'MCB 3P – S200',
    category: 'ABB',
    viewBox: '-36 -40 72 80',
    ports: [
      { x: -20, y: -40 }, { x: 0, y: -40 }, { x: 20, y: -40 },
      { x: -20, y: 40 },  { x: 0, y: 40 },  { x: 20, y: 40 },
    ],
    symbol: [
      { type: 'rect', x: -34, y: -34, width: 68, height: 68, rx: 3, fill: '#eeeeee', stroke: '#aaa', strokeWidth: 1 },
      { type: 'rect', x: -34, y: -34, width: 68, height: 12, rx: 3, fill: '#d5d5d5', stroke: '#aaa', strokeWidth: 0.8 },
      { type: 'rect', x: -34, y: 22, width: 68, height: 12, rx: 3, fill: '#d5d5d5', stroke: '#aaa', strokeWidth: 0.8 },
      { type: 'line', x1: -10, y1: -32, x2: -10, y2: 30, stroke: '#ccc', strokeWidth: 0.8 },
      { type: 'line', x1: 10,  y1: -32, x2: 10,  y2: 30, stroke: '#ccc', strokeWidth: 0.8 },
      { type: 'line', x1: -20, y1: -40, x2: -20, y2: -34, stroke: '#555', strokeWidth: 1.5 },
      { type: 'line', x1: 0,   y1: -40, x2: 0,   y2: -34, stroke: '#555', strokeWidth: 1.5 },
      { type: 'line', x1: 20,  y1: -40, x2: 20,  y2: -34, stroke: '#555', strokeWidth: 1.5 },
      { type: 'line', x1: -20, y1: 34, x2: -20, y2: 40, stroke: '#555', strokeWidth: 1.5 },
      { type: 'line', x1: 0,   y1: 34, x2: 0,   y2: 40, stroke: '#555', strokeWidth: 1.5 },
      { type: 'line', x1: 20,  y1: 34, x2: 20,  y2: 40, stroke: '#555', strokeWidth: 1.5 },
      { type: 'circle', cx: -20, cy: -27, r: 4, fill: '#c0c0c0', stroke: '#888', strokeWidth: 0.8 },
      { type: 'circle', cx: 0,   cy: -27, r: 4, fill: '#c0c0c0', stroke: '#888', strokeWidth: 0.8 },
      { type: 'circle', cx: 20,  cy: -27, r: 4, fill: '#c0c0c0', stroke: '#888', strokeWidth: 0.8 },
      { type: 'circle', cx: -20, cy: 27, r: 4, fill: '#c0c0c0', stroke: '#888', strokeWidth: 0.8 },
      { type: 'circle', cx: 0,   cy: 27, r: 4, fill: '#c0c0c0', stroke: '#888', strokeWidth: 0.8 },
      { type: 'circle', cx: 20,  cy: 27, r: 4, fill: '#c0c0c0', stroke: '#888', strokeWidth: 0.8 },
      // ABB red band
      { type: 'rect', x: -34, y: -20, width: 68, height: 8, fill: '#cc0000', stroke: 'none' },
      { type: 'text', x: 0, y: -16, text: 'ABB', fontSize: 6, fill: '#fff', fontWeight: 'bold' },
      // dark toggle
      { type: 'rect', x: -30, y: -10, width: 60, height: 24, rx: 3, fill: '#424242', stroke: '#222', strokeWidth: 1 },
      { type: 'rect', x: -28, y: -8, width: 56, height: 9, rx: 2, fill: '#616161', stroke: 'none' },
      { type: 'text', x: 0, y: -3, text: 'I', fontSize: 8, fill: '#fff', fontWeight: 'bold' },
      { type: 'text', x: 0, y: 8, text: 'O', fontSize: 7, fill: '#aaa' },
      { type: 'rect', x: -28, y: 15, width: 56, height: 7, rx: 1, fill: '#cc0000', stroke: 'none' },
      { type: 'text', x: 0, y: 18, text: 'S200  3P', fontSize: 5.5, fill: '#fff', fontWeight: 'bold' },
    ],
  },

  {
    id: 'abb_rccb',
    name: 'RCCB – F200',
    category: 'ABB',
    viewBox: '-30 -44 60 88',
    ports: [
      { x: -12, y: -44 }, { x: 12, y: -44 },
      { x: -12, y: 44 },  { x: 12, y: 44 },
    ],
    symbol: [
      { type: 'rect', x: -28, y: -38, width: 56, height: 76, rx: 3, fill: '#eeeeee', stroke: '#aaa', strokeWidth: 1 },
      { type: 'rect', x: -28, y: -38, width: 56, height: 12, rx: 3, fill: '#d5d5d5', stroke: '#aaa', strokeWidth: 0.8 },
      { type: 'rect', x: -28, y: 26, width: 56, height: 12, rx: 3, fill: '#d5d5d5', stroke: '#aaa', strokeWidth: 0.8 },
      { type: 'line', x1: 0, y1: -36, x2: 0, y2: 34, stroke: '#ccc', strokeWidth: 0.8 },
      { type: 'line', x1: -12, y1: -44, x2: -12, y2: -38, stroke: '#555', strokeWidth: 1.5 },
      { type: 'line', x1: 12,  y1: -44, x2: 12,  y2: -38, stroke: '#555', strokeWidth: 1.5 },
      { type: 'line', x1: -12, y1: 38, x2: -12, y2: 44, stroke: '#555', strokeWidth: 1.5 },
      { type: 'line', x1: 12,  y1: 38, x2: 12,  y2: 44, stroke: '#555', strokeWidth: 1.5 },
      { type: 'circle', cx: -12, cy: -31, r: 3.5, fill: '#c0c0c0', stroke: '#888', strokeWidth: 0.8 },
      { type: 'circle', cx: 12,  cy: -31, r: 3.5, fill: '#c0c0c0', stroke: '#888', strokeWidth: 0.8 },
      { type: 'circle', cx: -12, cy: 31, r: 3.5, fill: '#c0c0c0', stroke: '#888', strokeWidth: 0.8 },
      { type: 'circle', cx: 12,  cy: 31, r: 3.5, fill: '#c0c0c0', stroke: '#888', strokeWidth: 0.8 },
      { type: 'rect', x: -28, y: -24, width: 56, height: 8, fill: '#cc0000', stroke: 'none' },
      { type: 'text', x: 0, y: -20, text: 'ABB', fontSize: 5.5, fill: '#fff', fontWeight: 'bold' },
      { type: 'rect', x: -22, y: -14, width: 44, height: 28, rx: 3, fill: '#424242', stroke: '#222', strokeWidth: 1 },
      { type: 'rect', x: -20, y: -12, width: 40, height: 10, rx: 2, fill: '#616161', stroke: 'none' },
      { type: 'text', x: 0, y: -6, text: 'I', fontSize: 8, fill: '#fff', fontWeight: 'bold' },
      { type: 'text', x: 0, y: 6, text: 'O', fontSize: 7, fill: '#aaa' },
      { type: 'rect', x: -10, y: 16, width: 20, height: 8, rx: 3, fill: '#ffe082', stroke: '#f9a825', strokeWidth: 0.8 },
      { type: 'text', x: 0, y: 20, text: 'TEST', fontSize: 4.5, fill: '#5d4037' },
      { type: 'rect', x: -24, y: -36, width: 48, height: 7, rx: 1, fill: '#cc0000', stroke: 'none' },
      { type: 'text', x: 0, y: -32, text: 'F200  RCCB  2P', fontSize: 5, fill: '#fff', fontWeight: 'bold' },
    ],
  },

  {
    id: 'abb_contactor',
    name: 'Contactor – AF series',
    category: 'ABB',
    viewBox: '-34 -48 68 96',
    ports: [
      { x: -18, y: -48 }, { x: 0, y: -48 }, { x: 18, y: -48 },
      { x: -18, y: 48 },  { x: 0, y: 48 },  { x: 18, y: 48 },
    ],
    symbol: [
      { type: 'rect', x: -32, y: -42, width: 64, height: 84, rx: 4, fill: '#eeeeee', stroke: '#aaa', strokeWidth: 1 },
      { type: 'rect', x: -32, y: -42, width: 64, height: 14, rx: 3, fill: '#d5d5d5', stroke: '#aaa', strokeWidth: 0.8 },
      { type: 'rect', x: -32, y: 28, width: 64, height: 14, rx: 3, fill: '#d5d5d5', stroke: '#aaa', strokeWidth: 0.8 },
      { type: 'line', x1: -18, y1: -48, x2: -18, y2: -42, stroke: '#555', strokeWidth: 1.5 },
      { type: 'line', x1: 0,   y1: -48, x2: 0,   y2: -42, stroke: '#555', strokeWidth: 1.5 },
      { type: 'line', x1: 18,  y1: -48, x2: 18,  y2: -42, stroke: '#555', strokeWidth: 1.5 },
      { type: 'line', x1: -18, y1: 42, x2: -18, y2: 48, stroke: '#555', strokeWidth: 1.5 },
      { type: 'line', x1: 0,   y1: 42, x2: 0,   y2: 48, stroke: '#555', strokeWidth: 1.5 },
      { type: 'line', x1: 18,  y1: 42, x2: 18,  y2: 48, stroke: '#555', strokeWidth: 1.5 },
      { type: 'circle', cx: -18, cy: -34, r: 4, fill: '#c0c0c0', stroke: '#888', strokeWidth: 0.8 },
      { type: 'circle', cx: 0,   cy: -34, r: 4, fill: '#c0c0c0', stroke: '#888', strokeWidth: 0.8 },
      { type: 'circle', cx: 18,  cy: -34, r: 4, fill: '#c0c0c0', stroke: '#888', strokeWidth: 0.8 },
      { type: 'circle', cx: -18, cy: 34, r: 4, fill: '#c0c0c0', stroke: '#888', strokeWidth: 0.8 },
      { type: 'circle', cx: 0,   cy: 34, r: 4, fill: '#c0c0c0', stroke: '#888', strokeWidth: 0.8 },
      { type: 'circle', cx: 18,  cy: 34, r: 4, fill: '#c0c0c0', stroke: '#888', strokeWidth: 0.8 },
      { type: 'rect', x: -32, y: -26, width: 64, height: 8, fill: '#cc0000', stroke: 'none' },
      { type: 'text', x: 0, y: -22, text: 'ABB', fontSize: 6, fill: '#fff', fontWeight: 'bold' },
      { type: 'rect', x: -28, y: -16, width: 56, height: 36, rx: 3, fill: '#616161', stroke: '#424242', strokeWidth: 1 },
      { type: 'path', d: 'M-22,-8 C-18,-16 -12,-16 -8,-8 C-4,0 2,0 6,-8 C10,-16 16,-16 20,-8', fill: 'none', stroke: '#cc0000', strokeWidth: 1.5 },
      { type: 'path', d: 'M-22,4 C-18,-4 -12,-4 -8,4 C-4,12 2,12 6,4 C10,-4 16,-4 20,4', fill: 'none', stroke: '#cc0000', strokeWidth: 1.5 },
      { type: 'text', x: 0, y: 16, text: 'AF series', fontSize: 6, fill: '#fff', fontWeight: 'bold' },
    ],
  },

  // ══════════════════════════════════════════════════════
  // SIEMENS  — teal #009999 / dark body
  // ══════════════════════════════════════════════════════

  {
    id: 'sie_mcb1',
    name: 'MCB 1P – 5SL',
    category: 'Siemens',
    viewBox: '-14 -40 28 80',
    ports: [{ x: 0, y: -40 }, { x: 0, y: 40 }],
    symbol: [
      { type: 'rect', x: -12, y: -34, width: 24, height: 68, rx: 3, fill: '#f0f0f0', stroke: '#aaa', strokeWidth: 1 },
      { type: 'rect', x: -12, y: -34, width: 24, height: 12, rx: 3, fill: '#d8d8d8', stroke: '#aaa', strokeWidth: 0.8 },
      { type: 'rect', x: -12, y: 22, width: 24, height: 12, rx: 3, fill: '#d8d8d8', stroke: '#aaa', strokeWidth: 0.8 },
      { type: 'line', x1: 0, y1: -40, x2: 0, y2: -34, stroke: '#555', strokeWidth: 1.5 },
      { type: 'line', x1: 0, y1: 34, x2: 0, y2: 40, stroke: '#555', strokeWidth: 1.5 },
      { type: 'circle', cx: 0, cy: -28, r: 4, fill: '#bbb', stroke: '#888', strokeWidth: 0.8 },
      { type: 'line', x1: -2.8, y1: -28, x2: 2.8, y2: -28, stroke: '#666', strokeWidth: 0.8 },
      { type: 'circle', cx: 0, cy: 28, r: 4, fill: '#bbb', stroke: '#888', strokeWidth: 0.8 },
      { type: 'line', x1: -2.8, y1: 28, x2: 2.8, y2: 28, stroke: '#666', strokeWidth: 0.8 },
      // Siemens teal band
      { type: 'rect', x: -12, y: -20, width: 24, height: 8, fill: '#009999', stroke: 'none' },
      { type: 'text', x: 0, y: -16, text: 'SIEMENS', fontSize: 3.5, fill: '#fff', fontWeight: 'bold' },
      // black/dark toggle
      { type: 'rect', x: -10, y: -10, width: 20, height: 24, rx: 3, fill: '#333', stroke: '#111', strokeWidth: 1 },
      { type: 'rect', x: -8, y: -8, width: 16, height: 9, rx: 2, fill: '#555', stroke: 'none' },
      { type: 'text', x: 0, y: -3, text: 'I', fontSize: 8, fill: '#009999', fontWeight: 'bold' },
      { type: 'text', x: 0, y: 8, text: 'O', fontSize: 7, fill: '#777' },
      { type: 'rect', x: -10, y: 15, width: 20, height: 7, rx: 1, fill: '#009999', stroke: 'none' },
      { type: 'text', x: 0, y: 18, text: '5SL', fontSize: 5.5, fill: '#fff', fontWeight: 'bold' },
    ],
  },

  {
    id: 'sie_mcb3',
    name: 'MCB 3P – 5SL',
    category: 'Siemens',
    viewBox: '-36 -40 72 80',
    ports: [
      { x: -20, y: -40 }, { x: 0, y: -40 }, { x: 20, y: -40 },
      { x: -20, y: 40 },  { x: 0, y: 40 },  { x: 20, y: 40 },
    ],
    symbol: [
      { type: 'rect', x: -34, y: -34, width: 68, height: 68, rx: 3, fill: '#f0f0f0', stroke: '#aaa', strokeWidth: 1 },
      { type: 'rect', x: -34, y: -34, width: 68, height: 12, rx: 3, fill: '#d8d8d8', stroke: '#aaa', strokeWidth: 0.8 },
      { type: 'rect', x: -34, y: 22, width: 68, height: 12, rx: 3, fill: '#d8d8d8', stroke: '#aaa', strokeWidth: 0.8 },
      { type: 'line', x1: -10, y1: -32, x2: -10, y2: 30, stroke: '#ccc', strokeWidth: 0.8 },
      { type: 'line', x1: 10,  y1: -32, x2: 10,  y2: 30, stroke: '#ccc', strokeWidth: 0.8 },
      { type: 'line', x1: -20, y1: -40, x2: -20, y2: -34, stroke: '#555', strokeWidth: 1.5 },
      { type: 'line', x1: 0,   y1: -40, x2: 0,   y2: -34, stroke: '#555', strokeWidth: 1.5 },
      { type: 'line', x1: 20,  y1: -40, x2: 20,  y2: -34, stroke: '#555', strokeWidth: 1.5 },
      { type: 'line', x1: -20, y1: 34, x2: -20, y2: 40, stroke: '#555', strokeWidth: 1.5 },
      { type: 'line', x1: 0,   y1: 34, x2: 0,   y2: 40, stroke: '#555', strokeWidth: 1.5 },
      { type: 'line', x1: 20,  y1: 34, x2: 20,  y2: 40, stroke: '#555', strokeWidth: 1.5 },
      { type: 'circle', cx: -20, cy: -27, r: 4, fill: '#bbb', stroke: '#888', strokeWidth: 0.8 },
      { type: 'circle', cx: 0,   cy: -27, r: 4, fill: '#bbb', stroke: '#888', strokeWidth: 0.8 },
      { type: 'circle', cx: 20,  cy: -27, r: 4, fill: '#bbb', stroke: '#888', strokeWidth: 0.8 },
      { type: 'circle', cx: -20, cy: 27, r: 4, fill: '#bbb', stroke: '#888', strokeWidth: 0.8 },
      { type: 'circle', cx: 0,   cy: 27, r: 4, fill: '#bbb', stroke: '#888', strokeWidth: 0.8 },
      { type: 'circle', cx: 20,  cy: 27, r: 4, fill: '#bbb', stroke: '#888', strokeWidth: 0.8 },
      { type: 'rect', x: -34, y: -20, width: 68, height: 8, fill: '#009999', stroke: 'none' },
      { type: 'text', x: 0, y: -16, text: 'SIEMENS', fontSize: 5, fill: '#fff', fontWeight: 'bold' },
      { type: 'rect', x: -30, y: -10, width: 60, height: 24, rx: 3, fill: '#333', stroke: '#111', strokeWidth: 1 },
      { type: 'rect', x: -28, y: -8, width: 56, height: 9, rx: 2, fill: '#555', stroke: 'none' },
      { type: 'text', x: 0, y: -3, text: 'I', fontSize: 8, fill: '#009999', fontWeight: 'bold' },
      { type: 'text', x: 0, y: 8, text: 'O', fontSize: 7, fill: '#777' },
      { type: 'rect', x: -28, y: 15, width: 56, height: 7, rx: 1, fill: '#009999', stroke: 'none' },
      { type: 'text', x: 0, y: 18, text: '5SL  3P', fontSize: 5.5, fill: '#fff', fontWeight: 'bold' },
    ],
  },

  {
    id: 'sie_rccb',
    name: 'RCCB – 5SV',
    category: 'Siemens',
    viewBox: '-30 -44 60 88',
    ports: [
      { x: -12, y: -44 }, { x: 12, y: -44 },
      { x: -12, y: 44 },  { x: 12, y: 44 },
    ],
    symbol: [
      { type: 'rect', x: -28, y: -38, width: 56, height: 76, rx: 3, fill: '#f0f0f0', stroke: '#aaa', strokeWidth: 1 },
      { type: 'rect', x: -28, y: -38, width: 56, height: 12, rx: 3, fill: '#d8d8d8', stroke: '#aaa', strokeWidth: 0.8 },
      { type: 'rect', x: -28, y: 26, width: 56, height: 12, rx: 3, fill: '#d8d8d8', stroke: '#aaa', strokeWidth: 0.8 },
      { type: 'line', x1: 0, y1: -36, x2: 0, y2: 34, stroke: '#ccc', strokeWidth: 0.8 },
      { type: 'line', x1: -12, y1: -44, x2: -12, y2: -38, stroke: '#555', strokeWidth: 1.5 },
      { type: 'line', x1: 12,  y1: -44, x2: 12,  y2: -38, stroke: '#555', strokeWidth: 1.5 },
      { type: 'line', x1: -12, y1: 38, x2: -12, y2: 44, stroke: '#555', strokeWidth: 1.5 },
      { type: 'line', x1: 12,  y1: 38, x2: 12,  y2: 44, stroke: '#555', strokeWidth: 1.5 },
      { type: 'circle', cx: -12, cy: -31, r: 3.5, fill: '#bbb', stroke: '#888', strokeWidth: 0.8 },
      { type: 'circle', cx: 12,  cy: -31, r: 3.5, fill: '#bbb', stroke: '#888', strokeWidth: 0.8 },
      { type: 'circle', cx: -12, cy: 31, r: 3.5, fill: '#bbb', stroke: '#888', strokeWidth: 0.8 },
      { type: 'circle', cx: 12,  cy: 31, r: 3.5, fill: '#bbb', stroke: '#888', strokeWidth: 0.8 },
      { type: 'rect', x: -28, y: -24, width: 56, height: 8, fill: '#009999', stroke: 'none' },
      { type: 'text', x: 0, y: -20, text: 'SIEMENS', fontSize: 4.5, fill: '#fff', fontWeight: 'bold' },
      { type: 'rect', x: -22, y: -14, width: 44, height: 28, rx: 3, fill: '#333', stroke: '#111', strokeWidth: 1 },
      { type: 'rect', x: -20, y: -12, width: 40, height: 10, rx: 2, fill: '#555', stroke: 'none' },
      { type: 'text', x: 0, y: -6, text: 'I', fontSize: 8, fill: '#009999', fontWeight: 'bold' },
      { type: 'text', x: 0, y: 6, text: 'O', fontSize: 7, fill: '#777' },
      { type: 'rect', x: -10, y: 16, width: 20, height: 8, rx: 3, fill: '#ffe082', stroke: '#f9a825', strokeWidth: 0.8 },
      { type: 'text', x: 0, y: 20, text: 'TEST', fontSize: 4.5, fill: '#5d4037' },
      { type: 'rect', x: -24, y: -36, width: 48, height: 7, rx: 1, fill: '#009999', stroke: 'none' },
      { type: 'text', x: 0, y: -32, text: '5SV  RCCB  2P', fontSize: 5, fill: '#fff', fontWeight: 'bold' },
    ],
  },

  // ══════════════════════════════════════════════════════
  // LEGRAND  — white/black, accent #8bc34a lime
  // ══════════════════════════════════════════════════════

  {
    id: 'leg_mcb1',
    name: 'MCB 1P – DX³',
    category: 'Legrand',
    viewBox: '-14 -40 28 80',
    ports: [{ x: 0, y: -40 }, { x: 0, y: 40 }],
    symbol: [
      { type: 'rect', x: -12, y: -34, width: 24, height: 68, rx: 3, fill: '#ffffff', stroke: '#ccc', strokeWidth: 1 },
      { type: 'rect', x: -12, y: -34, width: 24, height: 12, rx: 3, fill: '#eeeeee', stroke: '#ccc', strokeWidth: 0.8 },
      { type: 'rect', x: -12, y: 22, width: 24, height: 12, rx: 3, fill: '#eeeeee', stroke: '#ccc', strokeWidth: 0.8 },
      { type: 'line', x1: 0, y1: -40, x2: 0, y2: -34, stroke: '#555', strokeWidth: 1.5 },
      { type: 'line', x1: 0, y1: 34, x2: 0, y2: 40, stroke: '#555', strokeWidth: 1.5 },
      { type: 'circle', cx: 0, cy: -28, r: 4, fill: '#ddd', stroke: '#bbb', strokeWidth: 0.8 },
      { type: 'line', x1: -2.8, y1: -28, x2: 2.8, y2: -28, stroke: '#888', strokeWidth: 0.8 },
      { type: 'circle', cx: 0, cy: 28, r: 4, fill: '#ddd', stroke: '#bbb', strokeWidth: 0.8 },
      { type: 'line', x1: -2.8, y1: 28, x2: 2.8, y2: 28, stroke: '#888', strokeWidth: 0.8 },
      // Legrand lime/green band
      { type: 'rect', x: -12, y: -20, width: 24, height: 8, fill: '#8bc34a', stroke: 'none' },
      { type: 'text', x: 0, y: -16, text: 'legrand', fontSize: 4, fill: '#fff', fontWeight: 'bold' },
      // black toggle
      { type: 'rect', x: -10, y: -10, width: 20, height: 24, rx: 3, fill: '#212121', stroke: '#000', strokeWidth: 1 },
      { type: 'rect', x: -8, y: -8, width: 16, height: 10, rx: 2, fill: '#8bc34a', stroke: 'none' },
      { type: 'text', x: 0, y: -3, text: 'I', fontSize: 8, fill: '#fff', fontWeight: 'bold' },
      { type: 'text', x: 0, y: 8, text: 'O', fontSize: 7, fill: '#555' },
      { type: 'rect', x: -10, y: 15, width: 20, height: 7, rx: 1, fill: '#212121', stroke: 'none' },
      { type: 'text', x: 0, y: 18, text: 'DX³', fontSize: 5.5, fill: '#8bc34a', fontWeight: 'bold' },
    ],
  },

  {
    id: 'leg_mcb3',
    name: 'MCB 3P – DX³',
    category: 'Legrand',
    viewBox: '-36 -40 72 80',
    ports: [
      { x: -20, y: -40 }, { x: 0, y: -40 }, { x: 20, y: -40 },
      { x: -20, y: 40 },  { x: 0, y: 40 },  { x: 20, y: 40 },
    ],
    symbol: [
      { type: 'rect', x: -34, y: -34, width: 68, height: 68, rx: 3, fill: '#ffffff', stroke: '#ccc', strokeWidth: 1 },
      { type: 'rect', x: -34, y: -34, width: 68, height: 12, rx: 3, fill: '#eeeeee', stroke: '#ccc', strokeWidth: 0.8 },
      { type: 'rect', x: -34, y: 22, width: 68, height: 12, rx: 3, fill: '#eeeeee', stroke: '#ccc', strokeWidth: 0.8 },
      { type: 'line', x1: -10, y1: -32, x2: -10, y2: 30, stroke: '#e0e0e0', strokeWidth: 0.8 },
      { type: 'line', x1: 10,  y1: -32, x2: 10,  y2: 30, stroke: '#e0e0e0', strokeWidth: 0.8 },
      { type: 'line', x1: -20, y1: -40, x2: -20, y2: -34, stroke: '#555', strokeWidth: 1.5 },
      { type: 'line', x1: 0,   y1: -40, x2: 0,   y2: -34, stroke: '#555', strokeWidth: 1.5 },
      { type: 'line', x1: 20,  y1: -40, x2: 20,  y2: -34, stroke: '#555', strokeWidth: 1.5 },
      { type: 'line', x1: -20, y1: 34, x2: -20, y2: 40, stroke: '#555', strokeWidth: 1.5 },
      { type: 'line', x1: 0,   y1: 34, x2: 0,   y2: 40, stroke: '#555', strokeWidth: 1.5 },
      { type: 'line', x1: 20,  y1: 34, x2: 20,  y2: 40, stroke: '#555', strokeWidth: 1.5 },
      { type: 'circle', cx: -20, cy: -27, r: 4, fill: '#ddd', stroke: '#bbb', strokeWidth: 0.8 },
      { type: 'circle', cx: 0,   cy: -27, r: 4, fill: '#ddd', stroke: '#bbb', strokeWidth: 0.8 },
      { type: 'circle', cx: 20,  cy: -27, r: 4, fill: '#ddd', stroke: '#bbb', strokeWidth: 0.8 },
      { type: 'circle', cx: -20, cy: 27, r: 4, fill: '#ddd', stroke: '#bbb', strokeWidth: 0.8 },
      { type: 'circle', cx: 0,   cy: 27, r: 4, fill: '#ddd', stroke: '#bbb', strokeWidth: 0.8 },
      { type: 'circle', cx: 20,  cy: 27, r: 4, fill: '#ddd', stroke: '#bbb', strokeWidth: 0.8 },
      { type: 'rect', x: -34, y: -20, width: 68, height: 8, fill: '#8bc34a', stroke: 'none' },
      { type: 'text', x: 0, y: -16, text: 'legrand', fontSize: 5, fill: '#fff', fontWeight: 'bold' },
      { type: 'rect', x: -30, y: -10, width: 60, height: 24, rx: 3, fill: '#212121', stroke: '#000', strokeWidth: 1 },
      { type: 'rect', x: -28, y: -8, width: 56, height: 10, rx: 2, fill: '#8bc34a', stroke: 'none' },
      { type: 'text', x: 0, y: -3, text: 'I', fontSize: 8, fill: '#fff', fontWeight: 'bold' },
      { type: 'text', x: 0, y: 8, text: 'O', fontSize: 7, fill: '#555' },
      { type: 'rect', x: -28, y: 15, width: 56, height: 7, rx: 1, fill: '#212121', stroke: 'none' },
      { type: 'text', x: 0, y: 18, text: 'DX³  3P', fontSize: 5.5, fill: '#8bc34a', fontWeight: 'bold' },
    ],
  },

  // ══════════════════════════════════════════════════════
  // GENERIC COMPONENTS
  // ══════════════════════════════════════════════════════

  {
    id: 'gen_pushno',
    name: 'Tombol Tekan NO',
    category: 'Generic',
    viewBox: '-20 -26 40 52',
    ports: [{ x: -20, y: 0 }, { x: 20, y: 0 }],
    symbol: [
      { type: 'rect', x: -14, y: -22, width: 28, height: 36, rx: 4, fill: '#e0e0e0', stroke: '#aaa', strokeWidth: 1 },
      { type: 'circle', cx: 0, cy: -10, r: 9, fill: '#4caf50', stroke: '#388e3c', strokeWidth: 1 },
      { type: 'circle', cx: -2, cy: -12, r: 3, fill: '#81c784', stroke: 'none' },
      { type: 'line', x1: -20, y1: 6, x2: -6, y2: 6, stroke: '#555', strokeWidth: 1.5 },
      { type: 'circle', cx: -6, cy: 6, r: 2.5, fill: '#888', stroke: '#555', strokeWidth: 0.8 },
      { type: 'line', x1: -6, y1: 6, x2: 4, y2: -4, stroke: '#555', strokeWidth: 1.5 },
      { type: 'circle', cx: 6, cy: 6, r: 2.5, fill: '#888', stroke: '#555', strokeWidth: 0.8 },
      { type: 'line', x1: 6, y1: 6, x2: 20, y2: 6, stroke: '#555', strokeWidth: 1.5 },
      { type: 'text', x: 0, y: -10, text: 'NO', fontSize: 5, fill: '#fff', fontWeight: 'bold' },
    ],
  },

  {
    id: 'gen_pushnc',
    name: 'Tombol Tekan NC',
    category: 'Generic',
    viewBox: '-20 -26 40 52',
    ports: [{ x: -20, y: 0 }, { x: 20, y: 0 }],
    symbol: [
      { type: 'rect', x: -14, y: -22, width: 28, height: 36, rx: 4, fill: '#e0e0e0', stroke: '#aaa', strokeWidth: 1 },
      { type: 'circle', cx: 0, cy: -10, r: 9, fill: '#f44336', stroke: '#c62828', strokeWidth: 1 },
      { type: 'circle', cx: -2, cy: -12, r: 3, fill: '#ef9a9a', stroke: 'none' },
      { type: 'line', x1: -20, y1: 6, x2: -6, y2: 6, stroke: '#555', strokeWidth: 1.5 },
      { type: 'circle', cx: -6, cy: 6, r: 2.5, fill: '#888', stroke: '#555', strokeWidth: 0.8 },
      { type: 'line', x1: -6, y1: 6, x2: 4, y2: 4, stroke: '#555', strokeWidth: 1.5 },
      { type: 'circle', cx: 6, cy: 6, r: 2.5, fill: '#888', stroke: '#555', strokeWidth: 0.8 },
      { type: 'line', x1: 6, y1: 6, x2: 20, y2: 6, stroke: '#555', strokeWidth: 1.5 },
      { type: 'line', x1: 0, y1: 12, x2: 0, y2: -2, stroke: '#555', strokeWidth: 1 },
      { type: 'text', x: 0, y: -10, text: 'NC', fontSize: 5, fill: '#fff', fontWeight: 'bold' },
    ],
  },

  {
    id: 'gen_estop',
    name: 'Tombol Emergency Stop (E-Stop)',
    category: 'Generic',
    viewBox: '-20 -28 40 56',
    ports: [{ x: -20, y: 8 }, { x: 20, y: 8 }],
    symbol: [
      { type: 'rect', x: -14, y: -24, width: 28, height: 40, rx: 4, fill: '#e0e0e0', stroke: '#aaa', strokeWidth: 1 },
      { type: 'ellipse', cx: 0, cy: -12, rx: 13, ry: 8, fill: '#f44336', stroke: '#b71c1c', strokeWidth: 1.5 },
      { type: 'ellipse', cx: 0, cy: -14, rx: 11, ry: 5, fill: '#ef5350', stroke: 'none' },
      { type: 'rect', x: -3, y: -10, width: 6, height: 10, rx: 1, fill: '#e0e0e0', stroke: '#aaa', strokeWidth: 0.8 },
      { type: 'line', x1: -20, y1: 8, x2: -6, y2: 8, stroke: '#555', strokeWidth: 1.5 },
      { type: 'circle', cx: -6, cy: 8, r: 2.5, fill: '#888', stroke: '#555', strokeWidth: 0.8 },
      { type: 'line', x1: -6, y1: 8, x2: 4, y2: 6, stroke: '#555', strokeWidth: 1.5 },
      { type: 'circle', cx: 6, cy: 8, r: 2.5, fill: '#888', stroke: '#555', strokeWidth: 0.8 },
      { type: 'line', x1: 6, y1: 8, x2: 20, y2: 8, stroke: '#555', strokeWidth: 1.5 },
      { type: 'line', x1: 0, y1: 14, x2: 0, y2: 0, stroke: '#555', strokeWidth: 1 },
      { type: 'text', x: 0, y: -12, text: 'E-STOP', fontSize: 4, fill: '#fff', fontWeight: 'bold' },
    ],
  },

  {
    id: 'gen_motor3',
    name: 'Motor Induksi 3 Fasa',
    category: 'Generic',
    viewBox: '-30 -30 60 60',
    ports: [{ x: -30, y: -12 }, { x: -30, y: 0 }, { x: -30, y: 12 }],
    symbol: [
      { type: 'circle', cx: 8, cy: 0, r: 22, fill: '#e3f2fd', stroke: '#1565c0', strokeWidth: 1.5 },
      { type: 'rect', x: 28, y: -4, width: 10, height: 8, rx: 2, fill: '#90a4ae', stroke: '#607d8b', strokeWidth: 1 },
      { type: 'line', x1: -30, y1: -12, x2: -14, y2: -12, stroke: '#555', strokeWidth: 1.5 },
      { type: 'line', x1: -30, y1: 0,   x2: -14, y2: 0,   stroke: '#555', strokeWidth: 1.5 },
      { type: 'line', x1: -30, y1: 12,  x2: -14, y2: 12,  stroke: '#555', strokeWidth: 1.5 },
      { type: 'text', x: 8, y: 5, text: 'M', fontSize: 16, fill: '#1565c0', fontWeight: 'bold' },
      { type: 'text', x: 8, y: -10, text: '3~', fontSize: 8, fill: '#1976d2' },
    ],
  },

  {
    id: 'gen_coil',
    name: 'Koil Kontaktor / Relay',
    category: 'Generic',
    viewBox: '-28 -14 56 28',
    ports: [{ x: -28, y: 0 }, { x: 28, y: 0 }],
    symbol: [
      { type: 'line', x1: -28, y1: 0, x2: -16, y2: 0, stroke: '#555', strokeWidth: 1.5 },
      { type: 'rect', x: -16, y: -10, width: 32, height: 20, rx: 3, fill: '#fff9c4', stroke: '#f9a825', strokeWidth: 1 },
      { type: 'path', d: 'M-12,0 C-9,-8 -5,-8 -2,0 C1,8 5,8 8,0 C11,-8 13,-8 12,0', fill: 'none', stroke: '#e65100', strokeWidth: 1.2 },
      { type: 'line', x1: 16, y1: 0, x2: 28, y2: 0, stroke: '#555', strokeWidth: 1.5 },
    ],
  },

  {
    id: 'gen_lamp',
    name: 'Lampu Indikator',
    category: 'Generic',
    viewBox: '-20 -24 40 48',
    ports: [{ x: -20, y: 0 }, { x: 20, y: 0 }],
    symbol: [
      { type: 'line', x1: -20, y1: 0, x2: -12, y2: 0, stroke: '#555', strokeWidth: 1.5 },
      { type: 'circle', cx: 0, cy: -4, r: 12, fill: '#fffde7', stroke: '#f9a825', strokeWidth: 1 },
      { type: 'line', x1: -7, y1: -10, x2: 7, y2: 2, stroke: '#ff8f00', strokeWidth: 1.2 },
      { type: 'line', x1: 7, y1: -10, x2: -7, y2: 2, stroke: '#ff8f00', strokeWidth: 1.2 },
      { type: 'rect', x: -6, y: 8, width: 12, height: 5, rx: 1, fill: '#bbb', stroke: '#888', strokeWidth: 0.8 },
      { type: 'line', x1: 12, y1: 0, x2: 20, y2: 0, stroke: '#555', strokeWidth: 1.5 },
    ],
  },

  {
    id: 'gen_busbar',
    name: 'Busbar (Rel Tembaga)',
    category: 'Generic',
    viewBox: '-36 -12 72 24',
    ports: [
      { x: -28, y: 0 }, { x: -14, y: 0 }, { x: 0, y: 0 },
      { x: 14, y: 0 },  { x: 28, y: 0 },
    ],
    symbol: [
      { type: 'rect', x: -36, y: -8, width: 72, height: 16, rx: 2, fill: '#e3d9a0', stroke: '#b8a040', strokeWidth: 1.5 },
      { type: 'rect', x: -36, y: -8, width: 72, height: 6, rx: 2, fill: '#f0e8b0', stroke: 'none' },
      { type: 'circle', cx: -28, cy: 0, r: 3, fill: '#b8a040', stroke: '#8a7530', strokeWidth: 0.8 },
      { type: 'circle', cx: -14, cy: 0, r: 3, fill: '#b8a040', stroke: '#8a7530', strokeWidth: 0.8 },
      { type: 'circle', cx: 0,   cy: 0, r: 3, fill: '#b8a040', stroke: '#8a7530', strokeWidth: 0.8 },
      { type: 'circle', cx: 14,  cy: 0, r: 3, fill: '#b8a040', stroke: '#8a7530', strokeWidth: 0.8 },
      { type: 'circle', cx: 28,  cy: 0, r: 3, fill: '#b8a040', stroke: '#8a7530', strokeWidth: 0.8 },
    ],
  },

  {
    id: 'gen_terminal',
    name: 'Blok Terminal',
    category: 'Generic',
    viewBox: '-16 -16 32 32',
    ports: [{ x: -16, y: 0 }, { x: 16, y: 0 }],
    symbol: [
      { type: 'rect', x: -14, y: -12, width: 28, height: 24, rx: 3, fill: '#fff9c4', stroke: '#f9a825', strokeWidth: 1 },
      { type: 'circle', cx: -5, cy: 0, r: 5, fill: '#e0e0e0', stroke: '#9e9e9e', strokeWidth: 1 },
      { type: 'circle', cx: 5, cy: 0, r: 5, fill: '#e0e0e0', stroke: '#9e9e9e', strokeWidth: 1 },
      { type: 'line', x1: -16, y1: 0, x2: -10, y2: 0, stroke: '#555', strokeWidth: 1.5 },
      { type: 'line', x1: 10, y1: 0, x2: 16, y2: 0, stroke: '#555', strokeWidth: 1.5 },
    ],
  },

  {
    id: 'gen_ground',
    name: 'Ground / Earthing (PE)',
    category: 'Generic',
    viewBox: '-16 -28 32 36',
    ports: [{ x: 0, y: -28 }],
    symbol: [
      { type: 'line', x1: 0, y1: -28, x2: 0, y2: -6, stroke: '#388e3c', strokeWidth: 1.5 },
      { type: 'line', x1: -14, y1: -6, x2: 14, y2: -6, stroke: '#388e3c', strokeWidth: 2 },
      { type: 'line', x1: -9, y1: 0, x2: 9, y2: 0, stroke: '#388e3c', strokeWidth: 2 },
      { type: 'line', x1: -4, y1: 6, x2: 4, y2: 6, stroke: '#388e3c', strokeWidth: 2 },
    ],
  },
  // ══════════════════════════════════════════════════════
  // RUMAH TANGGA (Household)
  // ══════════════════════════════════════════════════════

  { id:'socket_1p', name:'Kotak Kontak 1 Fasa', category:'Rumah Tangga',
    viewBox:'-20 -28 40 56', ports:[{x:0,y:-28},{x:0,y:28}],
    symbol:[
      {type:'rect',x:-18,y:-22,width:36,height:44,rx:4,fill:'#fff9f0',stroke:'#f57c00',strokeWidth:1.5},
      {type:'rect',x:-18,y:-22,width:36,height:9,rx:4,fill:'#f57c00',stroke:'none'},
      {type:'text',x:0,y:-17,text:'SOCKET',fontSize:4.5,fill:'#fff',fontWeight:'bold'},
      {type:'rect',x:-10,y:-10,width:20,height:28,rx:8,fill:'#fff',stroke:'#bbb',strokeWidth:1},
      {type:'circle',cx:-4,cy:-2,r:2.5,fill:'none',stroke:'#555',strokeWidth:1.2},
      {type:'circle',cx:4,cy:-2,r:2.5,fill:'none',stroke:'#555',strokeWidth:1.2},
      {type:'line',x1:0,y1:4,x2:0,y2:10,stroke:'#388e3c',strokeWidth:1.5},
      {type:'line',x1:0,y1:-28,x2:0,y2:-22,stroke:'#555',strokeWidth:1.5},
      {type:'line',x1:0,y1:22,x2:0,y2:28,stroke:'#555',strokeWidth:1.5},
    ]},

  { id:'socket_3p', name:'Kotak Kontak 3 Fasa + N + PE', category:'Rumah Tangga',
    viewBox:'-28 -28 56 56', ports:[{x:-18,y:-28},{x:0,y:-28},{x:18,y:-28},{x:0,y:28}],
    symbol:[
      {type:'rect',x:-26,y:-22,width:52,height:44,rx:4,fill:'#fff9f0',stroke:'#f57c00',strokeWidth:1.5},
      {type:'rect',x:-26,y:-22,width:52,height:9,rx:4,fill:'#f57c00',stroke:'none'},
      {type:'text',x:0,y:-17,text:'3P SOCKET',fontSize:4.5,fill:'#fff',fontWeight:'bold'},
      {type:'circle',cx:0,cy:2,r:14,fill:'#fff',stroke:'#bbb',strokeWidth:1},
      {type:'circle',cx:-7,cy:-4,r:2.5,fill:'none',stroke:'#a0522d',strokeWidth:1.2},
      {type:'circle',cx:7,cy:-4,r:2.5,fill:'none',stroke:'#555',strokeWidth:1.2},
      {type:'circle',cx:0,cy:8,r:2.5,fill:'none',stroke:'#888',strokeWidth:1.2},
      {type:'circle',cx:0,cy:-1,r:2,fill:'none',stroke:'#388e3c',strokeWidth:1.2},
    ]},

  { id:'switch_1g', name:'Saklar Lampu 1 Gang', category:'Rumah Tangga',
    viewBox:'-18 -26 36 52', ports:[{x:0,y:-26},{x:0,y:26}],
    symbol:[
      {type:'rect',x:-16,y:-20,width:32,height:40,rx:4,fill:'#fff9f0',stroke:'#f57c00',strokeWidth:1.5},
      {type:'rect',x:-16,y:-20,width:32,height:8,rx:4,fill:'#f57c00',stroke:'none'},
      {type:'text',x:0,y:-15,text:'SW',fontSize:5,fill:'#fff',fontWeight:'bold'},
      {type:'rect',x:-8,y:-10,width:16,height:26,rx:3,fill:'#fff',stroke:'#ccc',strokeWidth:1},
      {type:'rect',x:-7,y:-9,width:14,height:11,rx:2,fill:'#e8f5e9',stroke:'none'},
      {type:'text',x:0,y:-3,text:'ON',fontSize:5,fill:'#388e3c',fontWeight:'bold'},
      {type:'line',x1:0,y1:-26,x2:0,y2:-20,stroke:'#555',strokeWidth:1.5},
      {type:'line',x1:0,y1:20,x2:0,y2:26,stroke:'#555',strokeWidth:1.5},
    ]},

  { id:'switch_2g', name:'Saklar Lampu 2 Gang', category:'Rumah Tangga',
    viewBox:'-24 -26 48 52', ports:[{x:0,y:-26},{x:-16,y:26},{x:16,y:26}],
    symbol:[
      {type:'rect',x:-22,y:-20,width:44,height:40,rx:4,fill:'#fff9f0',stroke:'#f57c00',strokeWidth:1.5},
      {type:'rect',x:-22,y:-20,width:44,height:8,rx:4,fill:'#f57c00',stroke:'none'},
      {type:'text',x:0,y:-15,text:'SW 2G',fontSize:4.5,fill:'#fff',fontWeight:'bold'},
      {type:'rect',x:-20,y:-10,width:18,height:26,rx:2,fill:'#fff',stroke:'#ccc',strokeWidth:1},
      {type:'rect',x:2,y:-10,width:18,height:26,rx:2,fill:'#fff',stroke:'#ccc',strokeWidth:1},
      {type:'line',x1:0,y1:-26,x2:0,y2:-20,stroke:'#555',strokeWidth:1.5},
    ]},

  { id:'lamp_tube', name:'Lampu TL Fluorescent', category:'Rumah Tangga',
    viewBox:'-28 -14 56 28', ports:[{x:-28,y:0},{x:28,y:0}],
    symbol:[
      {type:'rect',x:-24,y:-10,width:48,height:20,rx:3,fill:'#fffde7',stroke:'#f9a825',strokeWidth:1.5},
      {type:'rect',x:-24,y:-10,width:48,height:6,rx:3,fill:'#f9a825',stroke:'none'},
      {type:'text',x:0,y:-6,text:'TL',fontSize:4.5,fill:'#fff',fontWeight:'bold'},
      {type:'rect',x:-20,y:-2,width:40,height:8,rx:8,fill:'#fffbe0',stroke:'#fdd835',strokeWidth:1},
      {type:'line',x1:-28,y1:0,x2:-24,y2:0,stroke:'#555',strokeWidth:1.5},
      {type:'line',x1:24,y1:0,x2:28,y2:0,stroke:'#555',strokeWidth:1.5},
    ]},

  { id:'lamp_led', name:'Lampu LED', category:'Rumah Tangga',
    viewBox:'-18 -24 36 48', ports:[{x:0,y:-24},{x:0,y:24}],
    symbol:[
      {type:'rect',x:-16,y:-18,width:32,height:36,rx:4,fill:'#e3f2fd',stroke:'#1976d2',strokeWidth:1.5},
      {type:'rect',x:-16,y:-18,width:32,height:8,rx:4,fill:'#1976d2',stroke:'none'},
      {type:'text',x:0,y:-13,text:'LED',fontSize:5,fill:'#fff',fontWeight:'bold'},
      {type:'circle',cx:0,cy:4,r:8,fill:'#fff9c4',stroke:'#fdd835',strokeWidth:1.5},
      {type:'text',x:0,y:6,text:'★',fontSize:8,fill:'#fdd835'},
      {type:'line',x1:0,y1:-24,x2:0,y2:-18,stroke:'#555',strokeWidth:1.5},
      {type:'line',x1:0,y1:18,x2:0,y2:24,stroke:'#555',strokeWidth:1.5},
    ]},

  { id:'fan_motor', name:'Motor Kipas (Fan)', category:'Rumah Tangga',
    viewBox:'-22 -22 44 44', ports:[{x:-22,y:0},{x:22,y:0}],
    symbol:[
      {type:'circle',cx:0,cy:0,r:18,fill:'#f3e5f5',stroke:'#7b1fa2',strokeWidth:1.5},
      {type:'text',x:0,y:1,text:'FAN',fontSize:6,fill:'#7b1fa2',fontWeight:'bold'},
      {type:'path',d:'M0,-10 C4,-6 4,-4 0,0 C-4,-4 -4,-6 0,-10',fill:'#7b1fa2',stroke:'none'},
      {type:'path',d:'M10,0 C6,4 4,4 0,0 C4,-4 6,-4 10,0',fill:'#7b1fa2',stroke:'none'},
      {type:'path',d:'M0,10 C-4,6 -4,4 0,0 C4,4 4,6 0,10',fill:'#7b1fa2',stroke:'none'},
      {type:'path',d:'M-10,0 C-6,-4 -4,-4 0,0 C-4,4 -6,4 -10,0',fill:'#7b1fa2',stroke:'none'},
    ]},

  { id:'heater_el', name:'Elemen Pemanas Listrik', category:'Rumah Tangga',
    viewBox:'-24 -16 48 32', ports:[{x:-24,y:0},{x:24,y:0}],
    symbol:[
      {type:'rect',x:-22,y:-12,width:44,height:24,rx:3,fill:'#fbe9e7',stroke:'#e64a19',strokeWidth:1.5},
      {type:'text',x:0,y:2,text:'HEATER',fontSize:5,fill:'#e64a19',fontWeight:'bold'},
      {type:'path',d:'M-14,-4 C-10,-8 -6,-8 -2,-4 C2,0 6,0 10,-4 C14,-8 18,-8 16,-4',fill:'none',stroke:'#ff7043',strokeWidth:1.5},
    ]},

  // ══════════════════════════════════════════════════════
  // KONTROL (Control Devices)
  // ══════════════════════════════════════════════════════

  { id:'sel_sw2', name:'Saklar Selector 2 Posisi', category:'Kontrol',
    viewBox:'-22 -24 44 48', ports:[{x:0,y:-24},{x:-16,y:24},{x:16,y:24}],
    symbol:[
      {type:'rect',x:-20,y:-18,width:40,height:36,rx:4,fill:'#e8eaf6',stroke:'#3949ab',strokeWidth:1.5},
      {type:'rect',x:-20,y:-18,width:40,height:8,rx:4,fill:'#3949ab',stroke:'none'},
      {type:'text',x:0,y:-13,text:'SEL 2P',fontSize:4.5,fill:'#fff',fontWeight:'bold'},
      {type:'circle',cx:0,cy:4,r:8,fill:'#fff',stroke:'#9fa8da',strokeWidth:1},
      {type:'line',x1:0,y1:4,x2:8,y2:-1,stroke:'#3949ab',strokeWidth:2},
      {type:'text',x:-12,y:10,text:'1',fontSize:5,fill:'#3949ab'},{type:'text',x:8,y:10,text:'2',fontSize:5,fill:'#3949ab'},
    ]},

  { id:'sel_sw3', name:'Saklar Selector 3 Posisi', category:'Kontrol',
    viewBox:'-24 -24 48 48', ports:[{x:0,y:-24},{x:-18,y:24},{x:0,y:24},{x:18,y:24}],
    symbol:[
      {type:'rect',x:-22,y:-18,width:44,height:36,rx:4,fill:'#e8eaf6',stroke:'#3949ab',strokeWidth:1.5},
      {type:'rect',x:-22,y:-18,width:44,height:8,rx:4,fill:'#3949ab',stroke:'none'},
      {type:'text',x:0,y:-13,text:'SEL 3P',fontSize:4.5,fill:'#fff',fontWeight:'bold'},
      {type:'circle',cx:0,cy:4,r:8,fill:'#fff',stroke:'#9fa8da',strokeWidth:1},
      {type:'line',x1:0,y1:4,x2:0,y2:-4,stroke:'#3949ab',strokeWidth:2},
      {type:'text',x:-14,y:12,text:'L',fontSize:5,fill:'#3949ab'},{type:'text',x:-2,y:14,text:'0',fontSize:5,fill:'#3949ab'},{type:'text',x:9,y:12,text:'R',fontSize:5,fill:'#3949ab'},
    ]},

  { id:'pilot_r', name:'Lampu Sinyal Merah', category:'Kontrol',
    viewBox:'-16 -20 32 40', ports:[{x:0,y:-20},{x:0,y:20}],
    symbol:[
      {type:'circle',cx:0,cy:0,r:12,fill:'#ffcdd2',stroke:'#e53935',strokeWidth:2},
      {type:'circle',cx:0,cy:0,r:7,fill:'#ef9a9a',stroke:'#e53935',strokeWidth:1},
      {type:'text',x:0,y:2,text:'R',fontSize:6,fill:'#c62828',fontWeight:'bold'},
      {type:'line',x1:0,y1:-20,x2:0,y2:-12,stroke:'#555',strokeWidth:1.5},
      {type:'line',x1:0,y1:12,x2:0,y2:20,stroke:'#555',strokeWidth:1.5},
    ]},

  { id:'pilot_g', name:'Lampu Sinyal Hijau', category:'Kontrol',
    viewBox:'-16 -20 32 40', ports:[{x:0,y:-20},{x:0,y:20}],
    symbol:[
      {type:'circle',cx:0,cy:0,r:12,fill:'#c8e6c9',stroke:'#43a047',strokeWidth:2},
      {type:'circle',cx:0,cy:0,r:7,fill:'#a5d6a7',stroke:'#43a047',strokeWidth:1},
      {type:'text',x:0,y:2,text:'G',fontSize:6,fill:'#2e7d32',fontWeight:'bold'},
      {type:'line',x1:0,y1:-20,x2:0,y2:-12,stroke:'#555',strokeWidth:1.5},
      {type:'line',x1:0,y1:12,x2:0,y2:20,stroke:'#555',strokeWidth:1.5},
    ]},

  { id:'pilot_y', name:'Lampu Sinyal Kuning', category:'Kontrol',
    viewBox:'-16 -20 32 40', ports:[{x:0,y:-20},{x:0,y:20}],
    symbol:[
      {type:'circle',cx:0,cy:0,r:12,fill:'#fff9c4',stroke:'#f9a825',strokeWidth:2},
      {type:'circle',cx:0,cy:0,r:7,fill:'#fff176',stroke:'#f9a825',strokeWidth:1},
      {type:'text',x:0,y:2,text:'Y',fontSize:6,fill:'#f57f17',fontWeight:'bold'},
      {type:'line',x1:0,y1:-20,x2:0,y2:-12,stroke:'#555',strokeWidth:1.5},
      {type:'line',x1:0,y1:12,x2:0,y2:20,stroke:'#555',strokeWidth:1.5},
    ]},

  { id:'buzzer', name:'Buzzer Alarm', category:'Kontrol',
    viewBox:'-18 -22 36 44', ports:[{x:0,y:-22},{x:0,y:22}],
    symbol:[
      {type:'rect',x:-16,y:-16,width:32,height:32,rx:16,fill:'#fce4ec',stroke:'#e91e63',strokeWidth:2},
      {type:'text',x:0,y:2,text:'BZZ',fontSize:5.5,fill:'#c2185b',fontWeight:'bold'},
      {type:'path',d:'M-8,-8 C-12,-4 -12,4 -8,8',fill:'none',stroke:'#e91e63',strokeWidth:1.5},
      {type:'path',d:'M8,-8 C12,-4 12,4 8,8',fill:'none',stroke:'#e91e63',strokeWidth:1.5},
      {type:'line',x1:0,y1:-22,x2:0,y2:-16,stroke:'#555',strokeWidth:1.5},
      {type:'line',x1:0,y1:16,x2:0,y2:22,stroke:'#555',strokeWidth:1.5},
    ]},

  { id:'relay_gen', name:'Relay Intermediate 24VDC', category:'Kontrol',
    viewBox:'-22 -26 44 52', ports:[{x:-22,y:0},{x:22,y:0},{x:-10,y:-26},{x:10,y:-26}],
    symbol:[
      {type:'rect',x:-20,y:-20,width:40,height:40,rx:3,fill:'#e8eaf6',stroke:'#3949ab',strokeWidth:1.5},
      {type:'rect',x:-20,y:-20,width:40,height:8,rx:3,fill:'#3949ab',stroke:'none'},
      {type:'text',x:0,y:-15,text:'RELAY',fontSize:4.5,fill:'#fff',fontWeight:'bold'},
      {type:'rect',x:-14,y:-10,width:28,height:12,rx:2,fill:'#c5cae9',stroke:'#5c6bc0',strokeWidth:1},
      {type:'line',x1:-10,y1:-4,x2:10,y2:-4,stroke:'#3949ab',strokeWidth:1},{type:'line',x1:-10,y1:0,x2:10,y2:0,stroke:'#3949ab',strokeWidth:1},{type:'line',x1:-10,y1:4,x2:10,y2:4,stroke:'#3949ab',strokeWidth:1},
      {type:'text',x:0,y:16,text:'24VDC',fontSize:4.5,fill:'#3949ab'},
    ]},

  { id:'timer_on', name:'Relay Timer ON-delay', category:'Kontrol',
    viewBox:'-22 -26 44 52', ports:[{x:0,y:-26},{x:0,y:26}],
    symbol:[
      {type:'rect',x:-20,y:-20,width:40,height:40,rx:3,fill:'#e8eaf6',stroke:'#3949ab',strokeWidth:1.5},
      {type:'rect',x:-20,y:-20,width:40,height:8,rx:3,fill:'#3949ab',stroke:'none'},
      {type:'text',x:0,y:-15,text:'TIMER',fontSize:4.5,fill:'#fff',fontWeight:'bold'},
      {type:'circle',cx:0,cy:4,r:9,fill:'#fff',stroke:'#5c6bc0',strokeWidth:1},
      {type:'line',x1:0,y1:4,x2:0,y2:-3,stroke:'#3949ab',strokeWidth:1.5},
      {type:'line',x1:0,y1:4,x2:5,y2:7,stroke:'#3949ab',strokeWidth:1.5},
      {type:'text',x:0,y:17,text:'ON-dly',fontSize:4,fill:'#3949ab'},
    ]},

  { id:'timer_off', name:'Relay Timer OFF-delay', category:'Kontrol',
    viewBox:'-22 -26 44 52', ports:[{x:0,y:-26},{x:0,y:26}],
    symbol:[
      {type:'rect',x:-20,y:-20,width:40,height:40,rx:3,fill:'#e8eaf6',stroke:'#3949ab',strokeWidth:1.5},
      {type:'rect',x:-20,y:-20,width:40,height:8,rx:3,fill:'#3949ab',stroke:'none'},
      {type:'text',x:0,y:-15,text:'TIMER',fontSize:4.5,fill:'#fff',fontWeight:'bold'},
      {type:'circle',cx:0,cy:4,r:9,fill:'#fff',stroke:'#5c6bc0',strokeWidth:1},
      {type:'line',x1:0,y1:4,x2:0,y2:-3,stroke:'#e53935',strokeWidth:1.5},
      {type:'line',x1:0,y1:4,x2:5,y2:7,stroke:'#e53935',strokeWidth:1.5},
      {type:'text',x:0,y:17,text:'OFF-dly',fontSize:4,fill:'#e53935'},
    ]},

  { id:'plc', name:'PLC', category:'Kontrol',
    viewBox:'-30 -34 60 68', ports:[{x:-30,y:-16},{x:-30,y:0},{x:-30,y:16},{x:30,y:-16},{x:30,y:0},{x:30,y:16}],
    symbol:[
      {type:'rect',x:-28,y:-28,width:56,height:56,rx:4,fill:'#e8eaf6',stroke:'#3949ab',strokeWidth:2},
      {type:'rect',x:-28,y:-28,width:56,height:10,rx:4,fill:'#3949ab',stroke:'none'},
      {type:'text',x:0,y:-22,text:'PLC',fontSize:6,fill:'#fff',fontWeight:'bold'},
      {type:'rect',x:-20,y:-14,width:12,height:28,rx:2,fill:'#c5cae9',stroke:'#5c6bc0',strokeWidth:1},
      {type:'rect',x:8,y:-14,width:12,height:28,rx:2,fill:'#ffccbc',stroke:'#ff5722',strokeWidth:1},
      {type:'text',x:-14,y:2,text:'IN',fontSize:4.5,fill:'#3949ab',fontWeight:'bold'},
      {type:'text',x:14,y:2,text:'OUT',fontSize:4.5,fill:'#d84315',fontWeight:'bold'},
      {type:'line',x1:-30,y1:-16,x2:-28,y2:-16,stroke:'#555',strokeWidth:1.5},
      {type:'line',x1:-30,y1:0,x2:-28,y2:0,stroke:'#555',strokeWidth:1.5},
      {type:'line',x1:-30,y1:16,x2:-28,y2:16,stroke:'#555',strokeWidth:1.5},
      {type:'line',x1:28,y1:-16,x2:30,y2:-16,stroke:'#555',strokeWidth:1.5},
      {type:'line',x1:28,y1:0,x2:30,y2:0,stroke:'#555',strokeWidth:1.5},
      {type:'line',x1:28,y1:16,x2:30,y2:16,stroke:'#555',strokeWidth:1.5},
    ]},

  { id:'hmi', name:'HMI (Human Machine Interface)', category:'Kontrol',
    viewBox:'-30 -22 60 44', ports:[{x:-30,y:0},{x:30,y:0}],
    symbol:[
      {type:'rect',x:-28,y:-18,width:56,height:36,rx:3,fill:'#e3f2fd',stroke:'#1565c0',strokeWidth:2},
      {type:'rect',x:-22,y:-12,width:44,height:26,rx:2,fill:'#0d47a1',stroke:'none'},
      {type:'text',x:0,y:-4,text:'HMI',fontSize:7,fill:'#fff',fontWeight:'bold'},
      {type:'text',x:0,y:6,text:'TOUCH',fontSize:4.5,fill:'#90caf9'},
      {type:'rect',x:-28,y:-18,width:56,height:6,rx:3,fill:'#1565c0',stroke:'none'},
      {type:'text',x:0,y:-13,text:'PANEL',fontSize:4,fill:'#fff'},
    ]},

  // ══════════════════════════════════════════════════════
  // SENSOR
  // ══════════════════════════════════════════════════════

  { id:'limit_sw', name:'Saklar Batas (Limit Switch)', category:'Sensor',
    viewBox:'-22 -26 44 52', ports:[{x:0,y:-26},{x:0,y:26}],
    symbol:[
      {type:'rect',x:-20,y:-20,width:40,height:40,rx:3,fill:'#e0f2f1',stroke:'#00897b',strokeWidth:1.5},
      {type:'rect',x:-20,y:-20,width:40,height:8,rx:3,fill:'#00897b',stroke:'none'},
      {type:'text',x:0,y:-15,text:'LIMIT',fontSize:4.5,fill:'#fff',fontWeight:'bold'},
      {type:'rect',x:-12,y:-8,width:24,height:18,rx:2,fill:'#fff',stroke:'#4db6ac',strokeWidth:1},
      {type:'line',x1:8,y1:-8,x2:16,y2:-14,stroke:'#00897b',strokeWidth:2,strokeLinecap:'round'},
      {type:'circle',cx:16,cy:-14,r:3,fill:'#00897b',stroke:'none'},
      {type:'text',x:0,y:6,text:'SW',fontSize:5,fill:'#00897b'},
    ]},

  { id:'prox_npn', name:'Sensor Proximity NPN', category:'Sensor',
    viewBox:'-22 -26 44 52', ports:[{x:-22,y:-10},{x:-22,y:0},{x:-22,y:10}],
    symbol:[
      {type:'rect',x:-20,y:-20,width:40,height:40,rx:20,fill:'#e0f2f1',stroke:'#00897b',strokeWidth:1.5},
      {type:'text',x:2,y:-8,text:'PROX',fontSize:5,fill:'#00695c',fontWeight:'bold'},
      {type:'text',x:2,y:2,text:'NPN',fontSize:5,fill:'#00897b'},
      {type:'circle',cx:2,cy:10,r:5,fill:'none',stroke:'#4db6ac',strokeWidth:1.5},
      {type:'text',x:14,y:-9,text:'+',fontSize:5,fill:'#e53935'},
      {type:'text',x:14,y:1,text:'−',fontSize:6,fill:'#1565c0'},
      {type:'text',x:12,y:11,text:'Q',fontSize:5,fill:'#388e3c'},
    ]},

  { id:'prox_pnp', name:'Sensor Proximity PNP', category:'Sensor',
    viewBox:'-22 -26 44 52', ports:[{x:-22,y:-10},{x:-22,y:0},{x:-22,y:10}],
    symbol:[
      {type:'rect',x:-20,y:-20,width:40,height:40,rx:20,fill:'#e0f2f1',stroke:'#00897b',strokeWidth:1.5},
      {type:'text',x:2,y:-8,text:'PROX',fontSize:5,fill:'#00695c',fontWeight:'bold'},
      {type:'text',x:2,y:2,text:'PNP',fontSize:5,fill:'#00897b'},
      {type:'circle',cx:2,cy:10,r:5,fill:'none',stroke:'#4db6ac',strokeWidth:1.5},
      {type:'text',x:14,y:-9,text:'+',fontSize:5,fill:'#e53935'},
      {type:'text',x:14,y:1,text:'−',fontSize:6,fill:'#1565c0'},
      {type:'text',x:12,y:11,text:'Q',fontSize:5,fill:'#388e3c'},
    ]},

  { id:'photo_ee', name:'Sensor Fotoelektrik (Photo Eye)', category:'Sensor',
    viewBox:'-26 -20 52 40', ports:[{x:-26,y:-8},{x:-26,y:0},{x:-26,y:8}],
    symbol:[
      {type:'rect',x:-24,y:-16,width:48,height:32,rx:3,fill:'#e0f2f1',stroke:'#00897b',strokeWidth:1.5},
      {type:'circle',cx:6,cy:0,r:10,fill:'#fff',stroke:'#4db6ac',strokeWidth:1},
      {type:'circle',cx:6,cy:0,r:5,fill:'#b2ebf2',stroke:'none'},
      {type:'line',x1:16,y1:-6,x2:22,y2:-10,stroke:'#fdd835',strokeWidth:1},{type:'line',x1:18,y1:0,x2:24,y2:0,stroke:'#fdd835',strokeWidth:1},{type:'line',x1:16,y1:6,x2:22,y2:10,stroke:'#fdd835',strokeWidth:1},
      {type:'text',x:-14,y:2,text:'PE',fontSize:5,fill:'#00695c',fontWeight:'bold'},
    ]},

  { id:'temp_sw', name:'Termostat / Sensor Suhu', category:'Sensor',
    viewBox:'-20 -26 40 52', ports:[{x:0,y:-26},{x:0,y:26}],
    symbol:[
      {type:'rect',x:-18,y:-20,width:36,height:40,rx:3,fill:'#e0f2f1',stroke:'#00897b',strokeWidth:1.5},
      {type:'rect',x:-18,y:-20,width:36,height:8,rx:3,fill:'#00897b',stroke:'none'},
      {type:'text',x:0,y:-15,text:'TEMP',fontSize:4.5,fill:'#fff',fontWeight:'bold'},
      {type:'rect',x:-4,y:-10,width:8,height:20,rx:4,fill:'#fff',stroke:'#4db6ac',strokeWidth:1},
      {type:'rect',x:-3,y:4,width:6,height:5,rx:3,fill:'#ff7043',stroke:'none'},
      {type:'line',x1:6,y1:-6,x2:12,y2:-6,stroke:'#00897b',strokeWidth:1},{type:'line',x1:6,y1:-2,x2:12,y2:-2,stroke:'#00897b',strokeWidth:1},{type:'line',x1:6,y1:2,x2:12,y2:2,stroke:'#00897b',strokeWidth:1},
    ]},

  { id:'pressure_sw', name:'Saklar Tekanan (Pressure Switch)', category:'Sensor',
    viewBox:'-20 -26 40 52', ports:[{x:0,y:-26},{x:0,y:26}],
    symbol:[
      {type:'rect',x:-18,y:-20,width:36,height:40,rx:3,fill:'#e0f2f1',stroke:'#00897b',strokeWidth:1.5},
      {type:'rect',x:-18,y:-20,width:36,height:8,rx:3,fill:'#00897b',stroke:'none'},
      {type:'text',x:0,y:-15,text:'PRESS',fontSize:4.5,fill:'#fff',fontWeight:'bold'},
      {type:'circle',cx:0,cy:4,r:10,fill:'#fff',stroke:'#4db6ac',strokeWidth:1},
      {type:'path',d:'M-8,4 A8,8 0 0,1 8,4',fill:'none',stroke:'#00897b',strokeWidth:1.5},
      {type:'line',x1:0,y1:4,x2:0,y2:-4,stroke:'#00897b',strokeWidth:1.5},
    ]},

  { id:'float_sw', name:'Saklar Pelampung (Float Switch)', category:'Sensor',
    viewBox:'-22 -28 44 56', ports:[{x:0,y:-28},{x:0,y:28}],
    symbol:[
      {type:'rect',x:-20,y:-22,width:40,height:44,rx:3,fill:'#e0f2f1',stroke:'#00897b',strokeWidth:1.5},
      {type:'rect',x:-20,y:-22,width:40,height:8,rx:3,fill:'#00897b',stroke:'none'},
      {type:'text',x:0,y:-17,text:'FLOAT',fontSize:4.5,fill:'#fff',fontWeight:'bold'},
      {type:'line',x1:-8,y1:-2,x2:8,y2:-2,stroke:'#00897b',strokeWidth:1.5},
      {type:'line',x1:-8,y1:4,x2:8,y2:4,stroke:'#00897b',strokeWidth:1.5},
      {type:'circle',cx:12,cy:-8,r:5,fill:'#80cbc4',stroke:'#00897b',strokeWidth:1},
      {type:'line',x1:8,y1:-2,x2:12,y2:-3,stroke:'#555',strokeWidth:1},
    ]},

  // ══════════════════════════════════════════════════════
  // MOTOR & DRIVE
  // ══════════════════════════════════════════════════════

  { id:'motor_1ph', name:'Motor Induksi 1 Fasa', category:'Motor & Drive',
    viewBox:'-24 -24 48 48', ports:[{x:-24,y:-10},{x:-24,y:10}],
    symbol:[
      {type:'circle',cx:4,cy:0,r:20,fill:'#e3f2fd',stroke:'#1565c0',strokeWidth:2},
      {type:'circle',cx:4,cy:0,r:14,fill:'#fff',stroke:'#42a5f5',strokeWidth:1},
      {type:'text',x:4,y:-4,text:'M',fontSize:10,fill:'#1565c0',fontWeight:'bold'},
      {type:'text',x:4,y:8,text:'1~',fontSize:6,fill:'#1565c0'},
      {type:'rect',x:22,y:-4,width:6,height:8,rx:2,fill:'#90caf9',stroke:'#1565c0',strokeWidth:1},
    ]},

  { id:'motor_servo', name:'Servo Motor', category:'Motor & Drive',
    viewBox:'-26 -24 52 48', ports:[{x:-26,y:-12},{x:-26,y:0},{x:-26,y:12}],
    symbol:[
      {type:'circle',cx:4,cy:0,r:20,fill:'#e8eaf6',stroke:'#3949ab',strokeWidth:2},
      {type:'circle',cx:4,cy:0,r:14,fill:'#fff',stroke:'#7986cb',strokeWidth:1},
      {type:'text',x:4,y:-4,text:'SM',fontSize:9,fill:'#3949ab',fontWeight:'bold'},
      {type:'text',x:4,y:8,text:'SERVO',fontSize:4.5,fill:'#3949ab'},
      {type:'rect',x:22,y:-4,width:6,height:8,rx:2,fill:'#c5cae9',stroke:'#3949ab',strokeWidth:1},
    ]},

  { id:'vfd', name:'VFD (Variable Frequency Drive)', category:'Motor & Drive',
    viewBox:'-30 -36 60 72',
    ports:[{x:-20,y:-36},{x:0,y:-36},{x:20,y:-36},{x:-20,y:36},{x:0,y:36},{x:20,y:36}],
    symbol:[
      {type:'rect',x:-28,y:-30,width:56,height:60,rx:4,fill:'#e3f2fd',stroke:'#1565c0',strokeWidth:2},
      {type:'rect',x:-28,y:-30,width:56,height:10,rx:4,fill:'#1565c0',stroke:'none'},
      {type:'text',x:0,y:-24,text:'VFD',fontSize:6,fill:'#fff',fontWeight:'bold'},
      {type:'path',d:'M-16,-10 L-16,14 L16,14',fill:'none',stroke:'#1565c0',strokeWidth:1.5},
      {type:'path',d:'M-16,-4 C-8,-12 8,8 16,0',fill:'none',stroke:'#42a5f5',strokeWidth:1.5},
      {type:'text',x:0,y:22,text:'3~ OUTPUT',fontSize:4,fill:'#1565c0'},
      {type:'text',x:-18,y:-33,text:'L1',fontSize:4,fill:'#a0522d'},{type:'text',x:-2,y:-33,text:'L2',fontSize:4,fill:'#555'},{type:'text',x:16,y:-33,text:'L3',fontSize:4,fill:'#888'},
    ]},

  { id:'soft_start', name:'Soft Starter', category:'Motor & Drive',
    viewBox:'-30 -36 60 72',
    ports:[{x:-20,y:-36},{x:0,y:-36},{x:20,y:-36},{x:-20,y:36},{x:0,y:36},{x:20,y:36}],
    symbol:[
      {type:'rect',x:-28,y:-30,width:56,height:60,rx:4,fill:'#e8f5e9',stroke:'#2e7d32',strokeWidth:2},
      {type:'rect',x:-28,y:-30,width:56,height:10,rx:4,fill:'#2e7d32',stroke:'none'},
      {type:'text',x:0,y:-24,text:'SOFT',fontSize:5.5,fill:'#fff',fontWeight:'bold'},
      {type:'text',x:0,y:-17,text:'START',fontSize:5,fill:'#fff'},
      {type:'path',d:'M-18,0 C-12,-10 12,-10 18,0',fill:'none',stroke:'#43a047',strokeWidth:2},
      {type:'path',d:'M-18,8 C-12,-2 12,-2 18,8',fill:'none',stroke:'#66bb6a',strokeWidth:1.5},
      {type:'text',x:0,y:22,text:'3~ OUTPUT',fontSize:4,fill:'#2e7d32'},
    ]},

  { id:'dol_starter', name:'Starter DOL (Direct On Line)', category:'Motor & Drive',
    viewBox:'-30 -36 60 72',
    ports:[{x:-20,y:-36},{x:0,y:-36},{x:20,y:-36},{x:-20,y:36},{x:0,y:36},{x:20,y:36}],
    symbol:[
      {type:'rect',x:-28,y:-30,width:56,height:60,rx:4,fill:'#fff3e0',stroke:'#e65100',strokeWidth:2},
      {type:'rect',x:-28,y:-30,width:56,height:10,rx:4,fill:'#e65100',stroke:'none'},
      {type:'text',x:0,y:-24,text:'DOL',fontSize:6,fill:'#fff',fontWeight:'bold'},
      {type:'text',x:0,y:-17,text:'STARTER',fontSize:4.5,fill:'#fff'},
      {type:'rect',x:-18,y:-12,width:36,height:26,rx:2,fill:'#fff',stroke:'#ef6c00',strokeWidth:1},
      {type:'line',x1:-10,y1:-6,x2:10,y2:-6,stroke:'#e65100',strokeWidth:1.5},
      {type:'line',x1:-10,y1:0,x2:10,y2:0,stroke:'#e65100',strokeWidth:1.5},
      {type:'line',x1:-10,y1:6,x2:10,y2:6,stroke:'#e65100',strokeWidth:1.5},
    ]},

  { id:'star_delta', name:'Starter Bintang-Segitiga (Y-Δ)', category:'Motor & Drive',
    viewBox:'-32 -38 64 76',
    ports:[{x:-20,y:-38},{x:0,y:-38},{x:20,y:-38},{x:-20,y:38},{x:0,y:38},{x:20,y:38}],
    symbol:[
      {type:'rect',x:-30,y:-32,width:60,height:64,rx:4,fill:'#fff8e1',stroke:'#f57f17',strokeWidth:2},
      {type:'rect',x:-30,y:-32,width:60,height:10,rx:4,fill:'#f57f17',stroke:'none'},
      {type:'text',x:0,y:-26,text:'Y-Δ STARTER',fontSize:5,fill:'#fff',fontWeight:'bold'},
      {type:'text',x:-8,y:0,text:'Y',fontSize:16,fill:'#f57f17',fontWeight:'bold'},
      {type:'text',x:6,y:2,text:'Δ',fontSize:14,fill:'#e65100',fontWeight:'bold'},
    ]},

  // ══════════════════════════════════════════════════════
  // PROTEKSI (Protection)
  // ══════════════════════════════════════════════════════

  { id:'fuse', name:'Sekering (Fuse)', category:'Proteksi',
    viewBox:'-18 -28 36 56', ports:[{x:0,y:-28},{x:0,y:28}],
    symbol:[
      {type:'rect',x:-10,y:-18,width:20,height:36,rx:3,fill:'#fff3e0',stroke:'#ff6f00',strokeWidth:1.5},
      {type:'rect',x:-6,y:-14,width:12,height:28,rx:1,fill:'#fff',stroke:'#ffa000',strokeWidth:1},
      {type:'line',x1:0,y1:-14,x2:0,y2:14,stroke:'#ffa000',strokeWidth:1.5},
      {type:'text',x:0,y:2,text:'F',fontSize:7,fill:'#e65100',fontWeight:'bold'},
      {type:'line',x1:0,y1:-28,x2:0,y2:-18,stroke:'#555',strokeWidth:1.5},
      {type:'line',x1:0,y1:18,x2:0,y2:28,stroke:'#555',strokeWidth:1.5},
    ]},

  { id:'fuse_nh', name:'Sekering NH / HRC', category:'Proteksi',
    viewBox:'-20 -30 40 60', ports:[{x:0,y:-30},{x:0,y:30}],
    symbol:[
      {type:'rect',x:-14,y:-22,width:28,height:44,rx:2,fill:'#fff3e0',stroke:'#ff6f00',strokeWidth:1.5},
      {type:'rect',x:-14,y:-22,width:28,height:8,rx:2,fill:'#ff6f00',stroke:'none'},
      {type:'text',x:0,y:-17,text:'NH',fontSize:5,fill:'#fff',fontWeight:'bold'},
      {type:'rect',x:-8,y:-12,width:16,height:26,rx:1,fill:'#fff9c4',stroke:'#ffa000',strokeWidth:1},
      {type:'line',x1:0,y1:-12,x2:0,y2:14,stroke:'#e65100',strokeWidth:2},
      {type:'line',x1:0,y1:-30,x2:0,y2:-22,stroke:'#555',strokeWidth:1.5},
      {type:'line',x1:0,y1:22,x2:0,y2:30,stroke:'#555',strokeWidth:1.5},
    ]},

  { id:'spd', name:'Penangkal Lonjakan (SPD / Arrester)', category:'Proteksi',
    viewBox:'-18 -26 36 52', ports:[{x:0,y:-26},{x:0,y:26}],
    symbol:[
      {type:'rect',x:-16,y:-20,width:32,height:40,rx:3,fill:'#fce4ec',stroke:'#c62828',strokeWidth:1.5},
      {type:'rect',x:-16,y:-20,width:32,height:8,rx:3,fill:'#c62828',stroke:'none'},
      {type:'text',x:0,y:-15,text:'SPD',fontSize:5,fill:'#fff',fontWeight:'bold'},
      {type:'path',d:'M0,-8 L6,0 L-2,0 L4,8',fill:'none',stroke:'#e53935',strokeWidth:2,strokeLinecap:'round',strokeLinejoin:'round'},
      {type:'line',x1:0,y1:-26,x2:0,y2:-20,stroke:'#555',strokeWidth:1.5},
      {type:'line',x1:0,y1:20,x2:0,y2:26,stroke:'#555',strokeWidth:1.5},
    ]},

  { id:'overload_th', name:'Relay Overload Thermal (TOL)', category:'Proteksi',
    viewBox:'-26 -36 52 72',
    ports:[{x:-16,y:-36},{x:0,y:-36},{x:16,y:-36},{x:-16,y:36},{x:0,y:36},{x:16,y:36}],
    symbol:[
      {type:'rect',x:-24,y:-30,width:48,height:60,rx:3,fill:'#fce4ec',stroke:'#c62828',strokeWidth:1.5},
      {type:'rect',x:-24,y:-30,width:48,height:9,rx:3,fill:'#c62828',stroke:'none'},
      {type:'text',x:0,y:-25,text:'OL RELAY',fontSize:4.5,fill:'#fff',fontWeight:'bold'},
      {type:'path',d:'M-14,-10 C-10,-18 -6,-18 -2,-10 C2,-2 6,-2 10,-10',fill:'none',stroke:'#e53935',strokeWidth:1.5},
      {type:'path',d:'M-14,0 C-10,-8 -6,-8 -2,0 C2,8 6,8 10,0',fill:'none',stroke:'#ef9a9a',strokeWidth:1},
      {type:'text',x:0,y:18,text:'THERMAL',fontSize:4,fill:'#c62828'},
    ]},

  { id:'motor_prot', name:'Relay Proteksi Motor', category:'Proteksi',
    viewBox:'-26 -30 52 60', ports:[{x:-26,y:0},{x:26,y:0}],
    symbol:[
      {type:'rect',x:-24,y:-24,width:48,height:48,rx:4,fill:'#fce4ec',stroke:'#c62828',strokeWidth:2},
      {type:'rect',x:-24,y:-24,width:48,height:9,rx:4,fill:'#c62828',stroke:'none'},
      {type:'text',x:0,y:-19,text:'MOTOR',fontSize:4.5,fill:'#fff',fontWeight:'bold'},
      {type:'text',x:0,y:-12,text:'PROTECT',fontSize:4,fill:'#fff'},
      {type:'circle',cx:0,cy:6,r:10,fill:'#fff',stroke:'#ef9a9a',strokeWidth:1},
      {type:'text',x:0,y:8,text:'M>',fontSize:7,fill:'#c62828',fontWeight:'bold'},
    ]},

  { id:'safety_rly', name:'Relay Keselamatan (Safety Relay)', category:'Proteksi',
    viewBox:'-26 -30 52 60', ports:[{x:-26,y:-10},{x:-26,y:10},{x:26,y:-10},{x:26,y:10}],
    symbol:[
      {type:'rect',x:-24,y:-24,width:48,height:48,rx:4,fill:'#fff3e0',stroke:'#e65100',strokeWidth:2},
      {type:'rect',x:-24,y:-24,width:48,height:9,rx:4,fill:'#e65100',stroke:'none'},
      {type:'text',x:0,y:-19,text:'SAFETY',fontSize:5,fill:'#fff',fontWeight:'bold'},
      {type:'rect',x:-14,y:-12,width:28,height:24,rx:3,fill:'#fff8e1',stroke:'#ffa000',strokeWidth:1},
      {type:'text',x:0,y:2,text:'SIL',fontSize:8,fill:'#e65100',fontWeight:'bold'},
    ]},

  // ══════════════════════════════════════════════════════
  // DAYA (Power)
  // ══════════════════════════════════════════════════════

  { id:'transformer', name:'Transformator 1 Fasa', category:'Daya',
    viewBox:'-28 -28 56 56', ports:[{x:-28,y:-10},{x:-28,y:10},{x:28,y:-10},{x:28,y:10}],
    symbol:[
      {type:'rect',x:-26,y:-22,width:52,height:44,rx:3,fill:'#f3e5f5',stroke:'#6a1b9a',strokeWidth:1.5},
      {type:'rect',x:-26,y:-22,width:52,height:8,rx:3,fill:'#6a1b9a',stroke:'none'},
      {type:'text',x:0,y:-17,text:'TRAFO 1P',fontSize:4.5,fill:'#fff',fontWeight:'bold'},
      {type:'circle',cx:-8,cy:2,r:9,fill:'none',stroke:'#9c27b0',strokeWidth:2},
      {type:'circle',cx:8,cy:2,r:9,fill:'none',stroke:'#ab47bc',strokeWidth:2},
      {type:'text',x:-8,y:4,text:'~',fontSize:8,fill:'#6a1b9a'},{type:'text',x:8,y:4,text:'~',fontSize:8,fill:'#9c27b0'},
    ]},

  { id:'transformer3', name:'Transformator 3 Fasa (Dyn11)', category:'Daya',
    viewBox:'-32 -32 64 64',
    ports:[{x:-32,y:-14},{x:-32,y:0},{x:-32,y:14},{x:32,y:-14},{x:32,y:0},{x:32,y:14}],
    symbol:[
      {type:'rect',x:-30,y:-26,width:60,height:52,rx:3,fill:'#f3e5f5',stroke:'#6a1b9a',strokeWidth:1.5},
      {type:'rect',x:-30,y:-26,width:60,height:9,rx:3,fill:'#6a1b9a',stroke:'none'},
      {type:'text',x:0,y:-20,text:'TRAFO 3P',fontSize:5,fill:'#fff',fontWeight:'bold'},
      {type:'circle',cx:-8,cy:2,r:12,fill:'none',stroke:'#9c27b0',strokeWidth:2},
      {type:'circle',cx:8,cy:2,r:12,fill:'none',stroke:'#ab47bc',strokeWidth:2},
      {type:'text',x:-8,y:4,text:'Y',fontSize:8,fill:'#6a1b9a',fontWeight:'bold'},{type:'text',x:8,y:4,text:'Δ',fontSize:8,fill:'#9c27b0',fontWeight:'bold'},
    ]},

  { id:'generator', name:'Generator / Genset', category:'Daya',
    viewBox:'-30 -30 60 60', ports:[{x:-20,y:-30},{x:0,y:-30},{x:20,y:-30}],
    symbol:[
      {type:'circle',cx:0,cy:6,r:22,fill:'#f3e5f5',stroke:'#6a1b9a',strokeWidth:2},
      {type:'circle',cx:0,cy:6,r:14,fill:'#fff',stroke:'#ce93d8',strokeWidth:1},
      {type:'text',x:0,y:2,text:'G',fontSize:12,fill:'#6a1b9a',fontWeight:'bold'},
      {type:'text',x:0,y:14,text:'GEN',fontSize:4.5,fill:'#6a1b9a'},
    ]},

  { id:'ups', name:'UPS (Uninterruptible Power Supply)', category:'Daya',
    viewBox:'-28 -30 56 60', ports:[{x:-14,y:-30},{x:14,y:-30},{x:-14,y:30},{x:14,y:30}],
    symbol:[
      {type:'rect',x:-26,y:-24,width:52,height:48,rx:4,fill:'#e8eaf6',stroke:'#283593',strokeWidth:2},
      {type:'rect',x:-26,y:-24,width:52,height:9,rx:4,fill:'#283593',stroke:'none'},
      {type:'text',x:0,y:-19,text:'UPS',fontSize:6,fill:'#fff',fontWeight:'bold'},
      {type:'rect',x:-16,y:-12,width:14,height:22,rx:2,fill:'#c5cae9',stroke:'#3949ab',strokeWidth:1},
      {type:'text',x:-9,y:2,text:'BAT',fontSize:4.5,fill:'#283593'},
      {type:'path',d:'M6,-2 L12,6 L6,6 L12,14',fill:'none',stroke:'#283593',strokeWidth:2,strokeLinecap:'round'},
    ]},

  { id:'battery_pack', name:'Baterai / Akumulator (Aki)', category:'Daya',
    viewBox:'-24 -28 48 56', ports:[{x:0,y:-28},{x:0,y:28}],
    symbol:[
      {type:'rect',x:-20,y:-22,width:40,height:44,rx:3,fill:'#e8f5e9',stroke:'#1b5e20',strokeWidth:1.5},
      {type:'line',x1:-14,y1:-10,x2:14,y2:-10,stroke:'#1b5e20',strokeWidth:2.5},
      {type:'line',x1:-8,y1:-4,x2:8,y2:-4,stroke:'#1b5e20',strokeWidth:1.5},
      {type:'line',x1:-14,y1:2,x2:14,y2:2,stroke:'#1b5e20',strokeWidth:2.5},
      {type:'line',x1:-8,y1:8,x2:8,y2:8,stroke:'#1b5e20',strokeWidth:1.5},
      {type:'text',x:-14,y:-12,text:'+',fontSize:7,fill:'#e53935',fontWeight:'bold'},
      {type:'text',x:10,y:12,text:'−',fontSize:9,fill:'#1565c0',fontWeight:'bold'},
      {type:'line',x1:0,y1:-28,x2:0,y2:-22,stroke:'#555',strokeWidth:1.5},
      {type:'line',x1:0,y1:22,x2:0,y2:28,stroke:'#555',strokeWidth:1.5},
    ]},

  { id:'cap_bank', name:'Bank Kapasitor (Power Factor)', category:'Daya',
    viewBox:'-28 -28 56 56', ports:[{x:-14,y:-28},{x:14,y:-28},{x:-14,y:28},{x:14,y:28}],
    symbol:[
      {type:'rect',x:-26,y:-22,width:52,height:44,rx:3,fill:'#e8f5e9',stroke:'#1b5e20',strokeWidth:1.5},
      {type:'rect',x:-26,y:-22,width:52,height:8,rx:3,fill:'#1b5e20',stroke:'none'},
      {type:'text',x:0,y:-17,text:'CAP BANK',fontSize:4.5,fill:'#fff',fontWeight:'bold'},
      {type:'line',x1:-16,y1:-4,x2:16,y2:-4,stroke:'#388e3c',strokeWidth:2.5},
      {type:'line',x1:-16,y1:4,x2:16,y2:4,stroke:'#388e3c',strokeWidth:2.5},
      {type:'text',x:0,y:14,text:'cos φ',fontSize:5,fill:'#1b5e20'},
    ]},

  { id:'ct', name:'Trafo Arus (CT)', category:'Daya',
    viewBox:'-22 -26 44 52', ports:[{x:0,y:-26},{x:0,y:26}],
    symbol:[
      {type:'rect',x:-20,y:-20,width:40,height:40,rx:20,fill:'#f3e5f5',stroke:'#6a1b9a',strokeWidth:1.5},
      {type:'text',x:0,y:-6,text:'CT',fontSize:8,fill:'#6a1b9a',fontWeight:'bold'},
      {type:'text',x:0,y:6,text:'A',fontSize:6,fill:'#9c27b0'},
      {type:'line',x1:0,y1:-26,x2:0,y2:-20,stroke:'#555',strokeWidth:1.5},
      {type:'line',x1:0,y1:20,x2:0,y2:26,stroke:'#555',strokeWidth:1.5},
    ]},

  { id:'pt', name:'Trafo Tegangan (PT/VT)', category:'Daya',
    viewBox:'-22 -26 44 52', ports:[{x:0,y:-26},{x:0,y:26}],
    symbol:[
      {type:'rect',x:-20,y:-20,width:40,height:40,rx:20,fill:'#f3e5f5',stroke:'#6a1b9a',strokeWidth:1.5},
      {type:'text',x:0,y:-6,text:'PT',fontSize:8,fill:'#6a1b9a',fontWeight:'bold'},
      {type:'text',x:0,y:6,text:'V',fontSize:6,fill:'#9c27b0'},
      {type:'line',x1:0,y1:-26,x2:0,y2:-20,stroke:'#555',strokeWidth:1.5},
      {type:'line',x1:0,y1:20,x2:0,y2:26,stroke:'#555',strokeWidth:1.5},
    ]},

  { id:'meter_v', name:'Voltmeter', category:'Daya',
    viewBox:'-18 -20 36 40', ports:[{x:0,y:-20},{x:0,y:20}],
    symbol:[
      {type:'circle',cx:0,cy:0,r:16,fill:'#f3e5f5',stroke:'#6a1b9a',strokeWidth:1.5},
      {type:'text',x:0,y:2,text:'V',fontSize:10,fill:'#6a1b9a',fontWeight:'bold'},
      {type:'line',x1:0,y1:-20,x2:0,y2:-16,stroke:'#555',strokeWidth:1.5},
      {type:'line',x1:0,y1:16,x2:0,y2:20,stroke:'#555',strokeWidth:1.5},
    ]},

  { id:'meter_a', name:'Amperemeter (A)', category:'Daya',
    viewBox:'-18 -20 36 40', ports:[{x:0,y:-20},{x:0,y:20}],
    symbol:[
      {type:'circle',cx:0,cy:0,r:16,fill:'#fff3e0',stroke:'#e65100',strokeWidth:1.5},
      {type:'text',x:0,y:2,text:'A',fontSize:10,fill:'#e65100',fontWeight:'bold'},
      {type:'line',x1:0,y1:-20,x2:0,y2:-16,stroke:'#555',strokeWidth:1.5},
      {type:'line',x1:0,y1:16,x2:0,y2:20,stroke:'#555',strokeWidth:1.5},
    ]},

  { id:'meter_w', name:'Wattmeter / Power Meter', category:'Daya',
    viewBox:'-18 -20 36 40', ports:[{x:0,y:-20},{x:0,y:20}],
    symbol:[
      {type:'circle',cx:0,cy:0,r:16,fill:'#e8f5e9',stroke:'#2e7d32',strokeWidth:1.5},
      {type:'text',x:0,y:2,text:'W',fontSize:9,fill:'#2e7d32',fontWeight:'bold'},
      {type:'line',x1:0,y1:-20,x2:0,y2:-16,stroke:'#555',strokeWidth:1.5},
      {type:'line',x1:0,y1:16,x2:0,y2:20,stroke:'#555',strokeWidth:1.5},
    ]},

  { id:'ats', name:'ATS (Automatic Transfer Switch)', category:'Daya',
    viewBox:'-32 -32 64 64',
    ports:[{x:-32,y:-14},{x:-32,y:14},{x:32,y:-14},{x:32,y:14}],
    symbol:[
      {type:'rect',x:-30,y:-26,width:60,height:52,rx:4,fill:'#e8f5e9',stroke:'#1b5e20',strokeWidth:2},
      {type:'rect',x:-30,y:-26,width:60,height:9,rx:4,fill:'#1b5e20',stroke:'none'},
      {type:'text',x:0,y:-20,text:'ATS',fontSize:6,fill:'#fff',fontWeight:'bold'},
      {type:'text',x:-14,y:-10,text:'PLN',fontSize:4.5,fill:'#1565c0'},{type:'text',x:8,y:-10,text:'GEN',fontSize:4.5,fill:'#6a1b9a'},
      {type:'path',d:'M-18,-2 L-8,-2 L-4,6 L4,-10 L8,6 L18,-2',fill:'none',stroke:'#2e7d32',strokeWidth:1.5},
    ]},

  // ══════════════════════════════════════════════════════
  // AKTUATOR
  // ══════════════════════════════════════════════════════

  { id:'sol_pneu', name:'Solenoid Valve Pneumatik', category:'Aktuator',
    viewBox:'-22 -22 44 44', ports:[{x:-22,y:0},{x:22,y:0}],
    symbol:[
      {type:'rect',x:-20,y:-10,width:40,height:20,rx:3,fill:'#e3f2fd',stroke:'#1565c0',strokeWidth:1.5},
      {type:'rect',x:-8,y:-18,width:16,height:8,rx:2,fill:'#90caf9',stroke:'#1565c0',strokeWidth:1},
      {type:'line',x1:-20,y1:0,x2:-14,y2:0,stroke:'#555',strokeWidth:1.5},
      {type:'line',x1:14,y1:0,x2:20,y2:0,stroke:'#555',strokeWidth:1.5},
      {type:'polygon',points:'-6,4 0,-4 6,4',fill:'#1565c0',stroke:'none'},
      {type:'text',x:0,y:12,text:'5/2',fontSize:5,fill:'#1565c0'},
    ]},

  { id:'sol_liquid', name:'Solenoid Valve Cairan', category:'Aktuator',
    viewBox:'-22 -22 44 44', ports:[{x:-22,y:0},{x:22,y:0}],
    symbol:[
      {type:'rect',x:-20,y:-10,width:40,height:20,rx:3,fill:'#e8f5e9',stroke:'#2e7d32',strokeWidth:1.5},
      {type:'rect',x:-8,y:-18,width:16,height:8,rx:2,fill:'#a5d6a7',stroke:'#2e7d32',strokeWidth:1},
      {type:'line',x1:-20,y1:0,x2:-14,y2:0,stroke:'#555',strokeWidth:1.5},
      {type:'line',x1:14,y1:0,x2:20,y2:0,stroke:'#555',strokeWidth:1.5},
      {type:'polygon',points:'-6,4 0,-4 6,4',fill:'#2e7d32',stroke:'none'},
      {type:'text',x:0,y:12,text:'2/2',fontSize:5,fill:'#2e7d32'},
    ]},

  { id:'motor_valve', name:'Motor Valve / Motorized Valve', category:'Aktuator',
    viewBox:'-22 -28 44 56', ports:[{x:-22,y:0},{x:22,y:0},{x:0,y:-28}],
    symbol:[
      {type:'rect',x:-20,y:-10,width:40,height:20,rx:3,fill:'#fff3e0',stroke:'#e65100',strokeWidth:1.5},
      {type:'rect',x:-10,y:-28,width:20,height:18,rx:3,fill:'#ffcc80',stroke:'#e65100',strokeWidth:1},
      {type:'line',x1:-20,y1:0,x2:-14,y2:0,stroke:'#555',strokeWidth:1.5},
      {type:'line',x1:14,y1:0,x2:20,y2:0,stroke:'#555',strokeWidth:1.5},
      {type:'line',x1:0,y1:-28,x2:0,y2:-10,stroke:'#555',strokeWidth:1.5},
      {type:'text',x:0,y:-18,text:'M',fontSize:7,fill:'#e65100',fontWeight:'bold'},
      {type:'polygon',points:'-5,4 0,-4 5,4',fill:'#e65100',stroke:'none'},
    ]},

  { id:'servo_drive', name:'Servo Drive', category:'Aktuator',
    viewBox:'-24 -28 48 56', ports:[{x:-24,y:-14},{x:-24,y:14},{x:24,y:-14},{x:24,y:14}],
    symbol:[
      {type:'rect',x:-22,y:-26,width:44,height:52,rx:4,fill:'#f3e5f5',stroke:'#6a1b9a',strokeWidth:1.5},
      {type:'rect',x:-22,y:-26,width:44,height:10,rx:4,fill:'#6a1b9a',stroke:'none'},
      {type:'text',x:0,y:-20,text:'SERVO',fontSize:5,fill:'#fff',fontWeight:'bold'},
      {type:'text',x:0,y:-5,text:'DRIVE',fontSize:5,fill:'#6a1b9a'},
      {type:'path',d:'M-10,10 Q0,4 10,10',fill:'none',stroke:'#6a1b9a',strokeWidth:1.5},
    ]},

  { id:'stepper_drv', name:'Stepper Driver', category:'Aktuator',
    viewBox:'-24 -28 48 56', ports:[{x:-24,y:-14},{x:-24,y:14},{x:24,y:-14},{x:24,y:14}],
    symbol:[
      {type:'rect',x:-22,y:-26,width:44,height:52,rx:4,fill:'#e8eaf6',stroke:'#283593',strokeWidth:1.5},
      {type:'rect',x:-22,y:-26,width:44,height:10,rx:4,fill:'#283593',stroke:'none'},
      {type:'text',x:0,y:-20,text:'STEP',fontSize:5,fill:'#fff',fontWeight:'bold'},
      {type:'text',x:0,y:-5,text:'DRIVER',fontSize:5,fill:'#283593'},
      {type:'path',d:'M-12,6 L-6,6 L-6,14 L0,14 L0,6 L6,6 L6,14 L12,14',fill:'none',stroke:'#283593',strokeWidth:1.5},
    ]},

  // ══════════════════════════════════════════════════════
  // HVAC & UTILITAS
  // ══════════════════════════════════════════════════════

  { id:'pump_motor', name:'Motor Pompa', category:'HVAC & Utilitas',
    viewBox:'-24 -28 48 56', ports:[{x:-24,y:0},{x:24,y:0}],
    symbol:[
      {type:'circle',cx:0,cy:0,r:20,fill:'#e3f2fd',stroke:'#1565c0',strokeWidth:2},
      {type:'text',x:0,y:2,text:'P',fontSize:12,fill:'#1565c0',fontWeight:'bold'},
      {type:'line',x1:-24,y1:0,x2:-20,y2:0,stroke:'#555',strokeWidth:1.5},
      {type:'line',x1:20,y1:0,x2:24,y2:0,stroke:'#555',strokeWidth:1.5},
      {type:'path',d:'M-10,-14 Q0,-20 10,-14',fill:'none',stroke:'#1565c0',strokeWidth:1.5},
    ]},

  { id:'vacuum_pump', name:'Pompa Vakum', category:'HVAC & Utilitas',
    viewBox:'-24 -28 48 56', ports:[{x:-24,y:0},{x:24,y:0}],
    symbol:[
      {type:'circle',cx:0,cy:0,r:20,fill:'#fce4ec',stroke:'#880e4f',strokeWidth:2},
      {type:'text',x:0,y:2,text:'VAC',fontSize:7,fill:'#880e4f',fontWeight:'bold'},
      {type:'line',x1:-24,y1:0,x2:-20,y2:0,stroke:'#555',strokeWidth:1.5},
      {type:'line',x1:20,y1:0,x2:24,y2:0,stroke:'#555',strokeWidth:1.5},
      {type:'path',d:'M-8,10 Q0,16 8,10',fill:'none',stroke:'#880e4f',strokeWidth:1.5},
    ]},

  { id:'compressor', name:'Kompresor', category:'HVAC & Utilitas',
    viewBox:'-28 -28 56 56', ports:[{x:-28,y:0},{x:28,y:0}],
    symbol:[
      {type:'rect',x:-26,y:-22,width:52,height:44,rx:5,fill:'#fff8e1',stroke:'#f57f17',strokeWidth:2},
      {type:'circle',cx:0,cy:0,r:12,fill:'#ffcc02',stroke:'#f57f17',strokeWidth:1.5},
      {type:'text',x:0,y:2,text:'C',fontSize:10,fill:'#f57f17',fontWeight:'bold'},
      {type:'line',x1:-28,y1:0,x2:-26,y2:0,stroke:'#555',strokeWidth:1.5},
      {type:'line',x1:26,y1:0,x2:28,y2:0,stroke:'#555',strokeWidth:1.5},
    ]},

  { id:'chiller', name:'Chiller / Water Chiller', category:'HVAC & Utilitas',
    viewBox:'-36 -32 72 64', ports:[{x:-36,y:-14},{x:-36,y:14},{x:36,y:-14},{x:36,y:14}],
    symbol:[
      {type:'rect',x:-34,y:-30,width:68,height:60,rx:5,fill:'#e3f2fd',stroke:'#0d47a1',strokeWidth:2},
      {type:'rect',x:-34,y:-30,width:68,height:10,rx:5,fill:'#0d47a1',stroke:'none'},
      {type:'text',x:0,y:-24,text:'CHILLER',fontSize:5.5,fill:'#fff',fontWeight:'bold'},
      {type:'text',x:-18,y:-10,text:'COND',fontSize:4,fill:'#0d47a1'},
      {type:'text',x:8,y:-10,text:'EVAP',fontSize:4,fill:'#0277bd'},
      {type:'rect',x:-30,y:-4,width:24,height:18,rx:2,fill:'#bbdefb',stroke:'#0d47a1',strokeWidth:1},
      {type:'rect',x:6,y:-4,width:24,height:18,rx:2,fill:'#b3e5fc',stroke:'#0277bd',strokeWidth:1},
      {type:'path',d:'M-6,-4 L0,4 L6,-4',fill:'none',stroke:'#0d47a1',strokeWidth:1.5},
    ]},

  { id:'cooling_tower', name:'Cooling Tower', category:'HVAC & Utilitas',
    viewBox:'-28 -32 56 64', ports:[{x:-28,y:14},{x:28,y:14}],
    symbol:[
      {type:'path',d:'M-26,-28 L-10,28 L10,28 L26,-28 Z',fill:'#e0f7fa',stroke:'#00838f',strokeWidth:1.5},
      {type:'line',x1:-26,y1:-28,x2:26,y2:-28,stroke:'#00838f',strokeWidth:1.5},
      {type:'path',d:'M-10,-10 Q0,-18 10,-10',fill:'none',stroke:'#00838f',strokeWidth:1.5},
      {type:'path',d:'M-8,2 Q0,-6 8,2',fill:'none',stroke:'#00838f',strokeWidth:1.5},
      {type:'line',x1:-28,y1:14,x2:-10,y2:14,stroke:'#555',strokeWidth:1.5},
      {type:'line',x1:10,y1:14,x2:28,y2:14,stroke:'#555',strokeWidth:1.5},
    ]},

  { id:'boiler', name:'Boiler / Steam Generator', category:'HVAC & Utilitas',
    viewBox:'-28 -32 56 64', ports:[{x:0,y:-32},{x:-28,y:10},{x:28,y:10}],
    symbol:[
      {type:'ellipse',cx:0,cy:4,rx:24,ry:22,fill:'#fbe9e7',stroke:'#bf360c',strokeWidth:2},
      {type:'rect',x:-8,y:-32,width:16,height:14,rx:2,fill:'#ff8a65',stroke:'#bf360c',strokeWidth:1},
      {type:'line',x1:0,y1:-32,x2:0,y2:-18,stroke:'#555',strokeWidth:1.5},
      {type:'text',x:0,y:6,text:'≋',fontSize:14,fill:'#bf360c'},
      {type:'line',x1:-28,y1:10,x2:-24,y2:10,stroke:'#555',strokeWidth:1.5},
      {type:'line',x1:24,y1:10,x2:28,y2:10,stroke:'#555',strokeWidth:1.5},
    ]},

  { id:'ahu', name:'Air Handling Unit (AHU)', category:'HVAC & Utilitas',
    viewBox:'-36 -24 72 48', ports:[{x:-36,y:0},{x:36,y:0}],
    symbol:[
      {type:'rect',x:-34,y:-22,width:68,height:44,rx:4,fill:'#e8f5e9',stroke:'#2e7d32',strokeWidth:1.5},
      {type:'rect',x:-34,y:-22,width:68,height:9,rx:4,fill:'#2e7d32',stroke:'none'},
      {type:'text',x:0,y:-16,text:'AHU',fontSize:6,fill:'#fff',fontWeight:'bold'},
      {type:'circle',cx:-12,cy:6,r:10,fill:'none',stroke:'#2e7d32',strokeWidth:1},
      {type:'path',d:'M-12,-4 L-8,6 L-16,6 Z',fill:'#2e7d32',stroke:'none'},
      {type:'rect',x:4,y:-4,width:18,height:20,rx:2,fill:'none',stroke:'#2e7d32',strokeWidth:1},
      {type:'line',x1:4,y1:0,x2:22,y2:0,stroke:'#2e7d32',strokeWidth:0.8},
      {type:'line',x1:4,y1:4,x2:22,y2:4,stroke:'#2e7d32',strokeWidth:0.8},
      {type:'line',x1:4,y1:8,x2:22,y2:8,stroke:'#2e7d32',strokeWidth:0.8},
    ]},

  // ══════════════════════════════════════════════════════
  // INSTRUMEN & KONTROL PROSES
  // ══════════════════════════════════════════════════════

  { id:'kwh_meter', name:'KWH Meter / Energy Meter', category:'Instrumen',
    viewBox:'-22 -24 44 48', ports:[{x:-22,y:-12},{x:-22,y:12},{x:22,y:-12},{x:22,y:12}],
    symbol:[
      {type:'rect',x:-20,y:-22,width:40,height:44,rx:3,fill:'#fff9c4',stroke:'#f9a825',strokeWidth:1.5},
      {type:'rect',x:-20,y:-22,width:40,height:9,rx:3,fill:'#f9a825',stroke:'none'},
      {type:'text',x:0,y:-16,text:'kWh',fontSize:5.5,fill:'#fff',fontWeight:'bold'},
      {type:'rect',x:-12,y:-8,width:24,height:12,rx:2,fill:'#fff',stroke:'#f9a825',strokeWidth:1},
      {type:'text',x:0,y:-1,text:'00000',fontSize:6,fill:'#333'},
      {type:'text',x:0,y:10,text:'kWh',fontSize:4.5,fill:'#f9a825'},
    ]},

  { id:'flow_meter', name:'Flow Meter', category:'Instrumen',
    viewBox:'-22 -20 44 40', ports:[{x:-22,y:0},{x:22,y:0}],
    symbol:[
      {type:'circle',cx:0,cy:0,r:16,fill:'#e1f5fe',stroke:'#0277bd',strokeWidth:1.5},
      {type:'line',x1:-22,y1:0,x2:-16,y2:0,stroke:'#555',strokeWidth:1.5},
      {type:'line',x1:16,y1:0,x2:22,y2:0,stroke:'#555',strokeWidth:1.5},
      {type:'text',x:0,y:2,text:'FM',fontSize:7,fill:'#0277bd',fontWeight:'bold'},
      {type:'polygon',points:'-6,-8 6,-8 0,0',fill:'#0277bd',stroke:'none'},
    ]},

  { id:'level_ultra', name:'Level Sensor Ultrasonik', category:'Instrumen',
    viewBox:'-16 -24 32 48', ports:[{x:0,y:-24},{x:0,y:24}],
    symbol:[
      {type:'rect',x:-14,y:-22,width:28,height:20,rx:3,fill:'#f3e5f5',stroke:'#6a1b9a',strokeWidth:1.5},
      {type:'text',x:0,y:-12,text:'US',fontSize:7,fill:'#6a1b9a',fontWeight:'bold'},
      {type:'path',d:'M-10,2 Q-5,8 0,2 Q5,8 10,2',fill:'none',stroke:'#6a1b9a',strokeWidth:1.5},
      {type:'path',d:'M-10,8 Q-5,14 0,8 Q5,14 10,8',fill:'none',stroke:'#6a1b9a',strokeWidth:1},
      {type:'line',x1:0,y1:-24,x2:0,y2:-22,stroke:'#555',strokeWidth:1.5},
      {type:'line',x1:0,y1:-2,x2:0,y2:24,stroke:'#555',strokeWidth:1.5},
    ]},

  { id:'ph_sensor', name:'pH Sensor / Analyzer', category:'Instrumen',
    viewBox:'-16 -24 32 48', ports:[{x:0,y:-24},{x:0,y:24}],
    symbol:[
      {type:'rect',x:-14,y:-22,width:28,height:20,rx:3,fill:'#e8f5e9',stroke:'#1b5e20',strokeWidth:1.5},
      {type:'text',x:0,y:-12,text:'pH',fontSize:8,fill:'#1b5e20',fontWeight:'bold'},
      {type:'line',x1:0,y1:-24,x2:0,y2:-22,stroke:'#555',strokeWidth:1.5},
      {type:'line',x1:0,y1:-2,x2:0,y2:24,stroke:'#555',strokeWidth:1.5},
    ]},

  { id:'encoder', name:'Encoder Rotary', category:'Instrumen',
    viewBox:'-20 -20 40 40', ports:[{x:0,y:-20},{x:0,y:20}],
    symbol:[
      {type:'circle',cx:0,cy:0,r:16,fill:'#eceff1',stroke:'#455a64',strokeWidth:1.5},
      {type:'circle',cx:0,cy:0,r:6,fill:'#90a4ae',stroke:'#455a64',strokeWidth:1},
      {type:'path',d:'M0,-16 A16,16 0 0,1 11.3,11.3',fill:'none',stroke:'#455a64',strokeWidth:2,strokeLinecap:'round'},
      {type:'line',x1:0,y1:-20,x2:0,y2:-16,stroke:'#555',strokeWidth:1.5},
      {type:'line',x1:0,y1:16,x2:0,y2:20,stroke:'#555',strokeWidth:1.5},
    ]},

  { id:'pid_ctrl', name:'PID Controller', category:'Instrumen',
    viewBox:'-28 -24 56 48', ports:[{x:-28,y:-12},{x:-28,y:12},{x:28,y:-12},{x:28,y:12}],
    symbol:[
      {type:'rect',x:-26,y:-22,width:52,height:44,rx:4,fill:'#e8eaf6',stroke:'#283593',strokeWidth:1.5},
      {type:'rect',x:-26,y:-22,width:52,height:9,rx:4,fill:'#283593',stroke:'none'},
      {type:'text',x:0,y:-16,text:'PID',fontSize:6.5,fill:'#fff',fontWeight:'bold'},
      {type:'path',d:'M-18,2 Q-10,-8 -2,2 Q6,12 14,0',fill:'none',stroke:'#283593',strokeWidth:1.5},
    ]},

  { id:'ssrelay', name:'Solid State Relay (SSR)', category:'Instrumen',
    viewBox:'-22 -24 44 48', ports:[{x:-22,y:-12},{x:-22,y:12},{x:22,y:-12},{x:22,y:12}],
    symbol:[
      {type:'rect',x:-20,y:-22,width:40,height:44,rx:3,fill:'#fff3e0',stroke:'#e65100',strokeWidth:1.5},
      {type:'rect',x:-20,y:-22,width:40,height:9,rx:3,fill:'#e65100',stroke:'none'},
      {type:'text',x:0,y:-16,text:'SSR',fontSize:6,fill:'#fff',fontWeight:'bold'},
      {type:'text',x:-12,y:-6,text:'IN',fontSize:4,fill:'#e65100'},
      {type:'text',x:6,y:-6,text:'OUT',fontSize:4,fill:'#e65100'},
      {type:'line',x1:-4,y1:2,x2:4,y2:2,stroke:'#e65100',strokeWidth:1},
      {type:'path',d:'M-2,-4 L2,-4 L2,8 L-2,8',fill:'none',stroke:'#e65100',strokeWidth:1},
    ]},

  // ══════════════════════════════════════════════════════
  // BANGUNAN / GEDUNG
  // ══════════════════════════════════════════════════════

  { id:'fire_alarm', name:'Fire Alarm / Alarm Kebakaran', category:'Bangunan',
    viewBox:'-20 -20 40 40', ports:[{x:0,y:-20},{x:0,y:20}],
    symbol:[
      {type:'circle',cx:0,cy:0,r:16,fill:'#ffebee',stroke:'#c62828',strokeWidth:2},
      {type:'text',x:0,y:2,text:'FA',fontSize:8,fill:'#c62828',fontWeight:'bold'},
      {type:'line',x1:0,y1:-20,x2:0,y2:-16,stroke:'#555',strokeWidth:1.5},
      {type:'line',x1:0,y1:16,x2:0,y2:20,stroke:'#555',strokeWidth:1.5},
    ]},

  { id:'smoke_det', name:'Detektor Asap', category:'Bangunan',
    viewBox:'-18 -18 36 36', ports:[{x:0,y:-18},{x:0,y:18}],
    symbol:[
      {type:'circle',cx:0,cy:0,r:14,fill:'#fce4ec',stroke:'#ad1457',strokeWidth:1.5},
      {type:'path',d:'M-4,-6 Q0,-12 4,-6 Q0,-2 -4,-6',fill:'none',stroke:'#ad1457',strokeWidth:1.5},
      {type:'path',d:'M-8,-4 Q0,-14 8,-4',fill:'none',stroke:'#ad1457',strokeWidth:1},
      {type:'line',x1:0,y1:-18,x2:0,y2:-14,stroke:'#555',strokeWidth:1.5},
      {type:'line',x1:0,y1:14,x2:0,y2:18,stroke:'#555',strokeWidth:1.5},
    ]},

  { id:'emergency_lt', name:'Lampu Emergency', category:'Bangunan',
    viewBox:'-22 -22 44 44', ports:[{x:0,y:-22},{x:0,y:22}],
    symbol:[
      {type:'rect',x:-20,y:-16,width:40,height:14,rx:3,fill:'#fff9c4',stroke:'#f9a825',strokeWidth:1.5},
      {type:'rect',x:-10,y:-22,width:8,height:6,rx:2,fill:'#f9a825',stroke:'#f57f17',strokeWidth:1},
      {type:'rect',x:2,y:-22,width:8,height:6,rx:2,fill:'#f9a825',stroke:'#f57f17',strokeWidth:1},
      {type:'text',x:0,y:-7,text:'EXIT',fontSize:5.5,fill:'#f9a825',fontWeight:'bold'},
      {type:'line',x1:0,y1:-22,x2:0,y2:-22,stroke:'#555',strokeWidth:1.5},
      {type:'line',x1:0,y1:-2,x2:0,y2:22,stroke:'#555',strokeWidth:1.5},
    ]},

  { id:'acb', name:'ACB (Air Circuit Breaker)', category:'Bangunan',
    viewBox:'-28 -32 56 64', ports:[{x:0,y:-32},{x:0,y:32}],
    symbol:[
      {type:'rect',x:-26,y:-30,width:52,height:60,rx:4,fill:'#f5f5f5',stroke:'#37474f',strokeWidth:2},
      {type:'rect',x:-26,y:-30,width:52,height:10,rx:4,fill:'#37474f',stroke:'none'},
      {type:'text',x:0,y:-24,text:'ACB',fontSize:6,fill:'#fff',fontWeight:'bold'},
      {type:'line',x1:0,y1:-32,x2:0,y2:-30,stroke:'#555',strokeWidth:2},
      {type:'line',x1:0,y1:30,x2:0,y2:32,stroke:'#555',strokeWidth:2},
      {type:'rect',x:-10,y:-16,width:20,height:12,rx:2,fill:'#ef9a9a',stroke:'#c62828',strokeWidth:1},
      {type:'text',x:0,y:-9,text:'TRIP',fontSize:5,fill:'#c62828'},
      {type:'line',x1:0,y1:-4,x2:0,y2:16,stroke:'#37474f',strokeWidth:2},
    ]},

  { id:'mccb', name:'MCCB (Moulded Case CB)', category:'Bangunan',
    viewBox:'-20 -32 40 64', ports:[{x:0,y:-32},{x:0,y:32}],
    symbol:[
      {type:'rect',x:-18,y:-30,width:36,height:60,rx:3,fill:'#eceff1',stroke:'#546e7a',strokeWidth:1.5},
      {type:'rect',x:-18,y:-30,width:36,height:9,rx:3,fill:'#546e7a',stroke:'none'},
      {type:'text',x:0,y:-24,text:'MCCB',fontSize:5,fill:'#fff',fontWeight:'bold'},
      {type:'line',x1:0,y1:-32,x2:0,y2:-30,stroke:'#555',strokeWidth:2},
      {type:'line',x1:0,y1:30,x2:0,y2:32,stroke:'#555',strokeWidth:2},
      {type:'rect',x:-8,y:-8,width:16,height:22,rx:2,fill:'#ff8a65',stroke:'#bf360c',strokeWidth:1},
      {type:'text',x:0,y:3,text:'I O',fontSize:6,fill:'#fff',fontWeight:'bold'},
    ]},

  // ══════════════════════════════════════════════════════
  // PROSES INDUSTRI
  // ══════════════════════════════════════════════════════

  { id:'mixer_motor', name:'Motor Mixer / Agitator', category:'Proses Industri',
    viewBox:'-24 -32 48 64', ports:[{x:-24,y:0},{x:24,y:0}],
    symbol:[
      {type:'circle',cx:0,cy:0,r:20,fill:'#e3f2fd',stroke:'#1565c0',strokeWidth:2},
      {type:'text',x:0,y:-4,text:'M',fontSize:10,fill:'#1565c0',fontWeight:'bold'},
      {type:'line',x1:0,y1:20,x2:0,y2:30,stroke:'#555',strokeWidth:2},
      {type:'line',x1:-12,y1:28,x2:12,y2:28,stroke:'#555',strokeWidth:2},
      {type:'line',x1:-12,y1:28,x2:-16,y2:32,stroke:'#555',strokeWidth:2},
      {type:'line',x1:12,y1:28,x2:16,y2:32,stroke:'#555',strokeWidth:2},
      {type:'line',x1:-24,y1:0,x2:-20,y2:0,stroke:'#555',strokeWidth:1.5},
      {type:'line',x1:20,y1:0,x2:24,y2:0,stroke:'#555',strokeWidth:1.5},
    ]},

  { id:'conveyor_motor', name:'Motor Conveyor', category:'Proses Industri',
    viewBox:'-32 -20 64 40', ports:[{x:-32,y:0},{x:32,y:0}],
    symbol:[
      {type:'rect',x:-30,y:-10,width:60,height:20,rx:3,fill:'#e8f5e9',stroke:'#2e7d32',strokeWidth:1.5},
      {type:'circle',cx:-18,cy:0,r:8,fill:'#a5d6a7',stroke:'#2e7d32',strokeWidth:1.5},
      {type:'circle',cx:18,cy:0,r:8,fill:'#a5d6a7',stroke:'#2e7d32',strokeWidth:1.5},
      {type:'line',x1:-18,y1:-8,x2:18,y2:-8,stroke:'#2e7d32',strokeWidth:1.5},
      {type:'line',x1:-18,y1:8,x2:18,y2:8,stroke:'#2e7d32',strokeWidth:1.5},
      {type:'text',x:0,y:2,text:'CVR',fontSize:6,fill:'#2e7d32',fontWeight:'bold'},
      {type:'line',x1:-32,y1:0,x2:-30,y2:0,stroke:'#555',strokeWidth:1.5},
      {type:'line',x1:30,y1:0,x2:32,y2:0,stroke:'#555',strokeWidth:1.5},
    ]},

  { id:'filling_valve', name:'Filling Valve / Nozzle', category:'Proses Industri',
    viewBox:'-16 -28 32 56', ports:[{x:0,y:-28},{x:0,y:28}],
    symbol:[
      {type:'rect',x:-14,y:-28,width:28,height:18,rx:3,fill:'#e3f2fd',stroke:'#1565c0',strokeWidth:1.5},
      {type:'path',d:'M-10,-10 L-6,8 L6,8 L10,-10',fill:'#bbdefb',stroke:'#1565c0',strokeWidth:1},
      {type:'rect',x:-4,y:8,width:8,height:10,rx:1,fill:'#90caf9',stroke:'#1565c0',strokeWidth:1},
      {type:'line',x1:0,y1:-28,x2:0,y2:-28,stroke:'#555',strokeWidth:1.5},
      {type:'line',x1:0,y1:18,x2:0,y2:28,stroke:'#555',strokeWidth:1.5},
      {type:'text',x:0,y:-18,text:'FV',fontSize:6,fill:'#1565c0',fontWeight:'bold'},
    ]},

  { id:'uv_lamp', name:'Lampu UV Sterilisasi', category:'Proses Industri',
    viewBox:'-20 -24 40 48', ports:[{x:0,y:-24},{x:0,y:24}],
    symbol:[
      {type:'rect',x:-6,y:-22,width:12,height:44,rx:6,fill:'#ede7f6',stroke:'#6a1b9a',strokeWidth:1.5},
      {type:'line',x1:-14,y1:-14,x2:-6,y2:-8,stroke:'#9c27b0',strokeWidth:1.5},
      {type:'line',x1:14,y1:-14,x2:6,y2:-8,stroke:'#9c27b0',strokeWidth:1.5},
      {type:'line',x1:-16,y1:0,x2:-6,y2:0,stroke:'#9c27b0',strokeWidth:1.5},
      {type:'line',x1:16,y1:0,x2:6,y2:0,stroke:'#9c27b0',strokeWidth:1.5},
      {type:'line',x1:-14,y1:14,x2:-6,y2:8,stroke:'#9c27b0',strokeWidth:1.5},
      {type:'line',x1:14,y1:14,x2:6,y2:8,stroke:'#9c27b0',strokeWidth:1.5},
      {type:'text',x:0,y:0,text:'UV',fontSize:5,fill:'#6a1b9a',fontWeight:'bold'},
      {type:'line',x1:0,y1:-24,x2:0,y2:-22,stroke:'#555',strokeWidth:1.5},
      {type:'line',x1:0,y1:22,x2:0,y2:24,stroke:'#555',strokeWidth:1.5},
    ]},

  { id:'heat_ctrl', name:'Temperature Controller', category:'Proses Industri',
    viewBox:'-28 -24 56 48', ports:[{x:-28,y:-12},{x:-28,y:12},{x:28,y:-12},{x:28,y:12}],
    symbol:[
      {type:'rect',x:-26,y:-22,width:52,height:44,rx:4,fill:'#fff8e1',stroke:'#e65100',strokeWidth:1.5},
      {type:'rect',x:-26,y:-22,width:52,height:9,rx:4,fill:'#e65100',stroke:'none'},
      {type:'text',x:0,y:-16,text:'TEMP',fontSize:5.5,fill:'#fff',fontWeight:'bold'},
      {type:'rect',x:-16,y:-8,width:32,height:16,rx:2,fill:'#fff',stroke:'#e65100',strokeWidth:1},
      {type:'text',x:0,y:3,text:'200°C',fontSize:6,fill:'#e65100'},
    ]},

  { id:'peristaltic', name:'Pompa Peristaltik', category:'Proses Industri',
    viewBox:'-24 -24 48 48', ports:[{x:-24,y:0},{x:24,y:0}],
    symbol:[
      {type:'circle',cx:0,cy:0,r:18,fill:'#fce4ec',stroke:'#880e4f',strokeWidth:2},
      {type:'circle',cx:0,cy:0,r:6,fill:'#f48fb1',stroke:'#880e4f',strokeWidth:1},
      {type:'path',d:'M0,-18 A18,18 0 0,1 15.6,9',fill:'none',stroke:'#880e4f',strokeWidth:3,strokeLinecap:'round'},
      {type:'text',x:0,y:2,text:'PP',fontSize:6,fill:'#880e4f',fontWeight:'bold'},
      {type:'line',x1:-24,y1:0,x2:-18,y2:0,stroke:'#555',strokeWidth:1.5},
      {type:'line',x1:18,y1:0,x2:24,y2:0,stroke:'#555',strokeWidth:1.5},
    ]},

  // ══════════════════════════════════════════════════════
  // ELECTRONICS — Arduino / Fritzing style (realistic)
  // ══════════════════════════════════════════════════════

  // ── Passive ───────────────────────────────────────────
  { id:'e_resistor', name:'Resistor', category:'Electronics',
    viewBox:'-28 -10 56 20', ports:[{x:-28,y:0},{x:28,y:0}],
    symbol:[
      {type:'line',x1:-28,y1:0,x2:-18,y2:0,stroke:'#aaa',strokeWidth:1.5},
      {type:'line',x1:18,y1:0,x2:28,y2:0,stroke:'#aaa',strokeWidth:1.5},
      {type:'rect',x:-18,y:-7,width:36,height:14,rx:7,fill:'#d4b483',stroke:'#a07840',strokeWidth:1.2},
      {type:'rect',x:-12,y:-7,width:4,height:14,rx:0,fill:'#8B4513',stroke:'none'},
      {type:'rect',x:-4,y:-7,width:4,height:14,rx:0,fill:'#e53935',stroke:'none'},
      {type:'rect',x:4,y:-7,width:4,height:14,rx:0,fill:'#111',stroke:'none'},
      {type:'rect',x:12,y:-7,width:3,height:14,rx:0,fill:'#ffd700',stroke:'none'},
    ]},

  { id:'e_resistor_var', name:'Potensiometer', category:'Electronics',
    viewBox:'-20 -24 40 44', ports:[{x:-20,y:8},{x:20,y:8},{x:0,y:-24}],
    symbol:[
      {type:'rect',x:-18,y:-4,width:36,height:24,rx:4,fill:'#1565c0',stroke:'#0d47a1',strokeWidth:1.5},
      {type:'circle',cx:0,cy:8,r:8,fill:'#1976d2',stroke:'#0d47a1',strokeWidth:1},
      {type:'circle',cx:0,cy:8,r:3,fill:'#fff',stroke:'none'},
      {type:'line',x1:-20,y1:8,x2:-18,y2:8,stroke:'#aaa',strokeWidth:1.5},
      {type:'line',x1:18,y1:8,x2:20,y2:8,stroke:'#aaa',strokeWidth:1.5},
      {type:'line',x1:0,y1:-4,x2:0,y2:-24,stroke:'#aaa',strokeWidth:1.5},
      {type:'text',x:0,y:-14,text:'POT',fontSize:5,fill:'#90caf9'},
    ]},

  { id:'e_cap_elec', name:'Kapasitor Elektrolitik', category:'Electronics',
    viewBox:'-12 -28 24 44', ports:[{x:-6,y:16},{x:6,y:16}],
    symbol:[
      {type:'rect',x:-10,y:-26,width:20,height:38,rx:4,fill:'#1a237e',stroke:'#0d47a1',strokeWidth:1.5},
      {type:'rect',x:-10,y:-26,width:8,height:38,rx:4,fill:'#e8eaf6',stroke:'none'},
      {type:'text',x:-6,y:0,text:'－',fontSize:8,fill:'#1a237e'},
      {type:'text',x:4,y:0,text:'＋',fontSize:8,fill:'#fff',fontWeight:'bold'},
      {type:'line',x1:-6,y1:12,x2:-6,y2:16,stroke:'#aaa',strokeWidth:2},
      {type:'line',x1:6,y1:12,x2:6,y2:16,stroke:'#aaa',strokeWidth:2},
      {type:'line',x1:6,y1:12,x2:6,y2:4,stroke:'#aaa',strokeWidth:2},
    ]},

  { id:'e_cap_cer', name:'Kapasitor Keramik', category:'Electronics',
    viewBox:'-14 -20 28 36', ports:[{x:-6,y:16},{x:6,y:16}],
    symbol:[
      {type:'ellipse',cx:0,cy:-4,rx:12,ry:14,fill:'#ff8f00',stroke:'#e65100',strokeWidth:1.5},
      {type:'text',x:0,y:-2,text:'104',fontSize:5,fill:'#fff'},
      {type:'line',x1:-6,y1:8,x2:-6,y2:16,stroke:'#aaa',strokeWidth:1.5},
      {type:'line',x1:6,y1:8,x2:6,y2:16,stroke:'#aaa',strokeWidth:1.5},
    ]},

  { id:'e_inductor', name:'Induktor / Koil', category:'Electronics',
    viewBox:'-28 -12 56 20', ports:[{x:-28,y:0},{x:28,y:0}],
    symbol:[
      {type:'line',x1:-28,y1:0,x2:-20,y2:0,stroke:'#aaa',strokeWidth:1.5},
      {type:'line',x1:20,y1:0,x2:28,y2:0,stroke:'#aaa',strokeWidth:1.5},
      {type:'path',d:'M-20,0 C-20,-10 -12,-10 -12,0 C-12,-10 -4,-10 -4,0 C-4,-10 4,-10 4,0 C4,-10 12,-10 12,0 C12,-10 20,-10 20,0',fill:'none',stroke:'#c0392b',strokeWidth:2},
      {type:'rect',x:-21,y:2,width:42,height:4,rx:2,fill:'#b7c0cc',stroke:'#888',strokeWidth:0.5},
    ]},

  // ── Diodes ────────────────────────────────────────────
  { id:'e_diode', name:'Dioda', category:'Electronics',
    viewBox:'-20 -12 40 24', ports:[{x:-20,y:0},{x:20,y:0}],
    symbol:[
      {type:'line',x1:-20,y1:0,x2:-10,y2:0,stroke:'#aaa',strokeWidth:1.5},
      {type:'line',x1:10,y1:0,x2:20,y2:0,stroke:'#aaa',strokeWidth:1.5},
      {type:'rect',x:-12,y:-8,width:22,height:16,rx:8,fill:'#e8e0d0',stroke:'#888',strokeWidth:1.2},
      {type:'rect',x:6,y:-8,width:6,height:16,rx:3,fill:'#555',stroke:'none'},
    ]},

  { id:'e_led_red', name:'LED Merah', category:'Electronics',
    viewBox:'-12 -28 24 44', ports:[{x:-6,y:16},{x:6,y:16}],
    symbol:[
      {type:'ellipse',cx:0,cy:-12,rx:10,ry:12,fill:'#f44336',stroke:'#b71c1c',strokeWidth:1.5},
      {type:'rect',x:-10,y:-2,width:20,height:4,fill:'#d32f2f',stroke:'none'},
      {type:'line',x1:-6,y1:2,x2:-6,y2:16,stroke:'#aaa',strokeWidth:2},
      {type:'line',x1:6,y1:2,x2:6,y2:16,stroke:'#aaa',strokeWidth:2},
      {type:'line',x1:-6,y1:2,x2:-6,y2:8,stroke:'#aaa',strokeWidth:2},
    ]},

  { id:'e_led_green', name:'LED Hijau', category:'Electronics',
    viewBox:'-12 -28 24 44', ports:[{x:-6,y:16},{x:6,y:16}],
    symbol:[
      {type:'ellipse',cx:0,cy:-12,rx:10,ry:12,fill:'#4caf50',stroke:'#1b5e20',strokeWidth:1.5},
      {type:'rect',x:-10,y:-2,width:20,height:4,fill:'#388e3c',stroke:'none'},
      {type:'line',x1:-6,y1:2,x2:-6,y2:16,stroke:'#aaa',strokeWidth:2},
      {type:'line',x1:6,y1:2,x2:6,y2:16,stroke:'#aaa',strokeWidth:2},
      {type:'line',x1:-6,y1:2,x2:-6,y2:8,stroke:'#aaa',strokeWidth:2},
    ]},

  { id:'e_led_blue', name:'LED Biru', category:'Electronics',
    viewBox:'-12 -28 24 44', ports:[{x:-6,y:16},{x:6,y:16}],
    symbol:[
      {type:'ellipse',cx:0,cy:-12,rx:10,ry:12,fill:'#2196f3',stroke:'#0d47a1',strokeWidth:1.5},
      {type:'rect',x:-10,y:-2,width:20,height:4,fill:'#1565c0',stroke:'none'},
      {type:'line',x1:-6,y1:2,x2:-6,y2:16,stroke:'#aaa',strokeWidth:2},
      {type:'line',x1:6,y1:2,x2:6,y2:16,stroke:'#aaa',strokeWidth:2},
      {type:'line',x1:-6,y1:2,x2:-6,y2:8,stroke:'#aaa',strokeWidth:2},
    ]},

  // ── Transistors ───────────────────────────────────────
  { id:'e_npn', name:'Transistor NPN (BJT)', category:'Electronics',
    viewBox:'-16 -24 32 44', ports:[{x:-16,y:0},{x:12,y:-20},{x:12,y:20}],
    symbol:[
      {type:'rect',x:-10,y:-22,width:22,height:40,rx:11,fill:'#212121',stroke:'#555',strokeWidth:1.5},
      {type:'text',x:1,y:3,text:'NPN',fontSize:5,fill:'#90a4ae'},
      {type:'line',x1:-16,y1:0,x2:-10,y2:0,stroke:'#aaa',strokeWidth:1.5},
      {type:'line',x1:12,y1:-20,x2:6,y2:-10,stroke:'#aaa',strokeWidth:1.5},
      {type:'line',x1:12,y1:20,x2:6,y2:10,stroke:'#aaa',strokeWidth:1.5},
    ]},

  { id:'e_mosfet_n', name:'MOSFET N-Channel', category:'Electronics',
    viewBox:'-16 -28 32 52', ports:[{x:-16,y:0},{x:12,y:-24},{x:12,y:24}],
    symbol:[
      {type:'rect',x:-10,y:-26,width:22,height:48,rx:11,fill:'#212121',stroke:'#555',strokeWidth:1.5},
      {type:'text',x:1,y:3,text:'MOS',fontSize:4.5,fill:'#90a4ae'},
      {type:'text',x:1,y:10,text:'N-Ch',fontSize:4,fill:'#90a4ae'},
      {type:'line',x1:-16,y1:0,x2:-10,y2:0,stroke:'#aaa',strokeWidth:1.5},
      {type:'line',x1:12,y1:-24,x2:6,y2:-12,stroke:'#aaa',strokeWidth:1.5},
      {type:'line',x1:12,y1:24,x2:6,y2:12,stroke:'#aaa',strokeWidth:1.5},
    ]},

  // ── Switches ──────────────────────────────────────────
  { id:'e_pushbtn', name:'Push Button (Tactile)', category:'Electronics',
    viewBox:'-18 -18 36 36', ports:[{x:-18,y:-10},{x:-18,y:10},{x:18,y:-10},{x:18,y:10}],
    symbol:[
      {type:'rect',x:-16,y:-16,width:32,height:32,rx:3,fill:'#e0e0e0',stroke:'#9e9e9e',strokeWidth:1.5},
      {type:'circle',cx:0,cy:0,r:8,fill:'#f44336',stroke:'#b71c1c',strokeWidth:1.5},
      {type:'circle',cx:0,cy:0,r:4,fill:'#e53935',stroke:'none'},
      {type:'circle',cx:-12,cy:-12,r:2.5,fill:'#9e9e9e',stroke:'#757575',strokeWidth:1},
      {type:'circle',cx:12,cy:-12,r:2.5,fill:'#9e9e9e',stroke:'#757575',strokeWidth:1},
      {type:'circle',cx:-12,cy:12,r:2.5,fill:'#9e9e9e',stroke:'#757575',strokeWidth:1},
      {type:'circle',cx:12,cy:12,r:2.5,fill:'#9e9e9e',stroke:'#757575',strokeWidth:1},
    ]},

  { id:'e_switch_spdt', name:'Switch SPDT', category:'Electronics',
    viewBox:'-24 -16 48 28', ports:[{x:-24,y:0},{x:24,y:-12},{x:24,y:12}],
    symbol:[
      {type:'rect',x:-22,y:-14,width:44,height:26,rx:4,fill:'#37474f',stroke:'#263238',strokeWidth:1.5},
      {type:'rect',x:-8,y:-6,width:16,height:10,rx:3,fill:'#e53935',stroke:'#b71c1c',strokeWidth:1},
      {type:'line',x1:-22,y1:0,x2:-8,y2:0,stroke:'#aaa',strokeWidth:1.5},
      {type:'line',x1:8,y1:-4,x2:22,y2:-12,stroke:'#aaa',strokeWidth:1.5},
      {type:'line',x1:8,y1:4,x2:22,y2:12,stroke:'#aaa',strokeWidth:1.5},
    ]},

  // ── ICs & Modules ─────────────────────────────────────
  { id:'e_555', name:'IC 555 Timer', category:'Electronics',
    viewBox:'-24 -28 48 52', ports:[{x:-24,y:-20},{x:-24,y:0},{x:-24,y:20},{x:24,y:-20},{x:24,y:0},{x:24,y:20}],
    symbol:[
      {type:'rect',x:-20,y:-26,width:40,height:48,rx:3,fill:'#212121',stroke:'#555',strokeWidth:1.5},
      {type:'circle',cx:-20,cy:-26,r:4,fill:'#333',stroke:'none'},
      {type:'text',x:0,y:-14,text:'555',fontSize:9,fill:'#fff',fontWeight:'bold'},
      {type:'text',x:0,y:0,text:'TIMER',fontSize:5,fill:'#90a4ae'},
      {type:'line',x1:-24,y1:-20,x2:-20,y2:-20,stroke:'#aaa',strokeWidth:1.5},
      {type:'line',x1:-24,y1:0,x2:-20,y2:0,stroke:'#aaa',strokeWidth:1.5},
      {type:'line',x1:-24,y1:20,x2:-20,y2:20,stroke:'#aaa',strokeWidth:1.5},
      {type:'line',x1:24,y1:-20,x2:20,y2:-20,stroke:'#aaa',strokeWidth:1.5},
      {type:'line',x1:24,y1:0,x2:20,y2:0,stroke:'#aaa',strokeWidth:1.5},
      {type:'line',x1:24,y1:20,x2:20,y2:20,stroke:'#aaa',strokeWidth:1.5},
    ]},

  { id:'e_opamp', name:'Op-Amp (LM741)', category:'Electronics',
    viewBox:'-24 -28 48 52', ports:[{x:-24,y:-14},{x:-24,y:14},{x:24,y:0},{x:0,y:-28},{x:0,y:28}],
    symbol:[
      {type:'rect',x:-20,y:-26,width:40,height:48,rx:3,fill:'#212121',stroke:'#555',strokeWidth:1.5},
      {type:'circle',cx:-20,cy:-26,r:4,fill:'#333',stroke:'none'},
      {type:'text',x:0,y:-8,text:'741',fontSize:8,fill:'#fff',fontWeight:'bold'},
      {type:'text',x:0,y:4,text:'OP-AMP',fontSize:4,fill:'#90a4ae'},
      {type:'line',x1:-24,y1:-14,x2:-20,y2:-14,stroke:'#aaa',strokeWidth:1.5},
      {type:'line',x1:-24,y1:14,x2:-20,y2:14,stroke:'#aaa',strokeWidth:1.5},
      {type:'line',x1:24,y1:0,x2:20,y2:0,stroke:'#aaa',strokeWidth:1.5},
    ]},

  { id:'e_relay_mod', name:'Relay Module 5V', category:'Electronics',
    viewBox:'-28 -22 56 44', ports:[{x:-28,y:-14},{x:-28,y:0},{x:-28,y:14},{x:28,y:-14},{x:28,y:0},{x:28,y:14}],
    symbol:[
      {type:'rect',x:-26,y:-20,width:52,height:40,rx:4,fill:'#1a237e',stroke:'#0d47a1',strokeWidth:1.5},
      {type:'rect',x:-14,y:-12,width:18,height:22,rx:3,fill:'#212121',stroke:'#555',strokeWidth:1},
      {type:'rect',x:6,y:-12,width:18,height:22,rx:2,fill:'#2e7d32',stroke:'#1b5e20',strokeWidth:1},
      {type:'text',x:-5,y:2,text:'RLY',fontSize:5,fill:'#fff'},
      {type:'text',x:15,y:2,text:'5V',fontSize:5,fill:'#a5d6a7'},
      {type:'circle',cx:-20,cy:-14,r:2,fill:'#76ff03',stroke:'none'},
    ]},

  { id:'e_l298n', name:'L298N Motor Driver', category:'Electronics',
    viewBox:'-32 -28 64 52', ports:[{x:-32,y:-20},{x:-32,y:0},{x:-32,y:20},{x:32,y:-20},{x:32,y:0},{x:32,y:20}],
    symbol:[
      {type:'rect',x:-30,y:-26,width:60,height:48,rx:4,fill:'#1565c0',stroke:'#0d47a1',strokeWidth:1.5},
      {type:'rect',x:-12,y:-14,width:24,height:28,rx:3,fill:'#212121',stroke:'#555',strokeWidth:1},
      {type:'text',x:0,y:-4,text:'L298N',fontSize:6,fill:'#fff',fontWeight:'bold'},
      {type:'text',x:0,y:6,text:'MOTOR',fontSize:5,fill:'#90caf9'},
      {type:'text',x:0,y:14,text:'DRIVER',fontSize:5,fill:'#90caf9'},
    ]},

  // ── Arduino Boards ────────────────────────────────────
  { id:'e_arduino_uno', name:'Arduino Uno', category:'Electronics',
    viewBox:'-44 -36 88 72', ports:[{x:-44,y:-20},{x:-44,y:0},{x:-44,y:20},{x:44,y:-20},{x:44,y:0},{x:44,y:20}],
    symbol:[
      {type:'rect',x:-42,y:-34,width:84,height:68,rx:6,fill:'#006f9e',stroke:'#004b6e',strokeWidth:2},
      {type:'rect',x:-42,y:-34,width:84,height:12,rx:6,fill:'#004b6e',stroke:'none'},
      {type:'text',x:0,y:-22,text:'Arduino',fontSize:7,fill:'#fff',fontWeight:'bold'},
      {type:'text',x:0,y:-12,text:'UNO R3',fontSize:5.5,fill:'#80deea'},
      // USB connector
      {type:'rect',x:-42,y:-8,width:10,height:16,rx:2,fill:'#555',stroke:'#333',strokeWidth:1},
      {type:'rect',x:-38,y:-6,width:6,height:12,rx:1,fill:'#888',stroke:'none'},
      // reset button
      {type:'circle',cx:20,cy:-22,r:5,fill:'#e53935',stroke:'#b71c1c',strokeWidth:1},
      // power LED
      {type:'circle',cx:32,cy:-22,r:3,fill:'#4caf50',stroke:'none'},
      // crystal
      {type:'rect',x:-8,y:8,width:16,height:8,rx:2,fill:'#c0c0c0',stroke:'#999',strokeWidth:1},
      // chip
      {type:'rect',x:-16,y:2,width:32,height:22,rx:3,fill:'#212121',stroke:'#555',strokeWidth:1},
      {type:'text',x:0,y:16,text:'ATmega328',fontSize:4.5,fill:'#90a4ae'},
      // pin headers (top)
      {type:'rect',x:-40,y:-34,width:80,height:6,rx:2,fill:'#212121',stroke:'#555',strokeWidth:0.5},
      {type:'rect',x:-40,y:28,width:80,height:6,rx:2,fill:'#212121',stroke:'#555',strokeWidth:0.5},
    ]},

  { id:'e_arduino_nano', name:'Arduino Nano', category:'Electronics',
    viewBox:'-24 -36 48 72', ports:[{x:-24,y:-24},{x:-24,y:0},{x:-24,y:24},{x:24,y:-24},{x:24,y:0},{x:24,y:24}],
    symbol:[
      {type:'rect',x:-22,y:-34,width:44,height:68,rx:4,fill:'#006f9e',stroke:'#004b6e',strokeWidth:1.5},
      {type:'text',x:0,y:-24,text:'NANO',fontSize:6.5,fill:'#fff',fontWeight:'bold'},
      // USB micro
      {type:'rect',x:-8,y:-34,width:16,height:8,rx:2,fill:'#555',stroke:'#333',strokeWidth:1},
      // chip
      {type:'rect',x:-14,y:-10,width:28,height:20,rx:2,fill:'#212121',stroke:'#555',strokeWidth:1},
      {type:'text',x:0,y:2,text:'328P',fontSize:5,fill:'#90a4ae'},
      // pin rows
      {type:'rect',x:-22,y:-34,width:5,height:68,rx:2,fill:'#263238',stroke:'#555',strokeWidth:0.5},
      {type:'rect',x:17,y:-34,width:5,height:68,rx:2,fill:'#263238',stroke:'#555',strokeWidth:0.5},
    ]},

  { id:'e_esp32', name:'ESP32 DevKit', category:'Electronics',
    viewBox:'-28 -44 56 88', ports:[{x:-28,y:-32},{x:-28,y:0},{x:-28,y:32},{x:28,y:-32},{x:28,y:0},{x:28,y:32}],
    symbol:[
      {type:'rect',x:-26,y:-42,width:52,height:84,rx:5,fill:'#212121',stroke:'#555',strokeWidth:1.5},
      // antenna area
      {type:'rect',x:-10,y:-42,width:20,height:12,rx:2,fill:'#c0c0c0',stroke:'#888',strokeWidth:1},
      {type:'text',x:0,y:-34,text:'WiFi',fontSize:4,fill:'#333'},
      // module
      {type:'rect',x:-18,y:-26,width:36,height:28,rx:3,fill:'#455a64',stroke:'#37474f',strokeWidth:1},
      {type:'text',x:0,y:-16,text:'ESP32',fontSize:7,fill:'#80cbc4',fontWeight:'bold'},
      {type:'text',x:0,y:-6,text:'DevKit',fontSize:5,fill:'#90a4ae'},
      // USB
      {type:'rect',x:-8,y:30,width:16,height:10,rx:2,fill:'#555',stroke:'#333',strokeWidth:1},
      // pin rows
      {type:'rect',x:-26,y:-42,width:5,height:84,rx:2,fill:'#1a237e',stroke:'#555',strokeWidth:0.5},
      {type:'rect',x:21,y:-42,width:5,height:84,rx:2,fill:'#1a237e',stroke:'#555',strokeWidth:0.5},
    ]},

  { id:'e_esp8266', name:'ESP8266 (NodeMCU)', category:'Electronics',
    viewBox:'-24 -40 48 80', ports:[{x:-24,y:-28},{x:-24,y:0},{x:-24,y:28},{x:24,y:-28},{x:24,y:0},{x:24,y:28}],
    symbol:[
      {type:'rect',x:-22,y:-38,width:44,height:76,rx:4,fill:'#212121',stroke:'#555',strokeWidth:1.5},
      {type:'rect',x:-8,y:-38,width:16,height:10,rx:2,fill:'#c0c0c0',stroke:'#888',strokeWidth:1},
      {type:'rect',x:-16,y:-24,width:32,height:22,rx:3,fill:'#263238',stroke:'#37474f',strokeWidth:1},
      {type:'text',x:0,y:-14,text:'ESP',fontSize:8,fill:'#4fc3f7',fontWeight:'bold'},
      {type:'text',x:0,y:-5,text:'8266',fontSize:6,fill:'#90a4ae'},
      {type:'rect',x:-8,y:26,width:16,height:10,rx:2,fill:'#555',stroke:'#333',strokeWidth:1},
      {type:'rect',x:-22,y:-38,width:5,height:76,rx:2,fill:'#1a237e',stroke:'#555',strokeWidth:0.5},
      {type:'rect',x:17,y:-38,width:5,height:76,rx:2,fill:'#1a237e',stroke:'#555',strokeWidth:0.5},
    ]},

  // ── Sensors (Arduino modules) ─────────────────────────
  { id:'e_hcsr04', name:'Sensor Ultrasonik HC-SR04', category:'Electronics',
    viewBox:'-36 -20 72 40', ports:[{x:-36,y:-14},{x:-36,y:-5},{x:-36,y:5},{x:-36,y:14}],
    symbol:[
      {type:'rect',x:-34,y:-18,width:68,height:36,rx:4,fill:'#1565c0',stroke:'#0d47a1',strokeWidth:1.5},
      {type:'circle',cx:8,cy:0,r:12,fill:'#c0c0c0',stroke:'#888',strokeWidth:1.5},
      {type:'circle',cx:8,cy:0,r:7,fill:'#888',stroke:'#555',strokeWidth:1},
      {type:'circle',cx:-14,cy:0,r:12,fill:'#c0c0c0',stroke:'#888',strokeWidth:1.5},
      {type:'circle',cx:-14,cy:0,r:7,fill:'#888',stroke:'#555',strokeWidth:1},
      {type:'text',x:-34,y:14,text:'HC-SR04',fontSize:4.5,fill:'#fff'},
    ]},

  { id:'e_dht11', name:'Sensor Suhu & Kelembaban DHT11', category:'Electronics',
    viewBox:'-16 -24 32 40', ports:[{x:-16,y:8},{x:-8,y:16},{x:8,y:16}],
    symbol:[
      {type:'rect',x:-14,y:-22,width:28,height:32,rx:4,fill:'#1565c0',stroke:'#0d47a1',strokeWidth:1.5},
      {type:'rect',x:-14,y:-22,width:28,height:10,rx:4,fill:'#0d47a1',stroke:'none'},
      {type:'text',x:0,y:-16,text:'DHT11',fontSize:5,fill:'#fff',fontWeight:'bold'},
      {type:'path',d:'M-8,2 Q-4,-4 0,2 Q4,8 8,2',fill:'none',stroke:'#90caf9',strokeWidth:1.5},
      {type:'text',x:0,y:8,text:'T/H',fontSize:5,fill:'#90caf9'},
      {type:'line',x1:-8,y1:10,x2:-8,y2:16,stroke:'#aaa',strokeWidth:1.5},
      {type:'line',x1:0,y1:10,x2:0,y2:16,stroke:'#aaa',strokeWidth:1.5},
      {type:'line',x1:8,y1:10,x2:8,y2:16,stroke:'#aaa',strokeWidth:1.5},
    ]},

  { id:'e_ldr', name:'LDR (Fotoresistor)', category:'Electronics',
    viewBox:'-16 -16 32 28', ports:[{x:-12,y:12},{x:12,y:12}],
    symbol:[
      {type:'circle',cx:0,cy:-2,rx:12,ry:12,fill:'#e8d5a3',stroke:'#a07840',strokeWidth:1.5},
      {type:'path',d:'M-8,-2 L-4,4 L0,-4 L4,4 L8,-2',fill:'none',stroke:'#a07840',strokeWidth:2,strokeLinejoin:'round'},
      {type:'line',x1:-10,y1:-10,x2:-6,y2:-14,stroke:'#ffd740',strokeWidth:1.5},
      {type:'line',x1:0,y1:-12,x2:0,y2:-16,stroke:'#ffd740',strokeWidth:1.5},
      {type:'line',x1:10,y1:-10,x2:14,y2:-14,stroke:'#ffd740',strokeWidth:1.5},
      {type:'line',x1:-12,y1:10,x2:-12,y2:12,stroke:'#aaa',strokeWidth:1.5},
      {type:'line',x1:12,y1:10,x2:12,y2:12,stroke:'#aaa',strokeWidth:1.5},
    ]},

  { id:'e_pir', name:'Sensor PIR (Gerak)', category:'Electronics',
    viewBox:'-20 -24 40 40', ports:[{x:-20,y:8},{x:0,y:8},{x:20,y:8}],
    symbol:[
      {type:'ellipse',cx:0,cy:-8,rx:18,ry:18,fill:'#f5f5f5',stroke:'#9e9e9e',strokeWidth:1.5},
      {type:'ellipse',cx:0,cy:-8,rx:12,ry:12,fill:'#fff9c4',stroke:'#f9a825',strokeWidth:1},
      {type:'ellipse',cx:0,cy:-8,rx:5,ry:5,fill:'#f9a825',stroke:'none'},
      {type:'text',x:0,y:0,text:'PIR',fontSize:5,fill:'#e65100'},
      {type:'line',x1:-20,y1:8,x2:-20,y2:8,stroke:'#aaa',strokeWidth:1.5},
    ]},

  { id:'e_buzzer', name:'Buzzer', category:'Electronics',
    viewBox:'-14 -20 28 32', ports:[{x:-8,y:12},{x:8,y:12}],
    symbol:[
      {type:'circle',cx:0,cy:-4,r:12,fill:'#212121',stroke:'#555',strokeWidth:1.5},
      {type:'circle',cx:0,cy:-4,r:7,fill:'#555',stroke:'#333',strokeWidth:1},
      {type:'circle',cx:0,cy:-4,r:3,fill:'#888',stroke:'none'},
      {type:'text',x:0,y:-2,text:'♪',fontSize:6,fill:'#aaa'},
      {type:'line',x1:-8,y1:8,x2:-8,y2:12,stroke:'#aaa',strokeWidth:2},
      {type:'line',x1:8,y1:8,x2:8,y2:12,stroke:'#aaa',strokeWidth:2},
      {type:'line',x1:-8,y1:8,x2:-8,y2:6,stroke:'#aaa',strokeWidth:2},
    ]},

  { id:'e_lcd16x2', name:'LCD 16x2', category:'Electronics',
    viewBox:'-44 -22 88 44', ports:[{x:-44,y:-14},{x:-44,y:0},{x:-44,y:14}],
    symbol:[
      {type:'rect',x:-42,y:-20,width:84,height:40,rx:4,fill:'#2e7d32',stroke:'#1b5e20',strokeWidth:1.5},
      {type:'rect',x:-34,y:-12,width:68,height:24,rx:2,fill:'#64b5f6',stroke:'#1565c0',strokeWidth:1},
      {type:'text',x:0,y:-4,text:'LCD 16x2',fontSize:5.5,fill:'#212121',fontWeight:'bold'},
      {type:'text',x:0,y:6,text:'Hello World!',fontSize:5,fill:'#0d47a1'},
    ]},

  { id:'e_oled', name:'OLED Display 0.96"', category:'Electronics',
    viewBox:'-28 -22 56 44', ports:[{x:-28,y:-12},{x:-28,y:-4},{x:-28,y:4},{x:-28,y:12}],
    symbol:[
      {type:'rect',x:-26,y:-20,width:52,height:40,rx:4,fill:'#212121',stroke:'#555',strokeWidth:1.5},
      {type:'rect',x:-18,y:-12,width:36,height:24,rx:2,fill:'#000',stroke:'#444',strokeWidth:1},
      {type:'text',x:0,y:-4,text:'OLED',fontSize:6,fill:'#4fc3f7',fontWeight:'bold'},
      {type:'text',x:0,y:5,text:'0.96"',fontSize:5,fill:'#4fc3f7'},
    ]},

  { id:'e_servo', name:'Servo Motor', category:'Electronics',
    viewBox:'-24 -20 48 40', ports:[{x:-24,y:-12},{x:-24,y:0},{x:-24,y:12}],
    symbol:[
      {type:'rect',x:-22,y:-18,width:44,height:36,rx:4,fill:'#ff8f00',stroke:'#e65100',strokeWidth:1.5},
      {type:'circle',cx:8,cy:0,r:12,fill:'#f57f17',stroke:'#e65100',strokeWidth:1},
      {type:'circle',cx:8,cy:0,r:5,fill:'#fff',stroke:'#aaa',strokeWidth:1},
      {type:'rect',x:8,y:-12,width:8,height:4,rx:2,fill:'#fff',stroke:'#aaa',strokeWidth:1},
      {type:'text',x:-6,y:2,text:'SRV',fontSize:6,fill:'#fff',fontWeight:'bold'},
    ]},

  { id:'e_joystick', name:'Joystick Module', category:'Electronics',
    viewBox:'-20 -24 40 44', ports:[{x:-20,y:-16},{x:-20,y:-8},{x:-20,y:0},{x:-20,y:8},{x:-20,y:16}],
    symbol:[
      {type:'rect',x:-18,y:-22,width:36,height:40,rx:4,fill:'#263238',stroke:'#37474f',strokeWidth:1.5},
      {type:'circle',cx:4,cy:-2,r:12,fill:'#37474f',stroke:'#263238',strokeWidth:1},
      {type:'circle',cx:4,cy:-2,r:6,fill:'#546e7a',stroke:'#455a64',strokeWidth:1},
      {type:'circle',cx:4,cy:-2,r:3,fill:'#78909c',stroke:'none'},
    ]},

  { id:'e_breadboard', name:'Breadboard', category:'Electronics',
    viewBox:'-48 -32 96 64', ports:[{x:-48,y:-20},{x:-48,y:20},{x:48,y:-20},{x:48,y:20}],
    symbol:[
      {type:'rect',x:-46,y:-30,width:92,height:60,rx:4,fill:'#f5f5f5',stroke:'#bdbdbd',strokeWidth:1.5},
      // center gap
      {type:'rect',x:-46,y:-4,width:92,height:8,rx:0,fill:'#e0e0e0',stroke:'none'},
      // power rails top
      {type:'rect',x:-40,y:-28,width:80,height:8,rx:2,fill:'#fff',stroke:'#e0e0e0',strokeWidth:0.5},
      {type:'rect',x:-40,y:20,width:80,height:8,rx:2,fill:'#fff',stroke:'#e0e0e0',strokeWidth:0.5},
      // hole rows (dots)
      {type:'text',x:0,y:-18,text:'• • • • • • • • • • • • • • • • • • • • • • •',fontSize:3,fill:'#9e9e9e'},
      {type:'text',x:0,y:-12,text:'• • • • • • • • • • • • • • • • • • • • • • •',fontSize:3,fill:'#9e9e9e'},
      {type:'text',x:0,y:4,text:'• • • • • • • • • • • • • • • • • • • • • • •',fontSize:3,fill:'#9e9e9e'},
      {type:'text',x:0,y:10,text:'• • • • • • • • • • • • • • • • • • • • • • •',fontSize:3,fill:'#9e9e9e'},
      {type:'text',x:0,y:24,text:'+ + + + + + + + + + + + + + + + + + + + + +',fontSize:3,fill:'#e53935'},
      {type:'text',x:0,y:-24,text:'+ + + + + + + + + + + + + + + + + + + + + +',fontSize:3,fill:'#e53935'},
    ]},

  { id:'e_dcmotor', name:'Motor DC', category:'Electronics',
    viewBox:'-28 -20 56 40', ports:[{x:-28,y:-10},{x:-28,y:10}],
    symbol:[
      {type:'rect',x:-26,y:-18,width:52,height:36,rx:18,fill:'#c0392b',stroke:'#922b21',strokeWidth:2},
      {type:'rect',x:14,y:-10,width:12,height:6,rx:1,fill:'#888',stroke:'#555',strokeWidth:1},
      {type:'rect',x:14,y:4,width:12,height:6,rx:1,fill:'#888',stroke:'#555',strokeWidth:1},
      {type:'text',x:-4,y:2,text:'M',fontSize:12,fill:'#fff',fontWeight:'bold'},
      {type:'text',x:-4,y:10,text:'DC',fontSize:5,fill:'#ff8a80'},
      {type:'line',x1:-28,y1:-10,x2:-26,y2:-10,stroke:'#e53935',strokeWidth:2},
      {type:'line',x1:-28,y1:10,x2:-26,y2:10,stroke:'#212121',strokeWidth:2},
    ]},

  { id:'e_battery_9v', name:'Baterai 9V', category:'Electronics',
    viewBox:'-16 -28 32 52', ports:[{x:0,y:-28},{x:0,y:24}],
    symbol:[
      {type:'rect',x:-14,y:-24,width:28,height:40,rx:4,fill:'#212121',stroke:'#555',strokeWidth:1.5},
      {type:'rect',x:-8,y:-28,width:7,height:6,rx:2,fill:'#888',stroke:'#555',strokeWidth:1},
      {type:'rect',x:1,y:-30,width:7,height:8,rx:2,fill:'#888',stroke:'#555',strokeWidth:1},
      {type:'rect',x:-10,y:-18,width:20,height:10,rx:2,fill:'#1565c0',stroke:'none'},
      {type:'text',x:0,y:-12,text:'9V',fontSize:6,fill:'#fff',fontWeight:'bold'},
      {type:'text',x:0,y:4,text:'6F22',fontSize:4,fill:'#aaa'},
      {type:'line',x1:0,y1:16,x2:0,y2:24,stroke:'#aaa',strokeWidth:1.5},
    ]},

  { id:'e_power_supply', name:'Power Supply / Adaptor', category:'Electronics',
    viewBox:'-28 -20 56 40', ports:[{x:28,y:-10},{x:28,y:10}],
    symbol:[
      {type:'rect',x:-26,y:-18,width:52,height:36,rx:4,fill:'#37474f',stroke:'#263238',strokeWidth:1.5},
      {type:'rect',x:-24,y:-16,width:32,height:32,rx:3,fill:'#455a64',stroke:'#263238',strokeWidth:1},
      {type:'text',x:-8,y:0,text:'PSU',fontSize:7,fill:'#80cbc4',fontWeight:'bold'},
      {type:'text',x:-8,y:9,text:'DC',fontSize:5,fill:'#80cbc4'},
      {type:'circle',cx:20,cy:0,r:6,fill:'#212121',stroke:'#555',strokeWidth:1},
      {type:'line',x1:26,y1:-10,x2:28,y2:-10,stroke:'#e53935',strokeWidth:2},
      {type:'line',x1:26,y1:10,x2:28,y2:10,stroke:'#212121',strokeWidth:2},
    ]},

];

export const CATEGORIES = ['Schneider','ABB','Siemens','Legrand','Generic','Rumah Tangga','Kontrol','Sensor','Motor & Drive','Proteksi','Daya','Aktuator','HVAC & Utilitas','Instrumen','Bangunan','Proses Industri','Electronics'];
