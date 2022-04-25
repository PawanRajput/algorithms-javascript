//Checking whether two strings contains same characters or not

let anagram =( str1, str2)=> {
    str1 = str1.toLowerCase().split('').sort().join('')
    str2 = str2.toLowerCase().split('').sort().join('')
    if(str1 === str2) {
        return true
    }
    else return false
}
// anagram('monk', 'know')
console.log(anagram('Mary', 'Army'))