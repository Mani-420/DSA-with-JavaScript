// Creating a Set
let set = new Set();

// Adding values
set.add(1);
set.add(2);
set.add(3);
set.add(2); // Duplicate - won't be added

console.log(set.size);

// Set can also be initialized with an array
let set2 = new Set([1, 2, 3, 4, 4, 5]); // Duplicates automatically removed
console.log(set2);

// Iterate over Sets
for (let value of set2) {
  console.log(value);
}

// Checking if value exists
console.log(set.has(2)); // true
console.log(set.has(5)); // false

// Deleting values
set.delete(1);
console.log(set.has(1));

// Converting Set to Array
let arrayFromSet = [...set2];
console.log(arrayFromSet);
