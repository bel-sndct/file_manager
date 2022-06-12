import fs from 'fs';
import path from 'path';

export const renameFile = (pathToFile, newFilename) => {
    let pathToRenameFile;

    if (!path.isAbsolute(pathToFile)) {
        pathToRenameFile = path.join(process.cwd(), pathToFile);
    }
    else pathToRenameFile = pathToFile;

    if (fs.existsSync(pathToRenameFile)) {
        try {
            fs.renameSync(pathToRenameFile, path.join(process.cwd(), newFilename));
        }
        catch(err) {
            console.log('Operation failed!');
        }
    }
    else console.log('Operation failed!');
}