/**
 You are climbing a staircase. It takes n steps to reach the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

Example 1:

Input: n = 2
Output: 2
Explanation: There are two ways to climb to the top.
1. 1 step + 1 step
2. 2 steps
 */

// use fibonacci way to find ways to reach the top
var climbStairs = function(n) {
    // use value = value(n-1)+value(n-2);
    // will use optimal substraction

    let dp = []; // empty to store the steps
    // base case 
    // for 1 stair we will have just 1 way and for 2 stairs we will have 2 ways to climb two stairs
    dp[1]=1;
    dp[2] = 2;

    // will use for loop
    for(let i =3;i <=n;i++){
        dp[i] = dp[i-1] + dp[i-2]; // this is fibonacci getting the value of first two elements before current element and store their sum in current step 
    }
    return dp[n];
    
};

console.log(climbStairs(5))