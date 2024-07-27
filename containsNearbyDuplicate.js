var containsNearbyDuplicate = function(nums, k) {
    let num = new Set(nums);
    if(num.length== nums.length){
        return false;
    }
    for(let i  =0  ; i < nums.length-1; i++){
        for(let j  =   i+1; j  < nums.length; j++){
            if(nums[i] == nums[j] && Math.abs(i-j) <= k){
                return true;
            }
        }
    }
    return false;
};

console.log(containsNearbyDuplicate([1,2,3,1,2,3],2));
console.log(containsNearbyDuplicate([1,2,3,1],3));


/** Another Method 
 * Using a map to keep track of elements
*/

function duplicate(arr,m){
    let numberIn={};
    for(let i =0; i< arr.length; i++){
        if(numberIn.hasOwnProperty(arr[i]) && Math.abs(i-numberIn[arr[i]])<=m){
            return true;
        }
        numberIn[arr[i]]= i;
        console.log(numberIn[arr[i]]);
    }
    return false;
}

console.log(duplicate([1,2,3,1,2,3],2));
console.log(duplicate([1,2,3,1],3))