// Insertion in an Array

// This function inserts a value at a specified index in an array
function insertAtIndex(arr, index, value) {
  if (index < 0 || index > arr.length) {
    return 'Index out of bounds';
  }
  arr.splice(index, 0, value);
  return arr;
}

let array = [1, 2, 3, 4, 5];
let index = 2;
let value = 10;

let updatedArray = insertAtIndex(array, index, value);
console.log(updatedArray);

// Insert at End of the array ---------------------------------------
let fruits = ['apple', 'banana', 'cherry'];

function insertAtEnd(arr, value) {
  arr.push(value);
  return arr;
}

let newFruit = 'date';
let updatedFruits = insertAtEnd(fruits, newFruit);
console.log(updatedFruits);

// Insert at Start of the array ---------------------------------------
let vegetables = ['carrot', 'broccoli', 'spinach'];

function insertAtStart(arr, value) {
  arr.unshift(value);
  return arr;
}

let newVegetable = 'kheera';
let updatedVegetables = insertAtStart(vegetables, newVegetable);
console.log(updatedVegetables);

// Complexity Analysis
// Time Complexity: O(1) for inserting at the end, O(n) for inserting at a specific index or start (due to shifting elements). to the input size.
// Space Complexity: O(1) as no additional space is used proportional to the input size.
