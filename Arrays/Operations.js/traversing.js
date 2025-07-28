// Traversing in an array
const array = [1, 2, 3, 4, 5];

// Using forEach
console.log('For Each Loop');
array.forEach((element, index) => {
  console.log(`Element at index ${index}: ${element}`);
});

// Using for loop
console.log('For Loop');
for (let i = 0; i < array.length; i++) {
  console.log(`Element at index ${i}: ${array[i]}`);
}

// Using for...of
console.log('For...of Loop');
for (const element of array) {
  console.log(`Element: ${element}`);
}

// Using for...in (not recommended for arrays)
console.log('For...in Loop');
for (const index in array) {
  console.log(`Element at index ${index}: ${array[index]}`);
}

// A little Theory
// forEach: Executes a provided function once for each array element.
// for loop: Traditional loop that allows more control (e.g., breaking out of the loop).
// for...of: Simplified syntax for iterating over iterable objects (like arrays).
// for...in: Iterates over the keys of an object (not recommended for arrays).
// Time Complexity: All methods have O(n) time complexity, where n is the number of elements in the array.
// Space Complexity: O(1) for all methods as they do not use additional space proportional
