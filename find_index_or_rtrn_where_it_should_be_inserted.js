 /*
 Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

You must write an algorithm with O(log n) runtime complexity.
Example 1:

Input: nums = [1,3,5,6], target = 5
Output: 2
Example 2:

Input: nums = [1,3,5,6], target = 2
Output: 1
Example 3:

Input: nums = [1,3,5,6], target = 7
Output: 4
 */

let findVal=(arr,num)=>{
    // will use binary search
    let mid=0;
    let left=0;
    let right = arr.length-1;
    while(left <= right){
        mid = left + Math.floor((right-left)/2);
   
        if(arr[mid]===num){
            return mid;
        }else if(arr[mid]<num){
            left =mid+1;
            console.log(left)
        }else if(arr[mid]>num){
            right = mid-1;
         }
    }
 return left;    
}
console.log(findVal([1,3,5,6],1));
console.log(findVal([1,3,5,6],4))