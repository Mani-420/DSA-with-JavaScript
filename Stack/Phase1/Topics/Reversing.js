// Revering a String---------------------------------------

function reverseString(str) {
  let stack = [];
  let reversed = '';

  for (let char of str) {
    stack.push(char);
  }

  while (stack.length > 0) {
    reversed += stack.pop();
  }

  return reversed;
}

// Testing
console.log(reverseString('hello')); // "olleh"
console.log(reverseString('JavaScript'));

// Revering an Array---------------------------------------

function reverseArray(arr) {
  let stack = [];
  let reversed = [];

  for (let element of arr) {
    stack.push(element);
  }

  while (stack.length > 0) {
    reversed.push(stack.pop());
  }

  return reversed;
}

// Testing
console.log(reverseArray([1, 2, 3, 4, 5])); // [5, 4, 3, 2, 1]
console.log(reverseArray(['a', 'b', 'c']));
