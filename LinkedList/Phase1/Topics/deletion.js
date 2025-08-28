class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function deleteNode(head, target) {
  if (!head) return null;
  if (head.value === target) return head.next;

  let current = head;
  while (current.next) {
    if (current.next.value === target) {
      current.next = current.next.next;
      break;
    } else {
      current = current.next;
    }
  }
  return head;
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
console.log('Before Deleting Node:');
traverse(head); // 1 -> 2 -> 3 -> 4 -> 5

let newHead = deleteNode(head, 1);

console.log('After Deleting Node:');
traverse(newHead); // 2 -> 3 -> 4 -> 5
