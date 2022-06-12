const hasValidSize = (source) => source.length === 1;
const hasCorrectUsrCommand = (source) => source.join('').includes('--username=');
const hasNotEmptyUsername = (source) => source.join('').indexOf('=') !== source.join('').length - 1;

export const validators = [
    { check: hasValidSize, message: "ERROR: Not enough arguments!" },
    { check: hasCorrectUsrCommand, message: "ERROR: Incorrect command!" },
    { check: hasNotEmptyUsername, message: "ERROR: Var --username must be filled!" }
];

export const validateInput = (source, validators) => validators.filter(validator => !validator.check(source));