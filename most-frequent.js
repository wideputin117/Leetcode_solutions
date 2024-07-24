// find the most  frequently  occurring in an array
let nums = [2,1,4,5,2,4,6,6,2,4,8,5,3,6,8,1,6,9,0,3,1];

let frequent = (nums)=>{
    // will use object method to keep track of keys and value;
    let obj = {};
    let max = 0, el;
    for(let i=0; i < nums.length;i++){
        if(!obj[nums[i]]){ 
        obj[nums[i]]=1;}
        else {
            obj[nums[i]]++;
    }
  }
  for(const i in obj){
    if(max<obj[i]){
        max = obj[i];
        el = i;
    }
  }
  return el;
}
console.log(frequent(nums));