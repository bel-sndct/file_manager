import os from 'os';

export const getArchitectureInfo = () => {
    console.log(`CPU architecture: ${os.arch()}`);
}