import fs from 'fs';
import path from 'path';
import zlib from 'zlib';
import { pipeline } from 'stream';

export const compressFile = (sourcePath, destinationPath) => {
    const newSourcePath = checkPath(sourcePath);
    const newDestinationPath = checkPath(destinationPath);

    if (fs.existsSync(newSourcePath) && fs.existsSync(newDestinationPath) && fs.lstatSync(newDestinationPath).isDirectory()) {
        const readStream = fs.createReadStream(newSourcePath);
        const writeStream = fs.createWriteStream(newDestinationPath + path.sep + newSourcePath.split(`${path.sep}`).slice(-1).join() + '.br');
        const brotliStream = zlib.createBrotliCompress();

        pipeline(readStream, brotliStream, writeStream, err => {
            if (err) console.log('> Operation failed!');
            else console.log('> File compressed');
        });
    }
    else console.log('> Operation failed!');
}

const checkPath = (src) => {
    if (!path.isAbsolute(src)) {
        return path.join(process.cwd(), src);
    }
    else return src;
}