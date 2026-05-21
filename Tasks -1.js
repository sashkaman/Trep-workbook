Level 1.3 task JavaScript

#1
let string = 'asdf;lkja'

const checkString = (str) => {
    if (str.length > 0) {
        return str.at(-2)
    }
}

console.log(checkString(string));