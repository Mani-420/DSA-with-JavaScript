// Iterating through Map
let studentGrades = new Map([
  ['Alice', 85],
  ['Bob', 92],
  ['Charlie', 78],
  ['Diana', 96]
]);

// Iterate through keys
for (let name of studentGrades.keys()) {
  console.log(name);
}

// Iterate through values
for (let grade of studentGrades.values()) {
  console.log(grade);
}

// Iterate through key-value pairs
for (let [name, grade] of studentGrades.entries()) {
  console.log(`${name}: ${grade}`);
}

// Convert Map to Object
function mapToObject(map) {
  let obj = {};
  for (let [key, value] of map) {
    obj[key] = value;
  }
  return obj;
}

console.log(mapToObject(studentGrades));

// Convert Object to Map
function objectToMap(obj) {
  return new Map(Object.entries(obj));
}

// ---------------------Sets--------------------------------
let set1 = new Set([1, 2, 3, 4]);
let set2 = new Set([3, 4, 5, 6]);

// Union of two sets
function union(setA, setB) {
  return new Set([...setA, ...setB]);
}
console.log(union(set1, set2));

// Intersection of two sets
function intersection(setA, setB) {
  return new Set([...setA].filter((x) => setB.has(x)));
}
console.log(intersection(set1, set2));

// Difference of two sets
function difference(setA, setB) {
  return new Set([...setA].filter((x) => !setB.has(x)));
}
console.log(difference(set1, set2));

// Iterating through Set
for (let value of set1) {
  console.log(value);
}
