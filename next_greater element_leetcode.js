/*The next greater element of some element x in an array is the first greater element that is to the right of x in the same array.

You are given two distinct 0-indexed integer arrays nums1 and nums2, where nums1 is a subset of nums2.

For each 0 <= i < nums1.length, find the index j such that nums1[i] == nums2[j] and determine the next greater element of nums2[j] in nums2. If there is no next greater element, then the answer for this query is -1.

Return an array ans of length nums1.length such that ans[i] is the next greater element as described above.

 

Example 1:

Input: nums1 = [4,1,2], nums2 = [1,3,4,2]
Output: [-1,3,-1]
Explanation: The next greater element for each value of nums1 is as follows:
- 4 is underlined in nums2 = [1,3,4,2]. There is no next greater element, so the answer is -1.
- 1 is underlined in nums2 = [1,3,4,2]. The next greater element is 3.
- 2 is underlined in nums2 = [1,3,4,2]. There is no next greater element, so the answer is -1.*/
var nextGreaterElement = function(nums1, nums2) {
    let resultArr =[]
for(let i=0;i< nums1.length;i++){
    let nextGreater = -1;
    for(let j=0; j < nums2.length; j++){
        // if(nums1[i]==nums2[j]){
        //    if(j+1 > nums2.length){
        //     return resultArr
        //    };
           
        //    if(nums2[j+1]> nums2[j]){
        //     console.log("the j nums are", nums2[j+1])
        //     resultArr.push(nums2[j+1])
        //    }else{
        //     resultArr.push(-1)
        //    }
        // }
        if(nums1[i]==nums2[j]){
            for( let k=j+1 ;k<nums2.length;k++){
                if(nums2[k]>nums2[j]){
                    nextGreater = nums2[k];
                    break
                }
            }
            // resultArr.push(nextGreater)
            break
        }
    }
                resultArr.push(nextGreater)

}

console.log("the result arr", resultArr)    
};
nextGreaterElement([4,1,2],[1,3,4,2])