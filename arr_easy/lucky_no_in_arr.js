var findLucky = function(arr) {
    let map = new Map()
    for(let i=0;i<arr.length;i++){
        if(map.has(arr[i])){
            map.set(arr[i],(map.get(arr[i]))+1)
        }else{
        map.set(arr[i],1)
        }
    }
    let ans=0
    map.forEach((value,key)=>{
      console.log( value, key)
      if(key == value){
        ans=Math.max(ans,key)
      }
    })    
    return ans
 };

console.log(findLucky(arr = [4,3,2,2,4,1,3,4,3]))