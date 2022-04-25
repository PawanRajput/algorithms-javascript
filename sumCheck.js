// Checking the possible pairs in an array which sums to the given number

function checkSum(arr, num) {
    let sum = []
    for(let n = 0; n < arr.length; n++) {
        for(let m = n + 1; m < arr.length; m++) {
            if(arr[n] + arr[m] == num) {
                sum.push([arr[n], arr[m]])
            }            
        }
    }
    return sum;
}

console.log(checkSum([6,4,3,2,1,7], 9))