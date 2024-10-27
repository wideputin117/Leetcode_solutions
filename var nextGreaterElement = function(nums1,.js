var nextGreaterElement = function(nums1, nums2) {
    let result = [];
  
    for (let num1 of nums1) {
      let found = false;
      for (let i = 0; i < nums2.length; i++) {
        if (nums2[i] === num1) {
          // Look for the next greater element after num1 in nums2
          for (let j = i + 1; j < nums2.length; j++) {
            if (nums2[j] > num1) {
              result.push(nums2[j]);
              found = true;
              break;
            }
          }
          // If no greater element was found, push -1
          if (!found) {
            result.push(-1);
          }
          break; // No need to continue searching for this num1
        }
      }
    }
    
    return result;
};

console.log(nextGreaterElement([2,4],[1,2,3,4]))