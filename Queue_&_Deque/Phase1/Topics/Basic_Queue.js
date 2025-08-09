class Queue {
  constructor() {
    this.items = [];
    this.front = 0;
    this.rear = 0;
  }

  enqueue(element) {
    this.items[this.rear] = element;
    this.rear++;
  }

  dequeue() {
    if (this.isEmpty()) {
      return 'The Queue is Empty';
    }
    let annihilatedItem = this.items[this.front];
    delete this.items[this.front];
    this.front++;
    return annihilatedItem;
  }

  getFront() {
    if (this.isEmpty()) {
      return 'The Queue is Empty';
    }
    return this.items[this.front];
  }

  size() {
    return this.rear - this.front;
  }

  clear() {
    this.items = [];
    this.front = 0;
    this.rear = 0;
  }

  isEmpty() {
    return this.rear === this.front;
  }

  display() {
    let result = [];
    for (let i = this.front; i < this.rear; i++) {
      result.push(this.items[i]);
    }
    console.log('Queue: ', result);
  }
}

// Example usage
let queue = new Queue();

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
