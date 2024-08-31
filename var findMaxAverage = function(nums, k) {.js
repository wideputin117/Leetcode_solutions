var findMaxAverage = function(nums, k) {
//     const results = []
//     let maxAverage=0;
//   for(let i = 0; i < nums.length - k + 1; i++) {
//     let sum = 0
    
//     for(let j = i; j < i + k; j++) {
//       sum += nums[j]
//     }
//     results.push(sum)  
//  }
//  for(let i=0;i<results.length;i++){
//   if(maxAverage  < results[i]/k){
//     maxAverage = results[i]/k;
//   }
// }
//   return maxAverage

if (nums.length < k || k <= 0) {
    throw new Error("Invalid input");
}

// Step 1: Calculate the sum of the first window
let windowSum = 0;
for (let i = 0; i < k; i++) {
    windowSum += nums[i];
}

// Initialize maxAverage with the average of the first window
let maxAverage = windowSum / k;

// Step 2: Slide the window over the rest of the array
for (let i = k; i < nums.length; i++) {
    windowSum = windowSum - nums[i - k] + nums[i];
    maxAverage = Math.max(maxAverage, windowSum / k);
}

return maxAverage;
};

console.log(findMaxAverage([8860,-853,6534,4477,-4589,8646,-6155,-5577,-1656,-5779,-2619,-8604,-1358,-8009,4983,7063,3104,-1560,4080,2763,5616,-2375,2848,1394,-7173,-5225,-8244,-809,8025,-4072,-4391,-9579,1407,6700,2421,-6685,5481,-1732,-8892,-6645,3077,3287,-4149,8701,-4393,-9070,-1777,2237,-3253,-506,-4931,-7366,-8132,5406,-6300,-275,-1908,67,3569,1433,-7262,-437,8303,4498,-379,3054,-6285,4203,6908,4433,3077,2288,9733,-8067,3007,9725,9669,1362,-2561,-4225,5442,-9006,-429,160,-9234,-4444,3586,-5711,-9506,-79,-4418,-4348,-5891], k = 93))