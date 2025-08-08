// JavaScript arrays have built-in stack methods
let stack = [];

// Push operations
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack);

// Pop operation
let popped = stack.pop();
console.log('Popped:', popped); // 3
console.log(stack);

// Peek operation (check last element)
let top = stack[stack.length - 1];
console.log('Top:', top);

// Check if empty
let isEmpty = stack.length === 0;
console.log('Is empty:', isEmpty);
