/**Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

Each letter in magazine can only be used once in ransomNote. */

var canConstruct = function(ransomNote, magazine) {
  // check if each letter in ransomeNote is in magazine if it is we can generate the the ransomnote from magazine
    let newRansom= ransomNote.split("");
    let newMag = magazine.split("");
     let countRansom = {};
     newRansom.forEach(element => {
        countRansom[element]= (countRansom[element]||0)+1;
     });
     console.log(countRansom);
     let countMag = {};
     newMag.forEach((element)=>{
        countMag[element]= (countMag[element]||0)+1;
     })
     console.log(countMag);
     for(let char in countRansom){
        console.log(countRansom[char]);
        if(!countMag[char] || countMag[char]<countRansom[char]){
            return false;
        }
     }
     return true;

};

console.log(canConstruct("manihs","manishbfbismhdsi"))