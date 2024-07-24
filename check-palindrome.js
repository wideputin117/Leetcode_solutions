var isPalindrome = function(s) {
    let sorted = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "").split(""); 
    let len = sorted.length-1;
    console.log(sorted);
    for(let i = 0 ; i < len/2;i++){
        if(sorted[i] !== sorted[len-i]){
            return false;
        }
    }
    return true;
};

console.log(isPalindrome("A man, a plan, a canal: Panama"));
console.log(isPalindrome("A man, a plan, a canal: Pan"))