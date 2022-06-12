import crypto from 'crypto';
import fs from 'fs';
import path from 'path';

const runCalculate = (data) => {
    console.log(`HASH: ${crypto.createHash('sha256').update(data).digest('hex')}`);
}

export const calculateHash = (pathToFile) => {
    let newPathToFile;
    if (!path.isAbsolute(pathToFile)) {
        newPathToFile = path.join(process.cwd(), pathToFile);
    }
    else newPathToFile = pathToFile;

    if (fs.existsSync(newPathToFile)) {
        const readStream = fs.createReadStream(newPathToFile);
        readStream.on('data', chunk => {
            runCalculate(chunk);
        });
    }
    else console.log('> Invalid input!');
}