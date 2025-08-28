class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function reverseList(head) {
  let prev = null;
  let current = head;
  while (current) {
    let nextNode = current.next;
    current.next = prev;
    prev = current;
    current = nextNode;
  }
  return prev; // New head
}

function traverse(head) {
  let current = head;
  let result = [];
  while (current !== null) {
    result.push(current.value);
    current = current.next;
  }
  console.log(result.join(' -> '));
}

// Create nodes
let head = new ListNode(1);
let node2 = new ListNode(2);
let node3 = new ListNode(3);
let node4 = new ListNode(4);
let node5 = new ListNode(5);

// Link nodes
head.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;

// Usage:
console.log('Original List:');
traverse(head); // 1 -> 2 -> 3 -> 4 -> 5

let reversedHead = reverseList(head); // Reverses the list

console.log('Reversed List:');
traverse(reversedHead); // 5 -> 4 -> 3 -> 2 -> 1
