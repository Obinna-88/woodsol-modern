import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dir = path.resolve(__dirname, '..', 'public');

function getPngSize(buffer) {
  // PNG: IHDR chunk at offset 8, width at offset 16 (4 bytes BE)
  try {
    const width = buffer.readUInt32BE(16);
    const height = buffer.readUInt32BE(20);
    return { width, height };
  } catch { return null; }
}

function getJpegSize(buffer) {
  // Very small JPEG header parser
  let i = 0;
  if (buffer[0] !== 0xff || buffer[1] !== 0xd8) return null;
  i = 2;
  while (i < buffer.length) {
    if (buffer[i] !== 0xff) { i++; continue; }
    const marker = buffer[i+1];
    const len = buffer.readUInt16BE(i+2);
    // SOF0 (0xC0), SOF2 (0xC2)
    if (marker === 0xc0 || marker === 0xc2) {
      const height = buffer.readUInt16BE(i+5);
      const width = buffer.readUInt16BE(i+7);
      return { width, height };
    } else {
      i += 2 + len;
    }
  }
  return null;
}

function getGifSize(buffer) {
  try {
    const width = buffer.readUInt16LE(6);
    const height = buffer.readUInt16LE(8);
    return { width, height };
  } catch { return null; }
}

fs.readdir(dir, (err, files) => {
  if (err) return console.error('ERR_REaddir', err.message);
  files.filter(f => /\.(jpg|jpeg|png|gif)$/i.test(f)).forEach(f => {
    const p = path.join(dir, f);
    try {
      const buffer = fs.readFileSync(p);
      let size = null;
      if (/\.png$/i.test(f)) size = getPngSize(buffer);
      else if (/\.(jpg|jpeg)$/i.test(f)) size = getJpegSize(buffer);
      else if (/\.gif$/i.test(f)) size = getGifSize(buffer);
      const stat = fs.statSync(p);
      if (size) console.log(`${f}\t${size.width}\t${size.height}\t${stat.size}`);
      else console.log(`UNKNOWN\t${f}\t${stat.size}`);
    } catch (e) {
      console.log(`ERR\t${f}\t${e.message}`);
    }
  });
});
