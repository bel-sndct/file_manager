export const getHomeDir = () => {
    console.log(`Home directory: ${process.env.HOMEDRIVE + process.env.HOMEPATH}`);
}