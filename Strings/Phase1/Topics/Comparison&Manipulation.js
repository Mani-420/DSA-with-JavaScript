// String comparison
let str1 = 'apple';
let str2 = 'banana';
let str3 = 'apple';

console.log(str1 === str3);
console.log(str1 < str2);

// Case-insensitive comparison
let word1 = 'Hello';
let word2 = 'hello';
console.log(word1.toLowerCase === word2.toLowerCase());

// Basic string manipulation
let text = 'JavaScript Programming';

// Substring extraction
console.log(text.substring(0, 10));
console.log(text.slice(11));

// String replacement
let newText = text.replace('JavaScript', 'Python');
console.log(newText);

// Trimming whitespace
let messyStr = '  Hello World  ';
console.log(messyStr.trim());

// Converting case
console.log(text.toUpperCase());
console.log(text.toLowerCase());
