// Reverse a string characters without changing its words' position

function revString(str) {
    str = str.split(' ').reverse().join(' ').split('').reverse().join('')

    return str
}

console.log(revString('I am the good boy'))