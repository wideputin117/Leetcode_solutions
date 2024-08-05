function containsAllAlphabets(sentence) {
    // Convert the sentence to lowercase to ignore case sensitivity
    const lowercaseSentence = sentence.toLowerCase();
    
    // Create a Set to keep track of unique characters found
    const charSet = new Set();

    // Iterate through each character in the sentence
    for (let char of lowercaseSentence) {
        // Check if the character is a letter from 'a' to 'z'
        if (char >= 'a' && char <= 'z') {
            charSet.add(char); // Add the character to the Set
        }
    }

    // Check if the size of the Set equals 26 (total letters in alphabet)
    return charSet.size === 26;
}

// Example usage:
const sentence1 = "The quick brown fox jumps over the lazy dog";
console.log(containsAllAlphabets(sentence1)); // Output: true

const sentence2 = "Hello world!";
console.log(containsAllAlphabets(sentence2)); // Output: false
