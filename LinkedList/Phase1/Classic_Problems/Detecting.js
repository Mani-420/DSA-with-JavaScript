class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function hasCycle(head) {
  let slow = head;
  let fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) return true;
  }
  return false;
}

// Usage:
let cycleNode = new ListNode(1);
cycleNode.next = new ListNode(2);
cycleNode.next.next = new ListNode(3);
cycleNode.next.next.next = cycleNode; // Creates a cycle

let noCycleHead = new ListNode(1);
noCycleHead.next = new ListNode(2);
noCycleHead.next.next = new ListNode(3);

console.log('Cycle present:', hasCycle(cycleNode)); // true
console.log('Cycle present:', hasCycle(noCycleHead)); // false
