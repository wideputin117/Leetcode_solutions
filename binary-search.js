// binary search program

// 1  will use three pointers left ,mid,right

function BinarySearch(arr,target){
    let newarr = arr.toSorted((a,b)=>a-b); // using new arr.toSorted method
    console.log(newarr);
    // take left at =0;
    let left = 0;
    // take right as array length -1;
    let right = newarr.length-1;

    // mid 
    let  mid = 0;
 // using while loop / loop will run till left is less than or eqaul to right
    while(left <= right){
        // calculate mid for each iteration
        mid = left + Math.floor((right-left)/2); // this is formula for calculating middle point

        // checking for target
        if(newarr[mid] === target)
        return [newarr[mid],mid];
        
        // condition when target is more than at mid in that case we will move left pointer from 0 to mid+1 right will remain as same
        if(newarr[mid]< target)
          left = mid+1;
        // condition if target is less that value at mid we will move right pointer to one index less than that of mid
        if(newarr[mid]> target)
        right = mid-1;

    }
    // if the value is not in the arr
    return -1;


}

let answer = BinarySearch([1,2,3,4,1,2,9,2,55,33,11,6,3,445,6,23,1,55,784,31,45,,46,57,88,54,221,13,34,56,7889,34,12,22], 11)
console.log(answer);


// without search
function squareRoot(num){
  let sqrt = num /2;
  console.log(sqrt)
  let temp = 0;

  while(sqrt != temp){ // will run till sqrt is not equal to the temp
      temp= sqrt;
      sqrt = (num/temp+temp)/2;
  }
  return sqrt;
}
console.log(squareRoot(2))