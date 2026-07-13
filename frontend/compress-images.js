/**
 * compress-images.js
 * Compresses all images inside public/products (in place, with backup)
 *
 * Usage:
 *   node compress-images.js
 */

const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const TARGET_DIR = path.join(__dirname, "public", "products");
const BACKUP_DIR = path.join(__dirname, "public", "products_originals_backup");
const MAX_WIDTH = 1600; // resize anything wider than this
const WEBP_QUALITY = 75; // 0-100, 75 is a good balance
const PNG_TO_WEBP = true; // convert .png files to .webp too

const IMAGE_EXTENSIONS = [".webp", ".png", ".jpg", ".jpeg"];

function formatBytes(bytes) {
  return (bytes / (1024 * 1024)).toFixed(2) + " MB";
}

async function compressImage(filePath, fileName) {
  const ext = path.extname(fileName).toLowerCase();
  const baseName = path.basename(fileName, ext);

  const originalSize = fs.statSync(filePath).size;

  // Backup original first
  if (!fs.existsSync(BACKUP_DIR)) fs.mkdirSync(BACKUP_DIR, { recursive: true });
  const backupPath = path.join(BACKUP_DIR, fileName);
  if (!fs.existsSync(backupPath)) {
    fs.copyFileSync(filePath, backupPath);
  }

  try {
    const image = sharp(filePath);
    const metadata = await image.metadata();

    let pipeline = image;
    if (metadata.width && metadata.width > MAX_WIDTH) {
      pipeline = pipeline.resize({ width: MAX_WIDTH, withoutEnlargement: true });
    }

    // Decide output path/extension
    let outputPath = filePath;
    if (ext === ".png" && PNG_TO_WEBP) {
      outputPath = path.join(path.dirname(filePath), baseName + ".webp");
    }

    const buffer = await pipeline.webp({ quality: WEBP_QUALITY }).toBuffer();

    // Write to a temp file first, then replace (avoids sharp read/write same-file issues)
    const tempPath = outputPath + ".tmp";
    fs.writeFileSync(tempPath, buffer);

    // If converting png -> webp, remove old png after successful write
    if (outputPath !== filePath) {
      fs.unlinkSync(filePath);
    }
    fs.renameSync(tempPath, outputPath);

    const newSize = fs.statSync(outputPath).size;
    const savings = (((originalSize - newSize) / originalSize) * 100).toFixed(1);

    console.log(
      `✔ ${fileName.padEnd(25)} ${formatBytes(originalSize).padStart(10)} -> ${formatBytes(newSize).padStart(10)}  (-${savings}%)`
    );
  } catch (err) {
    console.error(`✘ Failed on ${fileName}: ${err.message}`);
  }
}

async function main() {
  if (!fs.existsSync(TARGET_DIR)) {
    console.error(`Folder not found: ${TARGET_DIR}`);
    process.exit(1);
  }

  const files = fs.readdirSync(TARGET_DIR).filter((f) => {
    const ext = path.extname(f).toLowerCase();
    return IMAGE_EXTENSIONS.includes(ext);
  });

  console.log(`Found ${files.length} images. Backing up originals to: ${BACKUP_DIR}\n`);

  let totalBefore = 0;
  let totalAfter = 0;

  for (const file of files) {
    const filePath = path.join(TARGET_DIR, file);
    const before = fs.statSync(filePath).size;
    await compressImage(filePath, file);
    totalBefore += before;
  }

  // Recalculate total after (files may have been renamed png->webp)
  const filesAfter = fs.readdirSync(TARGET_DIR).filter((f) => {
    const ext = path.extname(f).toLowerCase();
    return IMAGE_EXTENSIONS.includes(ext);
  });
  for (const file of filesAfter) {
    totalAfter += fs.statSync(path.join(TARGET_DIR, file)).size;
  }

  console.log("\n----------------------------------------");
  console.log(`Total before: ${formatBytes(totalBefore)}`);
  console.log(`Total after:  ${formatBytes(totalAfter)}`);
  console.log(`Saved:        ${formatBytes(totalBefore - totalAfter)}`);
  console.log("----------------------------------------");
  console.log(`\nOriginals backed up at: ${BACKUP_DIR}`);
  console.log("Verify site/build looks correct, then you can delete the backup folder.");
}

main();
