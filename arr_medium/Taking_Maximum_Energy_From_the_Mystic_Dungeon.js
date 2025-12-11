/** prifix sum */

var maximumEnergy = function(energy, k) {
    let maxSum=0
    for(let i=0;i<energy.length;i++){
        let sum =0
        while((i+k)<energy.length){
            sum += energy[i]
            i= i+k
         }
        maxSum = Math.max(maxSum,sum)

    }
    return maxSum
};

console.log(maximumEnergy(energy = [5,2,-10,-5,1], k = 3))