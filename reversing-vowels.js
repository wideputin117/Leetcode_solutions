var reverseVowels = function(s) {
    s = s.split("");
    let left = 0; // left pointer
    let right = s.length - 1;

   
    while (left < right) {
        // Move the left pointer to the next vowel
        while (left < right && !("aeiouAEIOU".includes(s[left]))) {
            left++;
        }

        // Move the right pointer to the previous vowel
        while (left < right && !("aeiouAEIOU".includes(s[right]))) {
            right--;
        }

        // Swap vowels
        if (left < right) {
            let temp = s[left];
            s[left] = s[right];
            s[right] = temp;
            left++;
            right--;
        }
    }
    return s.join("");
};

console.log(reverseVowels("leetcode"));
console.log(reverseVowels("race icar"));