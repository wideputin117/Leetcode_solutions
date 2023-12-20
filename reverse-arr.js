// reverse arr in javascript 

function reverseArray(arr) {
    let temp;
    let n= arr.length;
    for(let i= 0; i< arr.length/2; i++ ){
        temp = arr[i];
        arr[i] = arr[n-i-1]
        arr[n-i-1] = temp;
    }
    return arr;
}

console.log(reverseArray([1,2,3,4,5,6,7,8,9]));
