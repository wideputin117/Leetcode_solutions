/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
         let index = -1;
        let n = nums.length;

//  finding the index point where peak is and if that is not found just will return the arr with reversing the whole array
        for(let i= n-2;i>0;i--){
          if(nums[i]<nums[i+1]){
            index =i
            break;
          }
        }
        for(let i=n-1;i>index;i--){
          if(nums[i]>nums[index]){
            [nums[i],nums[index]]=[nums[index],nums[i]];
            break;
          }
        }            
        //sort the array from the index to the end
         
        
    let left = index + 1;
    let right = n - 1;
    while (left < right) {
        [nums[left], nums[right]] = [nums[right], nums[left]];
        left++;
        right--;
    }
    return nums
};

console.log(nextPermutation([1,2,3,4]))