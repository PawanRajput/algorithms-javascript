// Find unique numbers in an array

var arr = [1,3,3,3,1,5,6,7,8,1];

const unique = function (arr) {
    const distinct = []

    for(let num of arr) {
        if(!distinct.includes(num)) {
            distinct.push(num)
        }
    }
    distinct.sort((a,b) => {
        return a-b;
    })
    return distinct
}

console.log(unique(arr))