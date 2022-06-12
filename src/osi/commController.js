import { getEolSymbol } from './eol.js';
import { getCpuInfo } from './cpu.js';
import { getHomeDir } from './homedir.js';
import { getCurrentUsername } from './usrName.js';
import { getArchitectureInfo } from './arch.js';

const commandIndexes = ['--EOL', '--cpus', '--homedir', '--username', '--architecture'];

const osiFunctions = [
    { index: 0, fun: getEolSymbol },
    { index: 1, fun: getCpuInfo },
    { index: 2, fun: getHomeDir },
    { index: 3, fun: getCurrentUsername },
    { index: 4, fun: getArchitectureInfo }
];

export const osCommandController = (command) => {
    const indexOfOperation = commandIndexes.indexOf(command);
    if (indexOfOperation === -1) {
        console.log('> Invalid input!');
        return;
    }

    osiFunctions.forEach(elem => {
        if (elem.index === indexOfOperation) elem.fun();
    });
}