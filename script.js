const pwEL = document.getElementById("pw");
const copyEL = document.getElementById("copy");
const lenEL = document.getElementById("len");
const upperEL = document.getElementById("upper");
const lowerEL = document.getElementById("lower");
const numbersEL = document.getElementById("numbers");
const symbolEL = document.getElementById("symbol");
const generateEL = document.getElementById("generate");

const upperLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowerLetters = 'abcdefghijklmnopqrstuvwxyz';
const numbers = '1234567890';
const symbols = '!@#$%^&*()_+=';

function getUpper () {
    return upperLetters[Math.floor(Math.random() * upperLetters.length)];
}
function getLower () {
    return lowerLetters[Math.floor(Math.random() * lowerLetters.length)];
}
function getNumbers () {
    return numbers[Math.floor(Math.random() * numbers.length)];
}
function getSymbols () {
    return symbols[Math.floor(Math.random() * symbols.length)];
}
