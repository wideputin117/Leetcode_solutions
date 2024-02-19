// two sum
 
const twoSum= (num,target)=>{
let map = new Map();
for(let i= 0; i<num.length; i++){
    let compliment = target - num[i];
    if(map.has(compliment)){
        return [map.get(compliment),i];
    }
    map.set(num[i],i);
  }
  return "Number not present";
}

console.log(twoSum([2,4,3,1,4], 5))
// two sum with two pointer

const twopointSum=(nums,value)=>{
    // take two points one one left and onw on the end
    let left =0;
    let right = nums.length-1;
// will run the loop till left  pointer is less than right
while(left < right){
    let sum = nums[left]  + nums[right];
    if(sum === value){
        return [nums[left], nums[right]];
    }else if(sum< value){
        left +=1; // if sum is less than target we increase  the left pointer by 1
    }
    else if(sum> value){
        right -= 1; // if sum is more we decrease 1  from the right 
    }

}
return 'Not Valid value';



}

console.log(twopointSum([2,3,1,4,6],11))


// reverse an array

const reverseArr=(arr)=> {
     let n = arr.length-1;
     let temp;
    for(let i= 0; i < arr.length/2; i++){
      temp =  arr[i];
      arr[i] = arr[n-i];
      arr[n-i]= temp;
    }
    return arr;

}

console.log(reverseArr([1,2,4,5,6,6]))
 
// Binary search

const binarySearch=(arr,target)=>{
    // binary search is donw on a sorted arra
    let newArr = arr.toSorted((a,b)=> a-b);
    console.log(newArr);
    let left = 0;
    let right = newArr.length-1;
    let mid=0;
    // will run the loop till left is less than or equal to right
    while(left <= right){
        mid = left + Math.floor((right-left)/2); // to get the mid after each iteration
      if(newArr[mid]=== target){
        return [newArr[mid]];
      }
      if(newArr[mid] < target){ // if value at  mid is less than the target that means the value is on the right side of the arr
        left = mid+1; // so we move left pointer from 0 to the mid+1
      }
      if(newArr[mid]> target){
        right = mid-1;
      }
    }
    return "The value is not present";


}

console.log(binarySearch([2,4,1,3,1,7,5],5))


// finding common element from two arrays;

const commonElem=(arr1,arr2)=>{
    let newArr1= arr1.toSorted((a,b)=>a-b);
    let newArr2= arr2.toSorted((a,b)=>a-b);
    let common = new Array();
    for(let i = 0; i < newArr1.length; i++){
        for(let j= 0; j < newArr2.length; j++){
            if(newArr1[i]===newArr2[j]){
               common.push(newArr1[i]); 
               break;
            }
            
        }
    }
   return common;
}

console.log(commonElem([2,5,3,1,4],[1,5,3,1,7,8]));

//finding common elements using