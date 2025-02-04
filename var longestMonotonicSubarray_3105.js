var longestMonotonicSubarray = function(nums) {
  let t=1, ans=1;
  let len= nums.length;
//   for(let i=0;i< len-1;i++){
//     for(let j=1;j<len;j++){
//         if(nums[i]<nums[j]){
//             count1++
            
//         }else if(nums[i]> nums[j]){
//             count2++
            
//         }
        
//     }
//   }  
//   console.log(count1, count2)
//   let maxCount = Math.max(count1,count2)
//   return maxCount
// let use double pass
let currentLength=1
let currentLength2=1
for(let i = 1;  i< len; ++i){
    if(nums[i]>nums[i-1]){
        currentLength++
        ans= Math.max(currentLength, ans)
    }else{
        currentLength=1
    }
}
for(let i=1;i<nums.length; ++i){
    if(nums[i]<nums[i-1]){
        currentLength2++
        ans= Math.max(currentLength2, ans)
    }else{
        currentLength2=1
    }
}
return ans
};

console.log(longestMonotonicSubarray([3,2,1]))