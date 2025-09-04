/*Closest person to no 3*/

var findClosest = function(x, y, z) {
    let xDistance= x > z ? x-z:z-x
    let yDistance = y > z ? y-z:z-y
     
    if(xDistance==yDistance){
        return 0
    }
    return xDistance <yDistance  ? 1:2
     
};
console.log(findClosest(x = 2, y = 7, z = 4))