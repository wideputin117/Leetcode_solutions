// to find the missing no from a range

var missingNumber = function(nums) {
    let len = nums.length;
    let sumN = len*(len+1)/2;
    let sumOfAll = nums.reduce((accumulate,curentNo)=> accumulate+curentNo)
    return sumN - sumOfAll;

};

console.log(missingNumber([0,1]))