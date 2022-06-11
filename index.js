import { validators, validateInput } from './src/validation.js';
import readline from 'readline';

const checkArgv = (args) => {
    const checkResults = validateInput(args, validators).map(element => element.message);
    if (checkResults.length === 0) fileManager(args.join('').slice(args.join('').indexOf('=') + 1));
    else checkResults.forEach(element => console.log(element));
}

const fileManager = (user) => {
    console.log(`Welcome to the File Manager, ${user}!`);
    const readUserCommand = readline.createInterface({
        input: process.stdin
    });

    process.on('SIGINT', () => {
        console.log(`Thank you for using File Manager, ${user}!`);
        process.exitCode = 1;
        process.exit();
    });

    readUserCommand.on('line', data => {
        console.log(data);
        //readUserCommand.close();
    });
}

checkArgv(process.argv.slice(2));