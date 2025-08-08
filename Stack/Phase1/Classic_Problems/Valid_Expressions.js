function isValidExpression(expression) {
  let stack = [];
  let pairs = {
    ')': '(',
    '}': '{',
    ']': '['
  };

  for (let char of expression) {
    if (char === '(' || char === '{' || char === '[') {
      stack.push(char);
    } else if (char in pairs) {
      if (stack.length === 0 || stack.pop() !== pairs[char]) {
        return false;
      }
    }
  }

  return stack.length === 0;
}

// Testing
console.log(isValidExpression('a + (b * c)')); // true
console.log(isValidExpression('x = [a + b] * {c - d}')); // true
console.log(isValidExpression('if (x > 0) { print(x) }')); // true
console.log(isValidExpression('array[index)'));
