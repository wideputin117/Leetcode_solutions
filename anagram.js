// funtion to check if an two strings are anagram or not

const anagram=(str1,str2)=>{
    // check if both strings length is equal
   let l1= str1.length;
   let l2= str2.length;

   // check length
   if(l1!==l2){
    return false;
   }

   const sortedarr1 = str1.split('').sort().join('');
   const sortedarr2 = str2.split('').sort().join('');
   console.log(sortedarr1,sortedarr2);

   return sortedarr1 === sortedarr2;
     
}

console.log(anagram("manish","manseh"))