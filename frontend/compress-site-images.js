/**
 * compress-site-images.js
 * Compresses heavy images in public/products and public/setups IN PLACE.
 * - Same file name + same extension (so no code changes needed)
 * - Originals are backed up OUTSIDE public/ in ./image-backups
 *
 * Usage (from the frontend/ folder):  node compress-site-images.js
 */
const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const PUBLIC = path.join(__dirname, "public");
const BACKUP = path.join(__dirname, "image-backups");

// folder -> max width in px
const TARGETS = [
  { dir: "products", maxWidth: 1200 },
  { dir: "setups", maxWidth: 1600 },
];
const MIN_SIZE = 150 * 1024; // only touch files bigger than 150 KB
const kb = (b) => (b / 1024).toFixed(0) + " KB";

async function run() {
  let before = 0, after = 0;
  for (const { dir, maxWidth } of TARGETS) {
    const folder = path.join(PUBLIC, dir);
    if (!fs.existsSync(folder)) continue;
    for (const name of fs.readdirSync(folder)) {
      const file = path.join(folder, name);
      const ext = path.extname(name).toLowerCase();
      if (![".webp", ".jpg", ".jpeg", ".png"].includes(ext)) continue;
      const size = fs.statSync(file).size;
      if (size < MIN_SIZE) continue;

      let img = sharp(file).rotate().resize({ width: maxWidth, withoutEnlargement: true });
      if (ext === ".webp") img = img.webp({ quality: 75 });
      else if (ext === ".png") img = img.png({ palette: true, quality: 80, compressionLevel: 9 });
      else img = img.jpeg({ quality: 78, mozjpeg: true });

      const buf = await img.toBuffer();
      if (buf.length >= size) { console.log(`skip  ${dir}/${name} (already small)`); continue; }

      const bk = path.join(BACKUP, dir, name);
      fs.mkdirSync(path.dirname(bk), { recursive: true });
      if (!fs.existsSync(bk)) fs.copyFileSync(file, bk);
      fs.writeFileSync(file, buf);
      before += size; after += buf.length;
      console.log(`done  ${dir}/${name}: ${kb(size)} -> ${kb(buf.length)}`);
    }
  }
  console.log(`\nTotal: ${kb(before)} -> ${kb(after)}  (saved ${kb(before - after)})`);
}
run();