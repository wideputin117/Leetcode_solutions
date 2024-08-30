/**
Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must appear as many times as it shows in both arrays and you may return the result in any order.

 

Example 1:

Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2,2]

Example 2:

Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [4,9]
Explanation: [9,4] is also accepted.

*/

var intersect = function(nums1, nums2) {
  let sameElements1={};
  let sameElements2={};
    for(let char of nums1){
     sameElements1[char] = (sameElements1[char] || 0 ) + 1;
    }
    for(let char of nums2){
        sameElements2[char] = (sameElements2[char] || 0)+1;
    }
    const result = [];
    for (let num in sameElements1) {
        if (sameElements2[num]) {
                  console.log(`Key: ${num}, Count in nums1: ${sameElements1[num]}, Count in nums2: ${sameElements2[num]}`);
            const commonCount = Math.min(sameElements1[num], sameElements2[num]);
            result.push(...Array(commonCount).fill(Number(num))); // Correctly pushing repeated elements
        }
    }

    return result;
};

console.log(intersect([1,2,3,2,10,1,6,9,3,2,2,7,4,6,3],[3,3,5,3,1,2,4,6,4,7,9,6,2,4,1]))