Level 1.3 task JavaScript

#1
let string = 'asdf;lkja'

const checkString = (str) => {
    if (str.length > 0) {
        return str.at(-2)
    }
}

console.log(checkString(string));

#2

let num1 = 51;
let num2 = 25;

const checkNumber = (value1, value2) => {
    if (value1 % value2 === 0) {
        return 0
    } else {
        return 'countless '
    }
}

console.log(checkNumber(num1, num2));