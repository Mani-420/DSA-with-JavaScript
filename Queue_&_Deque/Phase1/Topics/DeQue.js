class Deque {
  constructor() {
    this.items = [];
    this.front = 0;
    this.rear = 0;
  }

  // Adding to Front and Rear

  addFront(element) {
    this.front--;
    this.items[this.front] = element;
  }

  addRear(element) {
    this.items[this.rear] = element;
    this.rear++;
  }

  // Removing to Front and Rear
  removeFront() {
    if (this.isEmpty()) {
      return 'The Queue is Empty';
    }
    let element = this.items[this.front];
    delete this.items[this.front];
    this.front++;
    return element;
  }

  removeRear() {
    if (this.isEmpty()) {
      return 'The Queue is Empty';
    }
    this.rear--;
    let element = this.items[this.rear];
    delete this.items[this.rear];
    return element;
  }

  // Peek Front and Rear
  peekFront() {
    return this.isEmpty() ? undefined : this.items[this.front];
  }

  // Last Element
  peekRear() {
    return this.isEmpty() ? undefined : this.items[this.rear - 1];
  }

  // Check for Empty
  isEmpty() {
    return this.rear === this.front;
  }

  // Checking the Size
  size() {
    return this.rear - this.front;
  }

  // Displaying the Queue Element
  display() {
    let result = [];
    for (let i = this.front; i < this.rear; i++) {
      result.push(this.items[i]);
    }
    console.log('Deque:', result);
  }
}

// Test Deque
console.log('\n=== Deque Operations ===');
let deque = new Deque();

deque.addRear(1);
deque.addRear(2);
deque.addFront(0);
deque.addFront(-1);
deque.display(); // [-1, 0, 1, 2]

console.log('Remove front:', deque.removeFront()); // -1
console.log('Remove rear:', deque.removeRear()); // 2
deque.display(); // [0, 1]
