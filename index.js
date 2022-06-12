import { validators, validateInput } from './src/validate/validation.js';
import readline from 'readline';
import { goUpperFromCurrentDir } from './src/nwd/up.js';
import { goToFolder } from "./src/nwd/cd.js";
import { listFiles } from "./src/nwd/ls.js";
import { readAndPrintFile } from "./src/fs/cat.js";
import { createNewFile } from './src/fs/add.js';
import { renameFile } from './src/fs/rename.js';
import { copyFile } from './src/fs/copy.js';
import { moveFile } from './src/fs/move.js';
import { removeFile } from './src/fs/remove.js';
import { osCommandController } from './src/osi/commController.js';
import { calculateHash } from './src/hash/hashCalculator.js';
import { compressFile } from './src/zip/compress.js';
import { decompressFile } from './src/zip/decompress.js';
import { initManager } from './src/initManager/init.js';

const commands = ['up', 'cd', 'ls', 'cat', 'add', 'rn', 'cp', 'mv', 'rm', 'os', 'hash', 'compress', 'decompress', '.exit'];

const globalFunctions = [
    { index: 0, fun: goUpperFromCurrentDir },
    { index: 1, fun: goToFolder },
    { index: 2, fun: listFiles },
    { index: 3, fun: readAndPrintFile },
    { index: 4, fun: createNewFile },
    { index: 5, fun: renameFile },
    { index: 6, fun: copyFile },
    { index: 7, fun: moveFile },
    { index: 8, fun: removeFile },
    { index: 9, fun: osCommandController },
    { index: 10, fun: calculateHash },
    { index: 11, fun: compressFile },
    { index: 12, fun: decompressFile }
];

const checkArgv = (args) => {
    const checkResults = validateInput(args, validators).map(element => element.message);
    if (checkResults.length === 0) fileManager(args.join('').slice(args.join('').indexOf('=') + 1));
    else checkResults.forEach(element => console.log(element));
}

const fileManager = (user) => {
    const [ endMessage, currentDirMsg ] = initManager(user);

    const readUserCommand = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    readUserCommand.on('line', data => {
        if (data === '.exit') readUserCommand.close();
        let indexOfOperation = commands.indexOf(data.split(' ')[0]);

        if (indexOfOperation === -1) console.log('Invalid input!');
        else if (data !== '.exit') {
            let args_num = data.split(' ').length;
            globalFunctions.forEach(elem => {
                if (elem.index === indexOfOperation && args_num === 1) elem.fun();
                else if (elem.index === indexOfOperation && args_num === 2) elem.fun(data.split(' ')[1]);
                else if (elem.index === indexOfOperation && args_num === 3) elem.fun(data.split(' ')[1], data.split(' ')[2]);
            });
        }
        if (data !== '.exit') console.log(currentDirMsg + process.cwd());
    }).on('close', () => {
        console.log(endMessage);
    });
}

checkArgv(process.argv.slice(2));