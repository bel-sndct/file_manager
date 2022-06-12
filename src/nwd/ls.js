import fs from 'fs';

export const listFiles = () => {
    try {
        fs.readdirSync(process.cwd()).forEach(element => {
           console.log(element);
        });
    }
    catch (err) {
        console.log('> Operation failed!');
    }
}