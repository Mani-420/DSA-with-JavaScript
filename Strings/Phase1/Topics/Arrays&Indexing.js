let str = 'Hello World';

// Accessing characters by index (0-based)
console.log(str[0]);
console.log(str[6]);
console.log(str[str.length - 1]);

// String length
console.log(str.length);

// Converting string to character array
let charArray = str.split('');
console.log(charArray);

// Iterating through characters
for (let i = 0; i < str.length; i++) {
  console.log(`Index ${i}: ${str[i]}`);
}

// Using for...of loop
for (let char of str) {
  console.log(char);
}
