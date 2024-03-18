// formaula for mid point
//mid = left + Math.floor((right-left)/2);

// search using binary search

// var searchNumber = (arr, num)=>{
//     // binary search can only be done on an sorted arra
//     // sort the arr
//     let sortedArr =  arr.toSorted((a,b)=> a-b);
//     console.log(sortedArr);
//     // take three points
//     // left, mid and right;

//     let left = 0;
//     let right = sortedArr.length-1;

//     let mid;

//     // using while loop to run till the left pointer is less than or equal to right
//     while(left <= right){
//         mid = left + Math.floor((right-left)/2);

//         if(sortedArr[mid] === num){
//             return sortedArr[mid];
//         }

//         if(sortedArr[mid]> num){
//             right = mid-1;
//         }
//         if(sortedArr[mid]<num){
//             left = mid+1;
//         }
        
//     } 
//     // value is not there return -1
//     return -1;
// }

// console.log(searchNumber([2,3,1,4,2,3],11))

// function to find duplicates in an array

var duplicates= (arr)=>{
   let duplicates =  new Array();
   let newArr =  arr.toSorted((a,b)=>a-b);
   
   let len = newArr.length-1;

   for(let i = 0; i <= len; i++){
    for(let j=  i+1; j< len;  j++){
        if(newArr[i]=== newArr[j]){
            duplicates.push(newArr[i]);
        }
    }
   }
   return  duplicates;

}

console.log(duplicates([1,2,1,3,4,4,37,4,2,3]))