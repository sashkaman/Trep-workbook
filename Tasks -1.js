// #1
let item = 100;

const sumNumber = (value) => {
    let sum = 0;
    for (let i = 0; i <= value; i++) {
        sum += i;
    }
    console.log(sum)
}

sumNumber(item)

// #1 >
const item = 100;

const sumNumber = (value) => (value * (value + 1)) / 2;

console.log(sumNumber(item));