// Function to find duplicates in an array
function findDuplicates(arr) {
  // Create an empty object to store the duplicates
  const duplicates = {};

  // Iterate over the array
  for (let i = 0; i < arr.length; i++) {
    // Check if the current element is already in the duplicates object
    if (duplicates[arr[i]]) {
      // If it is, increment the count of the duplicate
      duplicates[arr[i]]++;
    } else {
      // If it is not, add the element to the duplicates object with a count of 1
      duplicates[arr[i]] = 1;
    }
  }

  // Return the duplicates object
  return duplicates;
}

// Example usage
const arr = [1, 2, 3, 4, 5, 1, 2, 3];
const duplicates = findDuplicates(arr);
console.log(duplicates);

//

function same(arr1) {
   let len = arr1.length-1;
   let doubles = {};

   for(let i=0;i <= len; i++){
    if(doubles[arr1[i]]){
      doubles[arr1[i]]++;
    }else{
      doubles[arr1[i]]=1;
    }
   }
   return doubles;
}
console.log(same([1,2,3,2,5,3,7,0,1]));

// finding samw using two loops

function same1(arr2){
  let len = arr2.length-1;
  let double = new Array();
  for(let i = 0; i <= len; i++){
    for(let j = 0; j <i;j++){
      if(arr2[i]===arr2[j]){
        double.push(arr2[i]);
      }
    }
  }
  return double;
}

console.log(same1([2,3,1,7,8,7,1]))


// using map

function same3(arr3){
  let len = arr3.length-1;
  let double1= new Array();
  let map =  new Map();
  for(let i= 0; i<=len; i++){
      if(map.has(arr3[i])){
        double1.push(arr3[i]);
      }else{
        map.set(arr3[i],i)
      }
  }
  return double1;
}

console.log(same3([1,3,1,5,2,5,8,9,]))

//   palendrome

function palindrome(string){
  let len = string.length;

  for(let i = 0 ; i < len/2;i++){
    if(string[i] !== string[len-i-1]){
      return false;
    }
    return true;
  }

}

console.log(palindrome("MaM"))

// finding prime numbers

function prime(num){
  if(num <= 1){
    return false;
  }
  if(num == 2){
    return true;
  }
  for(let i= 2; i <= Math.sqrt(num); i++){
    if(num % i === 0){
      return false;
    }
  }
  return true
}

function final(arr4){
  return arr4.filter(prime)
}

console.log(final([2,3,5,7,9,11,23,21,4,6]))

// program to reverse a string

function reverseString(str){
  let len = str.length;
  let newString = str.split('');
  for(let i =0; i < len/2; i++){
   let temp = newString[i];
   newString[i] = newString[len-i-1];
   newString[len-i-1] = temp;
  }  
  return newString.join('');
}

console.log(reverseString("MANISH Gupta"))

// fibonacci number

function fibonacci(num){
  if(num <= 1){
    return num;
  }
  return fibonacci(num-1) + fibonacci(num-2);
}
console.log(fibonacci(20));


// binary search

const BinarySearch= (arr5,target)=>{
  let left = 0;
  let right = arr5.length-1;
   let mid = 0;
  arr5= arr5.sort((a,b)=>a-b);
  console.log(arr5);

  while(left <= right){
    mid = left+ Math.floor((right-left)/2);
     if(arr5[mid]=== target)
      return [arr[mid],mid];
     
     if(arr5[mid]< target)
      left = mid +1;
    
    if(arr5[mid]> target)
      right = mid -1;
    

  }
  return -1;

}
 let answer = BinarySearch([2,3,1,4,6,8,4],8)
 console.log(answer);