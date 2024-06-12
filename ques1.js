// function for finding a single element in a array of pairs

const pairs = (arr)=>{
    const newArr =  new Array();
    for(let i = 0; i < arr.length ; i++){
        if(arr.indexOf(arr[i]) === arr.lastIndexOf(arr[i])){
         newArr.push(arr[i]);
        }
    }
return newArr;
}

const ans = pairs([2,3,1,3,4,2]);
console.log(ans);


let string = 'manish gupta'
var reverseString=(string)=>{
  let newString =  string.split('');
  let temp = {};
  let len =  newString.length-1
  for(let i = 0 ; i < len/2; i++){
     temp = newString[i];
     newString[i] = newString[len-i];
     newString[len-i]= temp;
  }

  console.log(newString.join(''))
}
reverseString(string);