class CircularQueue {
  constructor(capacity) {
    this.capacity = capacity;
    this.items = new Array(capacity);
    this.front = -1;
    this.rear = -1;
    this.count = 0;
  }

  // Check if queue is full
  isFull() {
    return this.count === this.capacity;
  }

  // Check if queue is empty
  isEmpty() {
    return this.count === 0;
  }

  // Add element to rear
  enqueue(element) {
    if (this.isFull()) {
      console.log('Queue is full! Cannot enqueue', element);
      return false;
    }

    if (this.isEmpty()) {
      this.front = 0;
      this.rear = 0;
    } else {
      this.rear = (this.rear + 1) % this.capacity;
    }

    this.items[this.rear] = element;
    this.count++;
    return true;
  }

  // Remove element from front
  dequeue() {
    if (this.isEmpty()) {
      console.log('Queue is empty! Cannot dequeue');
      return undefined;
    }

    let element = this.items[this.front];
    this.items[this.front] = undefined; // Clear the slot

    if (this.count === 1) {
      // Queue becomes empty
      this.front = -1;
      this.rear = -1;
    } else {
      this.front = (this.front + 1) % this.capacity;
    }

    this.count--;
    return element;
  }

  // Get front element without removing
  frontElement() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items[this.front];
  }

  // Get rear element
  rearElement() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items[this.rear];
  }

  // Get current size
  size() {
    return this.count;
  }

  // Display queue state
  display() {
    if (this.isEmpty()) {
      console.log('Queue is empty');
      return;
    }

    let result = [];
    let current = this.front;

    for (let i = 0; i < this.count; i++) {
      result.push(this.items[current]);
      current = (current + 1) % this.capacity;
    }

    console.log('Circular Queue:', result);
    console.log(
      `Front: ${this.front}, Rear: ${this.rear}, Count: ${this.count}`
    );
    console.log('Array state:', this.items);
  }
}

// Example usage
console.log('\n=== Circular Queue Operations ===');
let circularQueue = new CircularQueue(5);

// Fill the queue
circularQueue.enqueue(1);
circularQueue.enqueue(2);
circularQueue.enqueue(3);
circularQueue.enqueue(4);
circularQueue.enqueue(5);
circularQueue.display();

// Try to add when full
circularQueue.enqueue(6); // Should show "Queue is full"

// Remove some elements
console.log('\nDequeue:', circularQueue.dequeue()); // 1
console.log('Dequeue:', circularQueue.dequeue()); // 2
circularQueue.display();

// Add more elements (circular behavior)
console.log('\nAdding more elements:');
circularQueue.enqueue(6);
circularQueue.enqueue(7);
circularQueue.display();

console.log('Front element:', circularQueue.frontElement()); // 3
console.log('Rear element:', circularQueue.rearElement()); // 7
