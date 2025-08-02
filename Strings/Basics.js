// ============== STRING BASICS ==============

const str1 = 'Hello, World!';
console.log(str1);

// Object creation using String constructor
const str4 = new String('I am new here');
console.log(str4);

// Concatinate
console.log('\n--- String Concatination ---');
const strLast = str1 + ' ' + str4;
console.log(strLast);

// Data type of string literals
console.log('Primitive string:', typeof str1);
console.log('String object:', typeof str4);

// 1.2 String Properties
console.log('\n--- String Properties ---');
const text = 'JavaScript';
console.log('Length:', text.length);
console.log('Access by index:', text[0]);
console.log('charAt method:', text.charAt(4));
console.log('Last character:', text[text.length - 1]);

// 1.3 String Immutability
console.log('\n--- String Immutability ---');
let original = 'Hello';
let modified = original.toUpperCase();
console.log('Original:', original);
console.log('Modified:', modified);

// 1.4 String Comparison
console.log('\n--- String Comparison ---');
console.log('"apple" < "banana":', 'apple' < 'banana'); // true (lexicographic)
console.log('"Apple" < "apple":', 'Apple' < 'apple'); // true (ASCII comparison)
console.log(
  'Case-insensitive comparison:',
  'Apple'.toLowerCase() === 'apple'.toLowerCase()
);
