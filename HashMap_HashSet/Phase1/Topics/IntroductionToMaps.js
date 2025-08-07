// Creating a Map
let map = new Map();

// Adding key-value pairs
map.set('name', 'John');
map.set('age', 25);
map.set(1, 'number key');
map.set(true, 'boolean key');

console.log(map.size);

// Map can also be initialized with an array of [key, value] pairs
let map2 = new Map([
  ['apple', 5],
  ['banana', 3],
  ['orange', 8]
]);

// Getting values
console.log(map.get('name')); // 'John'
console.log(map.get('age')); // 25

// Checking if key exists
console.log(map.has('name')); // true
console.log(map.has('city')); // false

// Deleting entries
map.delete('age');
console.log(map.has('age')); // false

// Clear all entries
// map.clear();
