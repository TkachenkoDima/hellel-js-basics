// Create a method to see whether the string is ALL CAPS.
// Examples (input -> output)
// "c" -> False
// "C" -> True
// "hello I AM DONALD" -> False
// "HELLO I AM DONALD" -> True
// "ACSKLDFJSgSKLDFJSKLDF]" -> False
// "ACSKLDFJSGSKLDFJSKLDF]" -> True
// In this Kata, a string is said to be in ALL CAPS whenever it does not contain any lowercase letter so any string containing no letters at all is trivially considered to be in ALL CAPS.

import readline from 'readline';
import chalk from 'chalk';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const askQuestion = () => {
    rl.question('Enter a sequence of letters to check if it is in uppercase: ', (input) => {
        const trimmedInput = input.trim();

        if (containsLowercase(trimmedInput)) {
            console.log('The input is ' + chalk.redBright('NOT') + ' all uppercase');
        } else if (isAllUppercaseOrDigits(trimmedInput)) {
            console.log(chalk.greenBright('The input is uppercase'));
        } else if (containsOnlyDigits(trimmedInput)) {
            console.log(chalk.yellowBright('The input contains only digits'));
        } else if (containsSpecialCharacters(trimmedInput)) {
            console.log(chalk.cyanBright('The input contains special characters'));
        } else {
            console.log('The input is ' + chalk.redBright('NOT') + ' all uppercase');
        }
        rl.close();
    });
};

askQuestion();

function isAllUppercaseOrDigits(input) {
    return /^[A-Z0-9\s]+$/.test(input) && /[A-Z]/.test(input);
}

function containsOnlyDigits(input) {
    return /^\d+$/.test(input);
}

function containsSpecialCharacters(input) {
    return /[^a-zA-Z0-9\s]/.test(input);
}

function containsLowercase(input) {
    return /[a-z]/.test(input);
}
