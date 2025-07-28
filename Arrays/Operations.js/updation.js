// Updation in an array

// Using Loop=========================================
function updateArray(arr, index, value) {
  if (index < 0 || index >= arr.length) {
    return -1;
  }
  arr[index] = value;
  return arr;
}

let myArray = [1, 2, 3, 4, 5];
let index = 4;
let newValue = 10;

updateArray(myArray, index, newValue);
console.log(myArray);

// Using Map=========================================
let myArray2 = [1, 2, 3, 4, 5];

function updateArrayWithMap(arr, index, value) {
  if (index < 0 || index >= arr.length) {
    return `Index out of bounds: ${index}. \nThere are only ${arr.length} elements in the array.`;
  }
  return arr.map((item, num) => (num === index ? value : item));
}
let updatedArray = updateArrayWithMap(myArray2, 6, 20);
console.log(updatedArray);
