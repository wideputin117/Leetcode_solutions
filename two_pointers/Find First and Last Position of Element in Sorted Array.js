/** brute force */
var searchRange = function(nums, target) {
    for(let i=0;i< nums.length;i++){
      if(nums[i]== target){
        for(let j= nums.length-1;j>=0;--j){
          if(nums[j]==target){
            return [i,j]
          }
        }
      }
      
     }
     return [-1,-1]
};

console.log(searchRange(nums = [5,7,7,8,8,10], target = 8))



const varSearch2 = function(nums2,target2){
    let left =0;
    
}