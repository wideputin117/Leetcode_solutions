// 
function reversArr(arr){
    let size = arr.length;
    
    for(let i = 0; i <size/2; i++){
    let temp = arr[i];
      arr[i] = arr[size-i-1]
      arr[size-i-1] = temp
    }
    return arr;
}

console.log(reversArr([1,2,3,4,5,6,7,8,9,10]));