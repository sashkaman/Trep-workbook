Level 1.4

#1
const count = (value) => {
    for (let i = 1; i <= value; i++) {
        console.log(i);
    }
}

count(100);


#2
const countFromMinus100 = (value) => {
    for (let i = value; i <= 0; i++) {
        console.log(i);
    }
}

countFromMinus100(-100);

#3

const countBackwards = (value) => {
    for (let i = value; i >= 1; i--) {
        console.log(i);
    }
}

countBackwards(100);

#4

const countEvenNumbers = (value) => {
    for (let i = 1; i <= value; i++) {
        if (i % 2 === 0)
            console.log(i);
    }
}

countEvenNumbers(100);

#5

const countMultiplesNumbers = (value) => {
    for (let i = 1; i <= value; i++) {
        if (i % 3 === 0)
            console.log(i);
    }
}

countMultiplesNumbers(100);