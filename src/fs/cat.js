import fs from 'fs';
import path from 'path';

export const readAndPrintFile = (pathToFile) => {
    let newPathToFile;
    if (!path.isAbsolute(pathToFile)) {
        newPathToFile = path.join(process.cwd(), pathToFile);
    }
    else newPathToFile = pathToFile;

    if (fs.existsSync(newPathToFile)) {
        const readStream = fs.createReadStream(newPathToFile);
        readStream.on('data', chunk => {
            console.log(chunk.toString());
            readStream.destroy();
        });
    }
    else console.log('Operation failed!');
}