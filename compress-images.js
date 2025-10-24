/**
 * Image Compression Script for Prissy Salon
 * 
 * This script will compress all your JPG images to optimize website loading speed
 */

const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const sourceDir = path.join(__dirname, 'public', 'img');
const targetWidth = 1200; // Max width for images
const quality = 80; // JPEG quality (0-100)

async function compressImage(filePath) {
  try {
    const fileName = path.basename(filePath);
    const dir = path.dirname(filePath);
    const tempPath = path.join(dir, `temp_${fileName}`);
    
    console.log(`Compressing: ${fileName}...`);
    
    await sharp(filePath)
      .resize(targetWidth, null, {
        fit: 'inside',
        withoutEnlargement: true
      })
      .jpeg({ quality, mozjpeg: true })
      .toFile(tempPath);
    
    // Get file sizes
    const originalSize = fs.statSync(filePath).size;
    const compressedSize = fs.statSync(tempPath).size;
    const savings = ((originalSize - compressedSize) / originalSize * 100).toFixed(1);
    
    // Replace original with compressed
    fs.unlinkSync(filePath);
    fs.renameSync(tempPath, filePath);
    
    console.log(`✅ ${fileName}: ${(originalSize/1024).toFixed(0)}KB → ${(compressedSize/1024).toFixed(0)}KB (${savings}% smaller)`);
    
    return { originalSize, compressedSize };
  } catch (error) {
    console.error(`❌ Error compressing ${filePath}:`, error.message);
    return null;
  }
}

async function compressAllImages(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  let totalOriginal = 0;
  let totalCompressed = 0;
  let count = 0;
  
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    
    if (entry.isDirectory()) {
      const result = await compressAllImages(fullPath);
      totalOriginal += result.totalOriginal;
      totalCompressed += result.totalCompressed;
      count += result.count;
    } else if (entry.name.toLowerCase().endsWith('.jpg') || entry.name.toLowerCase().endsWith('.jpeg')) {
      const result = await compressImage(fullPath);
      if (result) {
        totalOriginal += result.originalSize;
        totalCompressed += result.compressedSize;
        count++;
      }
    }
  }
  
  return { totalOriginal, totalCompressed, count };
}

async function main() {
  console.log('🖼️  Starting image compression...\n');
  console.log(`Source: ${sourceDir}`);
  console.log(`Max Width: ${targetWidth}px`);
  console.log(`Quality: ${quality}%\n`);
  
  const startTime = Date.now();
  const result = await compressAllImages(sourceDir);
  const duration = ((Date.now() - startTime) / 1000).toFixed(1);
  
  console.log('\n' + '='.repeat(50));
  console.log('📊 Compression Complete!');
  console.log('='.repeat(50));
  console.log(`✅ Images compressed: ${result.count}`);
  console.log(`📦 Original size: ${(result.totalOriginal / 1024 / 1024).toFixed(2)} MB`);
  console.log(`📦 Compressed size: ${(result.totalCompressed / 1024 / 1024).toFixed(2)} MB`);
  console.log(`💾 Space saved: ${(((result.totalOriginal - result.totalCompressed) / result.totalOriginal) * 100).toFixed(1)}%`);
  console.log(`⏱️  Time taken: ${duration} seconds`);
  console.log('='.repeat(50));
}

// Check if sharp is installed
try {
  require.resolve('sharp');
  main().catch(console.error);
} catch (e) {
  console.log('❌ Sharp package not found!');
  console.log('\n📥 Please install it first:');
  console.log('   npm install sharp --save-dev\n');
  console.log('Then run this script again:');
  console.log('   node compress-images.js\n');
}

