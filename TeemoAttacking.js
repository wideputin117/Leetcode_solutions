/**Our hero Teemo is attacking an enemy Ashe with poison attacks! When Teemo attacks Ashe, Ashe gets poisoned for a exactly duration seconds. More formally, an attack at second t will mean Ashe is poisoned during the inclusive time interval [t, t + duration - 1]. If Teemo attacks again before the poison effect ends, the timer for it is reset, and the poison effect will end duration seconds after the new attack.

You are given a non-decreasing integer array timeSeries, where timeSeries[i] denotes that Teemo attacks Ashe at second timeSeries[i], and an integer duration.

Return the total number of seconds that Ashe is poisoned.

 

Example 1:

Input: timeSeries = [1,4], duration = 2
Output: 4
Explanation: Teemo's attacks on Ashe go as follows:
- At second 1, Teemo attacks, and Ashe is poisoned for seconds 1 and 2.
- At second 4, Teemo attacks, and Ashe is poisoned for seconds 4 and 5.
Ashe is poisoned for seconds 1, 2, 4, and 5, which is 4 seconds in total. */

/**  Approach
 * timeseries is array and duration
 */
var findPoisonedDuration = function(timeSeries, duration) {
    let totalTime = 0
    for(let i = 0; i <timeSeries.length-1; i++){
        totalTime += Math.min((timeSeries[i+1]-timeSeries[i]),duration)
    }
    return totalTime+= duration
};

console.log(findPoisonedDuration([1,2],2))

/** other method to solve this */

var findPoisonedDuration2=(timeSeries2,duration2)=>{
let total =0;
let difference =0;
let i=0
difference = timeSeries2[i+1]-timeSeries2[i];
console.log(difference,'difference')
if(difference + timeSeries2[i]>= timeSeries2[i+1]){
    total = difference + duration2
}
console.log(total)
}
findPoisonedDuration2([1,2],2)