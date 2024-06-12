var removeElement = function(nums, val) {
    let i = 0;
    while (i < nums.length) {
        if (nums[i] === val) {
            nums.splice(i, 1);
        } else {
            i++;
        }
    }
    return nums;
};

console.log(removeElement([2, 3, 1, 4,2,3], 2));



function match(sentence, word){
    let sentenceLower = sentence.toLowerCase();
    let wordLower = word.toLowerCase();

    let words = sentenceLower.split(" ");

    
        if(words.includes(wordLower)){
            return true;
        }
        return false;
}

const sentence = "The quick brown fx jumps over the lazy dog.";
const word = "fox";

const found = match(sentence, word);

if (found) {
  console.log("The word '" + word + "' was found in the sentence.");
} else {
  console.log("The word '" + word + "' was not found in the sentence.");
}


function removeAsterisks(sentence) {
    // Replace all '*' characters with an empty string.
    return sentence.replace(/\*/g, '');
  }
  
  // Example usage:
  const originalSentence = "This sentence has *asterisks* in it.";
  const cleanedSentence = removeAsterisks(originalSentence);
  
  console.log("Original sentence:", originalSentence);
  console.log("Cleaned sentence:", cleanedSentence);