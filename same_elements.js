// Function to find duplicates in an array
function findDuplicates(arr) {
  // Create an empty object to store the duplicates
  const duplicates = {};

  // Iterate over the array
  for (let i = 0; i < arr.length; i++) {
    // Check if the current element is already in the duplicates object
    if (duplicates[arr[i]]) {
      // If it is, increment the count of the duplicate
      duplicates[arr[i]]++;
    } else {
      // If it is not, add the element to the duplicates object with a count of 1
      duplicates[arr[i]] = 1;
    }
  }

  // Return the duplicates object
  return duplicates;
}

// Example usage
const arr = [1, 2, 3, 4, 5, 1, 2, 3];
const duplicates = findDuplicates(arr);
console.log(duplicates);