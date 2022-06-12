import fs from 'fs';
import path from 'path';

export const createNewFile = (newFileName) => {
    const pathForNewFile = path.join(process.cwd(), newFileName);

    if (!fs.existsSync(pathForNewFile) && pathForNewFile.includes('.') && pathForNewFile.indexOf('.') !== pathForNewFile.length - 1) {
        try {
            fs.openSync(pathForNewFile, 'w');
        }
        catch (err) {
            console.log('Operation failed!');
        }
    }
    else console.log('Operation failed!');
}