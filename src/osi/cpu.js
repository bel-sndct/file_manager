import os from 'os';

export const getCpuInfo = () => {
    for (let key in os.cpus()) {
       console.log(`Logical core #${key} - ${os.cpus()[key].model}`);
    }
}