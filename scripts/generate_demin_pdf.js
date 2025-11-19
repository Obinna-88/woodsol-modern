/* eslint-disable @typescript-eslint/no-require-imports */
// This script is a small Node-only utility; using CommonJS require() is intentional.
const fs = require('fs');
const path = require('path');

// This script creates a simple one-page PDF using PDF objects and the built-in Helvetica font.
// It writes to public/demin-plants-datasheet.pdf

const out = path.join(__dirname, '..', 'public', 'demin-plants-datasheet.pdf');

function makePDF() {
  const lines = [];
  lines.push('%PDF-1.4');

  const objs = [];

  // content stream (use simple text operations)
  const content = [];
  content.push('BT');
  content.push('/F1 18 Tf');
  content.push('50 740 Td');
  content.push('(Demin Water Treatment - Plant Datasheet) Tj');
  content.push('0 -30 Td');
  content.push('/F1 11 Tf');
  content.push('(Company: Woodsol Chemicals) Tj');
  content.push('0 -16 Td');
  content.push('(Vision: To be healthy through caring.) Tj');
  content.push('0 -16 Td');
  content.push('(Contact: +60 3-3371 3360 | info@woodsol.com) Tj');
  content.push('0 -22 Td');
  content.push('(\(Features\): Reverse osmosis pre-treatment, ion exchange demineralisation, mixed-bed polishing, skid-mounted design, PLC controls) Tj');
  content.push('0 -18 Td');
  content.push('(Capacities: 1 m3/hr up to 50 m3/hr; customised larger systems available) Tj');
  content.push('0 -18 Td');
  content.push('(Deliverables: Turnkey supply, installation, commissioning & operator training) Tj');
  content.push('ET');

  const contentStr = content.join('\n');
  const contentBuffer = Buffer.from(contentStr, 'utf8');

  // Objects: 1=Catalog,2=Pages,3=Page,4=Font,5=Contents
  objs.push({ id: 1, str: '<< /Type /Catalog /Pages 2 0 R >>' });
  objs.push({ id: 2, str: '<< /Type /Pages /Kids [3 0 R] /Count 1 >>' });
  objs.push({ id: 3, str: '<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Resources << /Font << /F1 4 0 R >> >> /Contents 5 0 R >>' });
  objs.push({ id: 4, str: '<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>' });
  objs.push({ id: 5, str: `<< /Length ${contentBuffer.length} >>\nstream\n${contentStr}\nendstream` });

  // compose file with offsets
  let offset = Buffer.byteLength(lines.join('\n') + '\n');
  const parts = [Buffer.from(lines.join('\n') + '\n')];

  const xrefPositions = [];
  for (const obj of objs) {
    xrefPositions.push(offset);
    const header = `${obj.id} 0 obj\n`;
    const body = obj.str + '\n';
    const tail = 'endobj\n';
    parts.push(Buffer.from(header + body + tail));
    offset += Buffer.byteLength(header + body + tail);
  }

  const xrefStart = offset;
  let xref = 'xref\n0 ' + (objs.length + 1) + '\n0000000000 65535 f \n';
  for (const pos of xrefPositions) {
    xref += String(pos).padStart(10, '0') + ' 00000 n \n';
  }

  const trailer = `trailer\n<< /Size ${objs.length + 1} /Root 1 0 R >>\nstartxref\n${xrefStart}\n%%EOF\n`;

  parts.push(Buffer.from(xref));
  parts.push(Buffer.from(trailer));

  const outBuf = Buffer.concat(parts);
  fs.writeFileSync(out, outBuf);
  console.log('Wrote', out);
}

makePDF();
