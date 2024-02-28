// moving zeroes to the end
var movetoZero= (arr)=>{
 
    let j = arr.length-1; // this will be the pointer to the zero value in the arr
    let len =  arr.length;

    // for loop
    for(let i= len-1;i >= 0; i--){
        if(arr[i] !== 0){
            [arr[i],arr[j]] = [arr[j],arr[i]]; // will swap the value at i with at j

            // will also increment j by 1;
            j--;
        }
    }
  return arr;

}

console.log(movetoZero([2,0,43,5,0,67,0,2,4,0,60,]))