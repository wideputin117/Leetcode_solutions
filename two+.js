//lproblem sol for two sum

var twoSum= (arr, target)=>{
    let len = arr.length;
    let map = new Map();
   for(let i=0; i<len; i++){
    let compliment = target - arr[i];
    if(map.has(compliment)){
        return [i, map.get(compliment)];
    }
    else{
        map.set(arr[i], i);  // i is the index
    }
   }

}

const ans = twoSum([1, 2, 3,3,4,5,6,7],10);
console.log(ans);