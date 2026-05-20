Level 1.1 task JavaScript

#1

let num = -24234;
const checkProcess = (value) => {
    return value > 0 ? value > 0 : value < 0
}
checkProcess(num)

#2
let string = 'whats_up';
const checkProcess = (value) => {
    console.log(value.length)
}
checkProcess(string)

#3
let string = 'whats_up';
const checkProcess = (value) => {
    return value.length - 1)
    return value.at(-1))
}
console.log(checkProcess(string))

#4
let number = 25;

const checkProcess = (value) => {
    return value % 2 == 0;
}
console.log(checkProcess(number));

#5

let word1 = 'what_up man';
let word2 = 'what is your name?';

const checkProcess = (value1, va2lue2) => {
    return value1.at(0) == value.at(0);
}
console.log(checkProcess(word1, word2));

#6
let word1 = 'what_up man';
let word2 = 'what is your name?';

const checkProcess = (value1, va2lue2) => {
    return value1.at(0) == value.at(0);
}
console.log(checkProcess(word1, word2));

Level 1.2 task JavaScript
#1
let number = 25545;
const checkProcess = (value) => {
    return value.toString().at(0);
}
console.log(checkProcess(number));

#2
let number = 25545;
const checkProcess = (value) => {
    return value.toString().at(-1);
}
console.log(checkProcess(number));

#3
let number = 25545;
const checkProcess = (num) => {
    return +num.toString().at(0) + +num.toString().at(-1);
}
console.log(checkProcess(number));

#4
let number = 255;
const checkProcess = (num) => {
    return String(num).length
}
console.log(checkProcess(number));

#5
let number1 = 454324;
let number2 = 4324;
const checkProcess = (num1, num2) => {
    let res = String(num1).at(0) === String(num2).at(0)
    return res
}

console.log(checkProcess(number1, number2))

// solution option #5
const checkProcess = (num1, num2) => {
    const s1 = String(Math.abs(num1));
    const s2 = String(Math.abs(num2));

    return s1[0] === s2[0];
};

