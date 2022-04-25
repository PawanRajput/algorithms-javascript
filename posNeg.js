// Rearrange a given array as alternatively show one positive then one negative

function position (arr) {
    let negArr = arr.filter(neg => neg<0)
    let posArr = arr.filter(pos => pos>=0)
    let result = [];

    for(let i = 0, j = 0; i<posArr.length, j<negArr.length; i++, j++) {
        if(i < posArr.length) result.push(posArr[i])
        if(j < negArr.length) result.push(negArr[j])
    }
    return result
}

console.log(position([9, 4, -2, -1, 5, 0, -5, -3, 2]))