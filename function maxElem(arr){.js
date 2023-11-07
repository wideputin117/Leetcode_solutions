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
