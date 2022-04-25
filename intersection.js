// Finding intersecting numbers between two given arrays

function common(fArray, sArray) {

    var a = new Set(fArray)
    var b = new Set(sArray)

    let intersection = [...a].filter(x => [...b].includes(x))
    return intersection
}

console.log(common([2,2,4,1], [1,2,0,2]))