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
function getNumber () {
    return numbers[Math.floor(Math.random() * numbers.length)];
}
function getSymbol () {
    return symbols[Math.floor(Math.random() * symbols.length)];
}


generateEL.addEventListener('click', generatePassword);

function generatePassword(){
    let len = lenEL.value;
    let password = '';

    for(let i=0; i<len; i++){
        password += getChar();
    }

    pwEL.innerText = password;
    password = '';
}

function getChar (){
    const arr = [];
    if(upperEL.checked)
        arr.push(getUpper());
    if(lowerEL.checked)
        arr.push(getLower());
    if(numbersEL.checked)
        arr.push(getNumber());
    if(symbolEL.checked)
        arr.push(getSymbol());

    // get random character from 4-length array
    if(arr.length > 0)
        return arr[Math.floor(Math.random() * arr.length)];
    else
        return '';
}