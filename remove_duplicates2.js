// 

var removeDuplicates = function(nums) {
   let k = 0;
   let len = nums.length;
   let duplicate=[];
   for(let i = 0 ; i < len-1; i++){
    for(let j = i+1; j < len;j++){
        if(nums[i] === nums[j]){
            k+=1;
            duplicate.push(nums.splice(i,1));
        }
     }
   }
   return [k,nums];
};

console.log(removeDuplicates([1,2,3,4,4,5,7,7,7,8]))

