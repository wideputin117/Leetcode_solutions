/**Given a pattern and a string s, find if s follows the same pattern.

Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in s.
Example 1:

Input: pattern = "abba", s = "dog cat cat dog"
Output: true

Example 2:

Input: pattern = "abba", s = "dog cat cat fish"
Output: false

Example 3:

Input: pattern = "aaaa", s = "dog cat cat dog"
Output: false
 */

let matchPattern=(pattern, s)=>{
    const words = s.split(" ");
    // base case
    if(pattern.length !== words.length)return false;

    // creating two hashmap to keep track of the values and keys and store them
    let charToWord = new Map();
    let wordToChar = new Map();

    // run a loop till the length of pattern length;
    for(let i =0; i< pattern.length;i++){
        const char = pattern[i];
        const word = words[i];

        // using if else to check and setting the key value in the map
        if(charToWord.has(char)){
            if(charToWord.get(char) !== word)return false; // this get method will get the value of key from the map and check with the current word
        }else{
            charToWord.set(char,word);
        }
        if(wordToChar.has(word)){
            if(wordToChar.get(word)!== char)return false;
        }else{
            wordToChar.set(word,char)
        }
    }
    return true;
}

let ans = matchPattern(pattern = "abba", s = "dog cat cat dog");
let ans2 = matchPattern(pattern = "abba", s = "dog  cat dog");
console.log(ans,ans2)