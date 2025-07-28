// Deletion in an Array

// This function deletes a value at a specified index in an array
function deleteAtIndex(arr, index) {
  if (index < 0 || index >= arr.length) {
    return 'Index out of bounds';
  }
  arr.splice(index, 1);
  return arr;
}

let array = [1, 2, 3, 4, 5];
let index = 2;

let updatedArray = deleteAtIndex(array, index);
console.log(updatedArray);

// Delete at End of the array ---------------------------------------
let fruits = ['apple', 'banana', 'cherry'];

function deleteAtEnd(arr) {
  arr.pop();
  return arr;
}

let updatedFruits = deleteAtEnd(fruits);
console.log(updatedFruits);

// Delete at Start of the array ---------------------------------------
let vegetables = ['carrot', 'broccoli', 'spinach'];

function deleteAtStart(arr) {
  arr.shift();
  return arr;
}

let updatedVegetables = deleteAtStart(vegetables);
console.log(updatedVegetables);

// Complexity Analysis
// Time Complexity: O(1) for deleting at the end, O(n) for deleting at a specific index or start (due to shifting elements). to the input size.
// Space Complexity: O(1) as no additional space is used proportional to the input size.
