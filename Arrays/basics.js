// Array in JavaScript --------------------------
let fruits = ['Apple', 'Banana', 'Cherry'];
console.log(fruits);

// Access the elements of an array --------------------------
// console.log(fruits[0]);
// console.log(fruits[1]);
// console.log(fruits[2]);

// Add elements of an array --------------------------
// fruits.push('Date'); // Adds 'Date' to the end of the array
// console.log(fruits);
// fruits.unshift('Mango'); // Adds 'Mango' to the beginning of the array
// console.log(fruits);

// Remove elements of an array --------------------------
// fruits.pop(); // Removes the last element
// console.log(fruits);
// fruits.shift(); // Removes the first element
// console.log(fruits);

// length property of an array --------------------------
// console.log(fruits.length);

// check if a variable is an array --------------------------
// console.log(Array.isArray(fruits));

// iterate over an array --------------------------
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// Use of forEach method --------------------------
fruits.forEach((fruit, index) => {
  console.log(`The fruit at ${index} is ${fruit}`);
});

// Concatenating two arrays --------------------------
let citrus = ['Orange', 'Lemon'];
// let allFruits = fruits.concat(citrus);
// let allFruits = citrus.concat(fruits);

let allFruits = [...fruits, ...citrus]; // Using spread operator to concatenate

console.log(allFruits);
