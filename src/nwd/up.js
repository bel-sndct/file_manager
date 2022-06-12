import path from 'path';

export const goUpperFromCurrentDir = () => {
    const newPath = process.cwd().split(`${path.sep}`).slice(0, -1);
    switch (newPath.length) {
        case 0: return;
        case 1: {
            process.chdir(newPath.join() + path.sep);
            break;
        }
        default: {
            process.chdir(newPath.join(`${path.sep}`));
            break;
        }
    }
}