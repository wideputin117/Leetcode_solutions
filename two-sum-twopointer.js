// finding target sum using two pointer

const twoSum = (arr,target)=>{
    let left =0;
    let right = arr.length-1;
     let sum =0;  
    // running the loop till left is less than right
    while( left < right){
        sum = arr[left]+ arr[right];

        if(sum === target){
            return true;
        }else if(sum< target){
            left += 1;
        }else{
          right -= 1;
        }
    }

    return 'Element is not present';
}

console.log(twoSum([2,5,1,3,5,6],1));

console.log(twoSum([2,5,1,3,5,6],111));
console.log(twoSum([2,5,1,3,5,6],11));