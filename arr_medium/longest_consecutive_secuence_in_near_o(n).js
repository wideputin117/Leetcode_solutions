/**
 Leetcode:128= Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

You must write an algorithm that runs in O(n) time.

 

Example 1:

Input: nums = [100,4,200,1,3,2]
Output: 4
Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4. */
var longestConsecutive =(nums)=>{
    let ans =0;
    let set = new Set(nums.map(num => Math.abs(num)))
    let y
    console.log(set)
    for(let i=0;i<nums.length-1;i++){
        if(!set.has(nums[i]-1)){
        let currentStreak =1
        let currentNum =nums[i]
       while(set.has(currentNum+1)){
        currentNum++
        currentStreak ++;
       }
       ans = Math.max(ans,currentStreak)
        }
    }
    return ans
}
// console.log(longestConsecutive([0,3,7,2,5,8,4,6,0,1]))
console.log(longestConsecutive([0,-1]))
// console.log(data)
 