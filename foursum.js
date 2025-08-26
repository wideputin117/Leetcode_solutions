/** foursum */ 
 
 function fourSum(nums, target) {
  //  nums = nums.sort((a,b)=>a-b)
   
   let result =[]
   for(let i=0;i<nums.length;i++){
     for(let j=i+1;j<nums.length;j++){
       for(let k =j+1; j<nums.length;j++){
         for(let l=k+1;l<nums.length;l++){
           if(nums[i]+nums[j]+nums[k]+nums[l]==target){
             result.push([nums[i],nums[j],nums[k],nums[l]])
           }
         }
       }
     }
   }
  return result
   
 }
    
    console.log(fourSum(nums = [1,0,-1,0,-2,2], target = 0))
        console.log(fourSum(nums = [2,2,2,2,2], target = 8))
