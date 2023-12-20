// approch use dynamic programming

// 
function maxProfit(prices){
    let currMin = prices[0];  // initial minimum
    let currMax = 0; // if no profit the we return 0;

    // using for loop to calculate and iterate the prices
    for(let i = 0; i < prices.length; i++){
        console.log("Before calculation CurrMin: " + currMin)
        // calculate the current min by using previous value in currMin and value in prices[i].
        currMin = Math.min(currMin, prices[i]);
        console.log("After calculation CurrMin: " + currMin)

        // calculate the max
        console.log("CurrMax Before: " + currMax)
        currMax = Math.max(currMax, prices[i]-currMin);
        console.log("CurrMax AFTER: " + currMax)

    }
    return [currMax,currMin];
}

const ans = maxProfit([2,1,7,3,5,8,2,]);
console.log(ans);