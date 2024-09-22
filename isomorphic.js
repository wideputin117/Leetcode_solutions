/**
 * Given two strings s and t, determine if they are isomorphic.
Two strings s and t are isomorphic if the characters in s can be replaced to get t.

All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.

Example 1:
Input: s = "egg", t = "add"
Output: true
Explanation:
The strings s and t can be made identical by:

    Mapping 'e' to 'a'.
    Mapping 'g' to 'd'.
 */

    const isomorphic=(s,t)=>{
     let stringMap = new Array(256).fill(0);
     let targetMap = new Array(256).fill(0);

     for(let i=0;i< stringMap.length;i++){
        let charCodeOfString = s.charCodeAt(i);
        console.log(`charcode of s ${charCodeOfString}`)
        let charCodeOfTarget = t.charCodeAt(i);
        console.log(`charcode of t ${charCodeOfTarget}`)

        if(stringMap[charCodeOfString] !== targetMap[charCodeOfTarget]){
            return false;
        }stringMap[charCodeOfString] = i+1;
        
        targetMap[charCodeOfTarget] = i+1
     }
     return true

    }

    console.log(isomorphic(s = "egg", t = "add"))