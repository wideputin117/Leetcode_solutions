 // Write a recursive function to compute the count of vowels and consonants in a string

 function count(arr){

    let countVowels=0;
    let countConsonants=0;
     
    for (let i = 0; i < arr.length; i++) {
        // Convert the character to uppercase to handle both cases

        let char = arr[i].toUpperCase();
         console.log(char)
        if (char === 'A' || char === 'E' || char === 'I' || char === 'O' || char === 'U') {
            countVowels++;
        } else if (char >= 'A' && char <= 'Z') {
            countConsonants++;
        }
    }

    return [countVowels, countConsonants];
}

 console.log(count(['M','A','N','I','S','H']))

 //Write a function to check if a given number is a prime number

  function prime(num){
    //base case
    if(num <= 1){
        return false;
    }
    for(let i = 2;i <= Math.sqrt(num); i++){
        if(num % i === 0){
            return false;
        }
        
    }
    return true;
 }

 function major(arr){
   return arr.map(num=>prime(num));
 }
 const ans = major([1,7,9,17,21,23,4,6]);

 console.log(ans)

 //////////////////////////////////////////
//  function prime(num) {
//     // base case
//     if (num <= 1) {
//         return false;
//     }
    
//     for (let i = 2; i < num; i++) {
//         if (num % i === 0) {
//             return false;
//         }
//     }
    
//     return true;
// }

// function checkPrimeNumbers(arr) {
//     return arr.map(num => prime(num));
// }

// // Example usage
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const primeFlags = checkPrimeNumbers(numbers);
// console.log(primeFlags)