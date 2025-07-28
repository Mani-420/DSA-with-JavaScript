// Searching in Arrays

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
}

let target = 5;
let index = linearSearch(array, target);
console.log(`The targetted element: ${target} is at index: ${index}`);

// ----------------------------------------------------
let fruits = ['apple', 'banana', 'cherry', 'date', 'elderberry'];
let targetFruit = 'cherry';

let result = fruits.includes(targetFruit);
console.log(result);

// ----------------------------------------------------
const arr = [1, 2, 3, 4, 3];
const place = arr.indexOf(3);
const notFound = arr.indexOf(5);
console.log(place);
console.log(notFound);

// ----------------------------------------------------------
// Complexity Analysis
// Linear Search: O(n)
// Time Complexity: O(n)
// Space Complexity: O(1)
