/** best time to buy and sell stock II   have to find the maximam profit */

var maxProfit = function(prices) {
    let maxSum =0
    for(let i =1;i< prices.length;i++){
        if(prices[i]>prices[i-1]){
            maxSum += prices[i]-prices[i-1]
        }
    }
    return maxSum
};

console.log(maxProfit(prices = [7,1,5,3,6,4]))