// have an count and majorityelement both initially 0;

/**
 * for loop to iterate 
 * if count is 0 assign the current element tomajorElement
 * or if majorityelement is already in the numsarr increase the count by 1 or else decrement by 1
 * 
 */

let majority=(nums)=>{
    let count =0,majorElement;
    for(let i =0 ; i< nums.length;i++){
         majorElement= nums[i];
        if(majorElement == nums[i]){
            count++
        }else{
            count-=1;
        }  
         
    }
    return majorElement;
}
console.log(majority([1,1,1,1,1,1,1,2,34,5,4,8,2,6,8,9,1,2,2,2,2]))