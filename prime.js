// moving zeros in an array to the end
// const toEnd = (arr) =>{
//   let j = 0;
//   let len = arr.length;
//   for(let i= 0; i< len; i++){
//     if(arr[i] !== 0){
//        [arr[i], arr[j]] = [arr[j],arr[i]]
//        j++;
//     }
//   }
//   return arr;
// }

// let arr= [1,0,8,2,0,1,3,4,0,5,6,6,7,7];
// let ans = toEnd(arr)
// console.log(ans)

// check for anagram using map
  

function anagram(string1,string2){
 const newString1= string1.split('').sort().join('');
 const newString2= string2.split('').sort().join('');
console.log(newString1,newString2);
if(newString1.length !== newString2.length){
   return false;
}
//
 return newString1 === newString2;

}
console.table(anagram("manish","minash"));

// check for values

function sameValues(arr1,arr2){
  const sortedArr = arr1.sort();
  const sortedArr2 = arr2.sort();
  let sameValue = [];
  for(let i = 0 ; i < arr1.length; i++){
    for(let j = 0; j < arr2.length; j++){
      if(sortedArr[i]=== sortedArr2[j]){
        sameValue.push(sortedArr2[j]);
      }
    }
  }
  sameValue = new Set(sameValue);
  return sameValue;
}
console.log(sameValues([1,4,3,2,7,4,1,9],[9,3,2,4,,7,1,5]))

 //////////////////////////////////////////////////////////////////////////
 //prime/

 function checkPrimesInArray(arr) {
  const primeNumbers = [];

  for (let num of arr) { // iterating the whole array
    let isPrime = true;

    if (num <= 1) {
      isPrime = false;
    } else {
      for (let i = 2; i <= Math.sqrt(num); i++) {
        console.log(Math.sqrt(num))
        if (num % i === 0) {
          isPrime = false;
          break; // No need to continue checking if a divisor is found
        }
      }
    }

    if (isPrime) {
      primeNumbers.push(num);
    }
  }

  return primeNumbers;
}

const numbers = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29];
const primes = checkPrimesInArray(numbers);
console.log(primes); // Output: [2, 3, 5, 7, 11, 13, 17, 19, 23, 29]