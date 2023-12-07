// moving zeros to the end of array
var moveToEnd = (arr)=>{
   // have a pointer for j = 0
   let j = 0;
  let len = arr.length;

  // use for loop to iterate through the arr
  for(let i=0; i < len; i++){
    // check for if the elem at i in the arr is not 0 then we swap elem at i with elem at j
    if(arr[i] !==0){
        [arr[i],arr[j]] = [arr[j],arr[i]];
        // and we increment j by 1
        j++;  
    }
  }
  return arr;
}


console.log(moveToEnd([2,3,1,0,2,1,0,4,2,3]));