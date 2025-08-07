// Remove duplicates from array
function removeDuplicates(arr) {
  return [...new Set(arr)];
}

let duplicateArray = [1, 2, 2, 3, 4, 4, 5];
console.log(removeDuplicates(duplicateArray));

// Find unique characters in string
function uniqueChars(str) {
  return [...new Set(str)];
}

console.log(uniqueChars('programming'));

// Check if array has duplicates
function hasDuplicates(arr) {
  return new Set(arr).size !== arr.length;
}

console.log(hasDuplicates([1, 2, 3, 4])); // false
console.log(hasDuplicates([1, 2, 2, 3])); // true
