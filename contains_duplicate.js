// to find if an array contains duplicates

var duplicates = (nums)=>{
let set = new Set(nums);
return set.size === nums.length; 
}

console.log(duplicates([1,2,3,1]))