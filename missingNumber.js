// Finding missing number in a numeric array

function missing(arr){
    var n = arr.length+1;
    var sum = 0;
    var expectedSum = n* (n+1)/2;
    
    for(var i = 0; i < arr.length; i++){
      sum += arr[i];
    }
    
    return expectedSum - sum;
  }


console.log(missing([5,2,6,1,3]))