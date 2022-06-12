import fs from 'fs';
import path from 'path';

export const removeFile = (pathToFile) => {
    let pathToRemoveFile

    if (!path.isAbsolute(pathToFile)) {
        pathToRemoveFile = path.join(process.cwd(), pathToFile);
    }
    else pathToRemoveFile = pathToFile;

    try {
        fs.rmSync(pathToRemoveFile);
    }
    catch(err) {
        console.log('Operation failed!');
    }
}