// getting the sum of 1d array

function getSumArr(arr){
    let newArr = [...arr];
    newArr[0] = arr[0];

    for(let i= 1; i < arr.length; i++){
        newArr[i] = arr[i] + newArr[i-1];
    }
    return newArr;
}

const result = getSumArr([2,3,4,6,7,8,8,9,10]);
console.log(result)