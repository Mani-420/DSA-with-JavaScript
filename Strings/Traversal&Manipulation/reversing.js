//-----------------------Reversing a String-----------------------
// Method 1: Using built-in methods-------------------------------

console.log('\n--- Using Built-in Method ---');
function reverseBuiltInMethod(str) {
  return str.split('').reverse().join('');
}

// Testing Method 1:
const result = reverseBuiltInMethod('Hello');
console.log(result);

// Method 2: Using For-loop methods-------------------------------

console.log('\n--- Using For Loop Method ---');
function reverseLoop(str2) {
  let reversed = '';

  for (let i = str2.length - 1; i >= 0; i--) {
    reversed += str2[i];
  }
  return reversed;
}

// Testing Method 2:
const result2 = reverseLoop('Hello');
console.log(result2);
