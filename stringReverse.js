// Reversing a string

function revString(str) {
    str = str.split('').reverse().join('')
    return str
}

console.log(revString('you are a nice dude'))