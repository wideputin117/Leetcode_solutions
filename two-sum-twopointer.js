// finding target sum using two pointer

const twoSum = (arr,target)=>{
    let left =0;
    let right = arr.length-1;
     let sum =0;  
    // running the loop till left is less than right
    while( left < right){
        sum = arr[left]+ arr[right];

        if(sum === target){
            return true;
        }else if(sum< target){
            left += 1;
        }else{
          right -= 1;
        }
    }

    return 'Element is not present';
}

console.log(twoSum([2,5,1,3,5,6],5));

console.log(twoSum([2,5,1,3,5,6],111));
console.log(twoSum([2,5,1,3,5,6],11));




function twoSum2(newArr, newTarget){
  let len = newArr.length;
  let map = new Map();
  for(let i =0; i < len; i++){
    let difference = newTarget- newArr[i];
    if(map.has(difference)){
        return [i,map.get(difference)]
    }else{
        map.set(newArr[i],i);
    }
  }

}

console.log(twoSum2([2,1,3,5,7,6,23],7))