// selection sort

function selctSort(arr){
    // using two loops i and j
    for(let i = 0; i < arr.length-1; i++){
        let minIndex = i;  // keep track of min index
        for(let j = i+1; j < arr.length; j++){
            if(arr[j]< arr[minIndex]){ // j th index is one-more than i th index
                minIndex = j; // if the i th index is more than the j th index we assign the j th index to minIndex
            }
        }
        // flip the values at index 
        [arr[i], arr[minIndex]]= [arr[minIndex], arr[i]];  // then we flip the values at index of i and minIndex (at this point minindex has index of j which is one more than i th index) 
    }
    return arr; // in ascending order
}

let ans = selctSort([2,4,5,6,1,2,5,7]);
console.log(ans);