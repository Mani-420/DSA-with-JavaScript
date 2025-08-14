class QueueUsing2Stacks {
  constructor() {
    this.inStack = [];
    this.outStack = [];
  }

  // Enqueue
  enqueue(element) {
    this.inStack.push(element);
  }

  // Dequeue
  dequeue() {
    if (this.isEmpty()) {
      return 'Queue is empty';
    }

    // If outStack is empty, move all elements from inStack
    if (this.outStack.length === 0) {
      while (this.inStack.length > 0) {
        this.outStack.push(this.inStack.pop());
      }
    }
    return this.outStack.pop();
  }

  // Get 1st Element
  getFront() {
    if (this.isEmpty()) {
      return 'Queue is empty';
    }

    // If outStack is empty, move all elements from inStack
    if (this.outStack.length === 0) {
      while (this.inStack.length > 0) {
        this.outStack.push(this.inStack.pop());
      }
    }
    return this.outStack[this.outStack.length - 1];
  }

  size() {
    return this.inStack.length + this.outStack.length;
  }

  display() {
    console.log('InStack (for enqueue):', this.inStack);
    console.log('OutStack (for dequeue):', this.outStack);

    // Show logical queue order
    let queueOrder = [...this.outStack].reverse().concat(this.inStack);
    console.log('Logical queue order:', queueOrder);
  }

  isEmpty() {
    return this.inStack.length === 0 && this.outStack.length === 0;
  }
}

// Test the optimized version
console.log('\n=== Queue Using Stacks (Optimized) ===');
let queueStacks = new QueueUsing2Stacks();

queueStacks.enqueue(1);
queueStacks.enqueue(2);
queueStacks.enqueue(3);
queueStacks.display();

console.log('Dequeue:', queueStacks.dequeue()); // 1
console.log('Front:', queueStacks.getFront()); // 2
queueStacks.display();

queueStacks.enqueue(4);
queueStacks.enqueue(5);
console.log('Dequeue:', queueStacks.dequeue()); // 2
queueStacks.display();
