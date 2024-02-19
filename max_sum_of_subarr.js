// question on finding the maximum sum of subarray from an arr
// will use Kadane's Algorithm which is a greedy algorithm

// const arr = [1,3,-2,4,1,6,7,3,2,5];

const getSum=(arr)=>{
   // take two variable
   // maximam 
   let maximam = arr[0]; // initillay first is the maximau
   let total =  arr[0]; // initially the forst element is the total sum

   // use for loop to iterate the arraya
   for(let i= 1; i<arr.length-1; i++){
    maximam = Math.max(arr[i], arr[i] + maximam); // have to do this because there might be negative values in the arr
    total = Math.max(maximam, total);
   }
   return total;
}

const answer = getSum([2,1,7,-2,-4,3,1,-6,3,6,-9,-2])
console.table(answer);
