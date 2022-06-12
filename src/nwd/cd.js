import path from 'path';

export const goToFolder = (pathToNewFolder) => {
    if (path.isAbsolute(pathToNewFolder)) {
        try {
            process.chdir(pathToNewFolder);
        }
        catch (err) {
            console.log('> Operation failed!');
        }
    }
    else {
        try {
            process.chdir(path.join(process.cwd(), pathToNewFolder));
        }
        catch (err) {
            console.log('> Operation failed!');
        }
    }
}