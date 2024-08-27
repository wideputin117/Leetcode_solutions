/**We define the usage of capitals in a word to be right when one of the following cases holds:

    All letters in this word are capitals, like "USA".
    All letters in this word are not capitals, like "leetcode".
    Only the first letter in this word is capital, like "Google".

Given a string word, return true if the usage of capitals in it is right.
 */
/**Approach:
1-get the length of the string
2-intialise caps and lowercase char count to 0
3-run a loop and check for uppercase and lowercase and accordingly update above initialized counters.
4-Return true if caps count=length or lower count =length or if first char is upper and lower count=length-1
5-else return false */

var detectCapitalUse = function(word) {
    let len=word.length;
    let higherCount=0, lowerCount=0;
   
    for(let i=0;i<len;i++){
        if(word[i] === word[i].toUpperCase()){
            higherCount +=1;
        }else{
            lowerCount+=1;
        }
    } 

    if(higherCount === len){
        return true;
    }
    if(lowerCount=== len){
        return true;
    }
    if(higherCount === 1 && word[0] === word[0].toUpperCase() && lowerCount === len-1){
        return true;
    }
    return false;
};
console.log(detectCapitalUse("USA"));
console.log(detectCapitalUse("aAa"))
console.log(detectCapitalUse("UaA"))