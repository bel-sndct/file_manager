import fs from 'fs';
import path from 'path';

export const copyFile = (sourceFilePath, destinationDirPath) => {
    const pathToCopyFile = checkPath(sourceFilePath);
    let pathToNewDir = checkPath(destinationDirPath);

    if (fs.existsSync(pathToCopyFile)) {
        if (fs.lstatSync(pathToNewDir).isDirectory()) {
            pathToNewDir += path.sep + pathToCopyFile.split(`${path.sep}`).slice(-1);
        }
        try {
            fs.copyFileSync(pathToCopyFile, pathToNewDir);
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