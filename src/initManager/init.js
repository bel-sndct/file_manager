import path from "path";

export const initManager = (user) => {
    process.chdir(path.join(process.env.HOMEDRIVE, process.env.HOMEPATH));
    console.log(`Welcome to the File Manager, ${user}!`);
    console.log(`You are currently in ${process.cwd()}`);

    return [ `Thank you for using File Manager, ${user}!`, 'You are currently in ' ];
}