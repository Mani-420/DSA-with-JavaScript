class MinStack {
  constructor() {
    this.stack = []; // Main stack for all elements
    this.minStack = []; // Auxiliary stack for minimum values
  }

  push(val) {
    this.stack.push(val);

    // If minStack is empty or current value is <= current minimum
    if (this.minStack.length === 0 || val <= this.getMin()) {
      this.minStack.push(val);
    }
  }

  pop() {
    if (this.stack.length === 0) {
      return undefined;
    }

    let popped = this.stack.pop();

    // If popped element was the minimum, remove it from minStack too
    if (popped === this.getMin()) {
      this.minStack.pop();
    }

    return popped;
  }

  top() {
    if (this.stack.length === 0) {
      return undefined;
    }
    return this.stack[this.stack.length - 1];
  }

  getMin() {
    if (this.minStack.length === 0) {
      return undefined;
    }
    return this.minStack[this.minStack.length - 1];
  }

  isEmpty() {
    return this.stack.length === 0;
  }

  size() {
    return this.stack.length;
  }

  display() {
    console.log('Main Stack:', this.stack);
    console.log('Min Stack:', this.minStack);
  }
}

// Example usage
let minStack = new MinStack();

console.log('=== Min Stack Operations ===');
minStack.push(5);
console.log('After push(5):');
minStack.display();
console.log('Min:', minStack.getMin()); // 5

minStack.push(2);
console.log('\nAfter push(2):');
minStack.display();
console.log('Min:', minStack.getMin()); // 2

minStack.push(7);
console.log('\nAfter push(7):');
minStack.display();
console.log('Min:', minStack.getMin()); // 2

minStack.push(1);
console.log('\nAfter push(1):');
minStack.display();
console.log('Min:', minStack.getMin()); // 1

console.log('\nPop:', minStack.pop()); // 1
console.log('Min after pop:', minStack.getMin()); // 2

console.log('Pop:', minStack.pop()); // 7
console.log('Min after pop:', minStack.getMin()); // 2

console.log('Top:', minStack.top()); // 2
