/**Given two integer arrays nums1 and nums2, return an array of their
intersection
. Each element in the result must be unique and you may return the result in any order.

Example 1:

Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2]

Example 2:

Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [9,4]
Explanation: [4,9] is also accepted.
 */
var intersection = function(nums1, nums2) {
  let sameValues=[];
for(let i=0;i<nums1.length;i++){
    for(let j=0;j<nums2.length;j++){
        if(nums1[i]=== nums2[j]){
            sameValues.push(nums1[i]);
        }
    }
  }  
  sameValues = [...new Set(sameValues)]
  return sameValues;
};

console.log(intersection([2,1,4,5,2,3,1,6,4,5,6,2],[1,2,3,4,32,1,2,6,8,3,4,6]));

