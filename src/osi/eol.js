import os from 'os';

export const getEolSymbol = () => {
    console.log(JSON.stringify(os.EOL));
}