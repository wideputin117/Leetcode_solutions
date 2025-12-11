function haveSameCharsSameLength(str1, str2) {
  // If lengths are different, they can't have the same characters.
  if (str1.length !== str2.length) {
    return false;
  }

  // Sort the characters of both strings. If they are anagrams,
  // the sorted versions will be identical.
  const sortedStr1 = str1.split('').sort().join('');
  const sortedStr2 = str2.split('').sort().join('');

  return sortedStr1 === sortedStr2;
}

// Example Usage:
const string1 = "listen";
const string2 = "silent";
const string3 = "hello";
const string4 = "olleh";
const string5 = "world";

console.log(haveSameCharsSameLength(string1, string2)); // Output: true
console.log(haveSameCharsSameLength(string3, string4)); // Output: true
console.log(haveSameCharsSameLength(string1, string5)); // Output: false