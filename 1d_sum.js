// creating a sum of 1d arrays
// program to find the sum of the element by adding the previous result element to new element

function sumArr(arr){
    let result = [];

    result[0] = arr[0]; // this initializes the result array with the first element of original arr becuse there os no previous element before the first element
    for(let i = 1; i < arr.length; i++){
        result[i] = arr[i] + result[i-1];
        
    }
    return result;
    
}
let results = sumArr([2,3,4,5,6,7,8,9])
console.log(results)