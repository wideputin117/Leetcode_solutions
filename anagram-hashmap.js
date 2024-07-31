var isAnagram = function(s, t) {
     
// let sortedS =  s.split("").sort();
   
// let sortedT =  t.split("").sort();
 
//  if(sortedS.join("") ===sortedT.join("")){
//     return true
//  }
//  return false
 
if(s.length !== t.length){
    return false;
}
let sortedS =  s.split("");
   
let sortedT =  t.split("");
let charS={};
let charT={};

for(let char of sortedS){
  charS[char] = (charS[char] || 0)+1; // check for frequency if the char is already in the map and add 1 to it
}
for(let char of sortedT){
    charT[char]= (charT[char] || 0)+1;
}
for(let char in charS){
    if(charS[char]!==charT[char]){
        return false;
    }
 }
 return true;
};

let s = "car", t = "car";
console.log(isAnagram(s,t))