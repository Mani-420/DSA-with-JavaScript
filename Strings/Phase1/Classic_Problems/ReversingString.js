// Reversing a String in JavaScript

function reverseString(str) {
  let reversed = '';

  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }

  return reversed;
}

// Testing
let result = reverseString('madam');
console.log('The reversed string is :', result);

// -----------------------------------------------------------------
// Using built in methods

function reverseStringBuiltIn(str) {
  return str.split('').reverse().join('');
}

// Testing
let result2 = reverseStringBuiltIn('Shakila');
console.log('The reversed string is :', result2);
