function download(url, filename) {
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  a.click();
}

export function exportSVG() {
  const svg = document.getElementById('diagram-canvas');
  if (!svg) return;
  const clone = svg.cloneNode(true);
  clone.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
  const bg = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
  bg.setAttribute('width', '100%'); bg.setAttribute('height', '100%'); bg.setAttribute('fill', 'white');
  clone.insertBefore(bg, clone.firstChild);
  const blob = new Blob([new XMLSerializer().serializeToString(clone)], { type: 'image/svg+xml' });
  download(URL.createObjectURL(blob), 'circuit-diagram.svg');
}

export function exportPNG() {
  const svg = document.getElementById('diagram-canvas');
  if (!svg) return;
  const { width, height } = svg.getBoundingClientRect();
  const clone = svg.cloneNode(true);
  clone.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
  clone.setAttribute('width', width);
  clone.setAttribute('height', height);
  const bg = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
  bg.setAttribute('width', width); bg.setAttribute('height', height); bg.setAttribute('fill', 'white');
  clone.insertBefore(bg, clone.firstChild);
  const url = URL.createObjectURL(new Blob([new XMLSerializer().serializeToString(clone)], { type: 'image/svg+xml' }));
  const img = new Image();
  img.onload = () => {
    const canvas = document.createElement('canvas');
    canvas.width = width * 2; canvas.height = height * 2;
    const ctx = canvas.getContext('2d');
    ctx.scale(2, 2);
    ctx.drawImage(img, 0, 0);
    URL.revokeObjectURL(url);
    canvas.toBlob(blob => download(URL.createObjectURL(blob), 'circuit-diagram.png'), 'image/png');
  };
  img.src = url;
}

export async function exportPDF() {
  const svg = document.getElementById('diagram-canvas');
  if (!svg) return;
  const { width, height } = svg.getBoundingClientRect();
  const clone = svg.cloneNode(true);
  clone.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
  clone.setAttribute('width', width);
  clone.setAttribute('height', height);
  const bg = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
  bg.setAttribute('width', width); bg.setAttribute('height', height); bg.setAttribute('fill', 'white');
  clone.insertBefore(bg, clone.firstChild);
  const url = URL.createObjectURL(new Blob([new XMLSerializer().serializeToString(clone)], { type: 'image/svg+xml' }));
  const img = new Image();
  await new Promise(res => { img.onload = res; img.src = url; });
  const canvas = document.createElement('canvas');
  canvas.width = width * 2; canvas.height = height * 2;
  const ctx = canvas.getContext('2d');
  ctx.scale(2, 2); ctx.drawImage(img, 0, 0);
  URL.revokeObjectURL(url);
  const dataUrl = canvas.toDataURL('image/jpeg', 0.92);
  const { jsPDF } = await import('jspdf');
  const landscape = width > height;
  const pdf = new jsPDF({ orientation: landscape ? 'landscape' : 'portrait', unit: 'px', format: [width, height] });
  pdf.addImage(dataUrl, 'JPEG', 0, 0, width, height);
  pdf.save('circuit-diagram.pdf');
}

export function saveDiagram(state) {
  const json = JSON.stringify({ version: 2, ...state }, null, 2);
  download(URL.createObjectURL(new Blob([json], { type: 'application/json' })), 'circuit-diagram.json');
}

export function loadDiagram(callback) {
  const input = document.createElement('input');
  input.type = 'file';
  input.accept = '.json';
  input.onchange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
      try {
        const data = JSON.parse(ev.target.result);
        if (data.placed && data.wires) callback({ placed: data.placed, wires: data.wires });
        else alert('File tidak valid — bukan format diagram yang dikenal.');
      } catch {
        alert('Gagal membaca file. Pastikan file adalah JSON yang valid.');
      }
    };
    reader.readAsText(file);
  };
  input.click();
}
