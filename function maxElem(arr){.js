// this is also selection sort

function maxElem(arr){
    for(let i = 0; i < arr.length - 1; i++){
        let maxIndex = i;
        for(let j = i + 1; j < arr.length; j++){
            if(arr[j] > arr[maxIndex]){
                maxIndex = j;
            }
        }
        let temp = arr[i];
        arr[i] = arr[maxIndex];
        arr[maxIndex] = temp;
    }
    return arr[0];
}

console.log(maxElem([2,3,4,5,6,7,1,9,3]));

function max(arr2){
    let len = arr2.length;
    let max = arr2[0];
    for( let i = 1 ; i < len; i++){
        if(max < arr2[i]){
            max = arr2[i];
        }
    }
    return max;
}

console.log(max([2,1,3,5,2]));

