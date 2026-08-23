import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const PUBLIC_DIR = path.resolve('public');

async function processFile(filePath) {
  const filename = path.basename(filePath);
  const ext = path.extname(filename).toLowerCase();
  const stat = fs.statSync(filePath);
  const sizeMB = (stat.size / (1024 * 1024)).toFixed(2);

  // Skip files smaller than 100KB unless it's slpash.gif
  if (stat.size < 100 * 1024 && filename !== 'slpash.gif') {
    return;
  }

  const tmpPath = filePath + '.tmp';

  try {
    if (ext === '.png') {
      const meta = await sharp(filePath).metadata();
      let pipeline = sharp(filePath);

      // Max width 1600px for large screenshots/sketches
      if (meta.width > 1600) {
        pipeline = pipeline.resize({ width: 1600, fit: 'inside', withoutEnlargement: true });
      }

      await pipeline
        .png({ quality: 80, compressionLevel: 9, palette: true })
        .toFile(tmpPath);

    } else if (ext === '.jpg' || ext === '.jpeg') {
      const meta = await sharp(filePath).metadata();
      let pipeline = sharp(filePath);

      if (meta.width > 1600) {
        pipeline = pipeline.resize({ width: 1600, fit: 'inside', withoutEnlargement: true });
      }

      await pipeline
        .jpeg({ quality: 80, mozjpeg: true })
        .toFile(tmpPath);

    } else if (ext === '.gif') {
      const meta = await sharp(filePath, { animated: true }).metadata();
      let targetWidth = meta.width;

      if (filename === 'slpash.gif') {
        targetWidth = 400; // Polaroid gif display size is ~130px
      } else if (meta.width > 600) {
        targetWidth = 600;
      }

      let pipeline = sharp(filePath, { animated: true });
      if (targetWidth < meta.width) {
        pipeline = pipeline.resize({ width: targetWidth, fit: 'inside', withoutEnlargement: true });
      }

      await pipeline
        .gif({ colours: 128, effort: 7 })
        .toFile(tmpPath);
    } else {
      return;
    }

    const newStat = fs.statSync(tmpPath);
    if (newStat.size < stat.size) {
      try {
        fs.renameSync(tmpPath, filePath);
      } catch (e) {
        fs.copyFileSync(tmpPath, filePath);
        fs.unlinkSync(tmpPath);
      }
      const newSizeMB = (newStat.size / (1024 * 1024)).toFixed(2);
      console.log(`[OPTIMIZED] ${filename}: ${sizeMB} MB -> ${newSizeMB} MB (${Math.round((1 - newStat.size / stat.size) * 100)}% saved)`);
    } else {
      fs.unlinkSync(tmpPath);
      console.log(`[SKIPPED] ${filename}: Original was already optimal (${sizeMB} MB)`);
    }
  } catch (err) {
    if (fs.existsSync(tmpPath)) {
      try { fs.unlinkSync(tmpPath); } catch (e) {}
    }
    console.error(`[ERROR] ${filename}:`, err.message);
  }
}

async function run() {
  console.log('Starting asset optimization in /public ...');
  const files = fs.readdirSync(PUBLIC_DIR);
  for (const file of files) {
    const fullPath = path.join(PUBLIC_DIR, file);
    if (fs.statSync(fullPath).isFile()) {
      await processFile(fullPath);
    }
  }
  console.log('Asset optimization completed!');
}

run();
