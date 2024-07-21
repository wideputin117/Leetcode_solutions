// selection sorting

let select=(arr)=>{
let min=0;

for(let i = 0; i <arr.length;i++){
    min = i; // take the smallest at 0 index 
    for(let j = i+1; j <arr.length; j++){
        if(arr[j]<arr[min]){
            [arr[min],arr[j]] = [arr[j],arr[min]];
        }
    }
  }
  return arr;
}

console.log(select([4,1,2,8,3,2]))