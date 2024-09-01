// flattening arr without using an inbuilt method

// this only works for 2d arrays
let flatten = arr=>{
let flattenArr=[];

for(let element of arr){
  flattenArr.push(...element)
 }
 return flattenArr;
}

console.log(flatten([[1,2],[1,3,[3,1]]]))

// this works for any level of nested arr

let deepFlat=arr2=>{
    let result=[];
// will run till there are elemnt in arr2
while(arr2.length){
    let item = arr2.pop();
    if(Array.isArray(item)){
        arr2.push(...item);
    }else{
    result.push(item);}
}   
return result.reverse()
}

console.log(deepFlat([[1,3],[[2,3],1],2]))