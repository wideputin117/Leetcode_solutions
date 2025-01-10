const findTwoSum =(arr,target)=>{
  let left =0;
  let right = arr.length-1
  while(left < right){
    let sum = arr[left] + arr[right]
    if(sum === target){
        return [arr[left],arr[right]]
    }else if(sum <= target){
        left++
    }else{
        right--
    }
  }
  return -1
}
console.log(findTwoSum([2,7,11,15],9))