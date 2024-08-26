var findDisappearedNumbers = function(nums) {
    let n = nums.length;
 let missingValues = [];

 // Mark numbers in the array by converting the value at the index corresponding to the current number to negative
 for (let i = 0; i < n; i++) {
     let index = Math.abs(nums[i]) - 1;
    // console.log(index)
     if (nums[index] > 0) {
         nums[index] = -nums[index];
         console.log(nums[i])
     }
 }

 // Find the missing numbers by checking which indices were never marked
 for (let i = 0; i < n; i++) {
     if (nums[i] > 0) {
         missingValues.push(i + 1);
     }
 }

 return missingValues;
};

console.log(findDisappearedNumbers([2,4,1,2,4,5,1,5,7,1]))