/**Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.

 

Example 1:

Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
Explanation: 
nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
The distinct triplets are [-1,0,1] and [-1,-1,2].
Notice that the order of the output and the order of the triplets does not matter. */

/**Sort the given array in non-decreasing order.
Loop through the array from index 0 to n-1.
For each iteration, set the target as -nums[i].
Set two pointers, j=i+1 and k=n-1.
While j<k, check if nums[j]+nums[k]==target.
If yes, add the triplet {nums[i], nums[j], nums[k]} to the result and move j to the right and k to the left.
If no, move either j or k based on the comparison of nums[j]+nums[k] with target.
To avoid duplicate triplets, skip the iterations where nums[i]==nums[i-1] and also skip the iterations where nums[j]==nums[j-1] or nums[k]==nums[k+1]. */
var threeSum = function(nums) {
    nums = nums.sort((a,b)=>a-b)
    let result =[]
if(nums[0]>0){
    return [];
}
    for(let i=0 ; i< nums.length-2;i++){   // can also put this inside the loop and skip the if nums[0]>0  => for(let i=0 ; i< nums.length-2 && nums[i]<=0;i++)
        let j = i+1 // two pointers
        let k = nums.length-1
         if(i > 0 && nums[i] == nums[i-1]){
            continue;
         }
        let target = -nums[i]; // making the target negative
          while(j<k){
          
            if(nums[j]+nums[k] == target){
                result.push([nums[i],nums[j], nums[k]])
                j++;
                k--;

                while(j < k && nums[j] == nums[j-1]){
                    j++ // skipping to avoid the duplicates
                }
                while(j < k && nums[k]== nums[k+1]){
                    k-- // skipping to  avoid the duplicates
                }
            }else if(nums[j]+nums[k]<target){
                j++; // j is left pointer
            }else{
                k-- // k is right pointer
            }
          
        }
    }
    return result;
};

console.log(threeSum([-1,0,1,2,-1,-4]))