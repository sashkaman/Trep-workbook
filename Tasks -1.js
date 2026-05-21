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

