// Sorting an array as evens in ascending order and odds in descending order

var arr = [3,2,4,1,7,5,6,10]

function sorting(arr) {
    const oddArr = [];
    const evenArr = [];

    for(num of arr) {
        if(num%2 == 0) {
            evenArr.push(num)
        }
        else oddArr.push(num)
    }
    evenArr.sort((a,b) => a-b)
    oddArr.sort((a,b)=> b-a)

console.log([...evenArr,...oddArr])
}
sorting(arr)