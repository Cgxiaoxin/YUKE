const fs = require('fs');
const { PNG } = require('pngjs');

function createPlaceholder(width, height, path) {
    const png = new PNG({ width, height });

    for (let y = 0; y < png.height; y++) {
        for (let x = 0; x < png.width; x++) {
            const idx = (png.width * y + x) << 2;
            png.data[idx] = 200; // red
            png.data[idx + 1] = 200; // green
            png.data[idx + 2] = 200; // blue
            png.data[idx + 3] = 255; // alpha
        }
    }

    png.pack().pipe(fs.createWriteStream(path));
}

// Get path from command line arguments
const args = process.argv.slice(2);
const outputPath = args[0] || 'images/placeholder.png';
const width = parseInt(args[1]) || 100;
const height = parseInt(args[2]) || 100;

createPlaceholder(width, height, outputPath);
