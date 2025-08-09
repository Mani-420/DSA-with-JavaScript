class SimpleQueue {
  constructor() {
    this.items = [];
  }

  enqueue(element) {
    this.items.push(element);
  }

  dequeue() {
    if (this.items.length === 0) {
      return undefined;
    }
    return this.items.shift(); // Remove from front
  }

  getFront() {
    return this.items[0];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }

  display() {
    console.log('Simple Queue:', this.items);
  }
}

// Note: shift() is O(n) operation, so this is less efficient
// Example usage
let queue = new SimpleQueue();

console.log('=== Basic Queue Operations ===');
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.display(); // [10, 20, 30]

console.log('Front element:', queue.getFront()); // 10
console.log('Size:', queue.size()); // 3

console.log('Dequeued:', queue.dequeue()); // 10
console.log('Dequeued:', queue.dequeue()); // 20
queue.display(); // [30]

console.log('Is empty:', queue.isEmpty()); // false
