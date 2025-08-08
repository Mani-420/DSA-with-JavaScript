class Stack {
  constructor() {
    this.items = [];
  }

  push(element) {
    this.items.push(element);
  }

  pop() {
    if (this.isEmpty()) {
      return 'Stack is Empty';
    }
    return this.items.pop();
  }

  peek() {
    if (this.isEmpty()) {
      return 'Stack is Empty';
    }
    return this.items[this.items.length - 1];
  }

  // Check if stack is empty
  isEmpty() {
    return this.items.length === 0;
  }

  // Get stack size
  size() {
    return this.items.length;
  }

  // Clear all elements
  clear() {
    this.items = [];
  }

  // Display stack contents
  display() {
    console.log(this.items);
  }
}

// Example usage
let stack = new Stack();
// Push operations
stack.push(10);
stack.push(20);
stack.push(30);
console.log('After pushes:');
stack.display();

// Peek operation
console.log('Top element:', stack.peek());

// Pop operations
console.log('Popped:', stack.pop()); // 30
console.log('Popped:', stack.pop()); // 20
stack.display();

// Other operations
console.log('Size:', stack.size()); // 1
console.log('Is empty:', stack.isEmpty());
