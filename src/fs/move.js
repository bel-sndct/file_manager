import fs from 'fs';
import path from 'path';

export const moveFile = (sourceFilePath, destinationDirPath) => {
    const pathToMoveFile = checkPath(sourceFilePath);
    let pathToNewDir = checkPath(destinationDirPath);

    if (fs.existsSync(pathToMoveFile) && fs.existsSync(pathToNewDir)) {
        if (fs.lstatSync(pathToNewDir).isDirectory()) {
            pathToNewDir += path.sep + pathToMoveFile.split(`${path.sep}`).slice(-1);
        }
        try {
            fs.copyFileSync(pathToMoveFile, pathToNewDir);
        }
        catch(err) {
            console.log('Operation failed!');
        }
        try {
            fs.rmSync(pathToMoveFile);
        }
        catch(err) {
            console.log('Operation failed!');
        }
    }
    else console.log('Operation failed!');
}

const checkPath = (src) => {
    if (!path.isAbsolute(src)) {
        return path.join(process.cwd(), src);
    }
    else return src;
}