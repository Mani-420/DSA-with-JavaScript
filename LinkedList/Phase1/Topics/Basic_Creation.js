class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }

  displayList() {
    let current = this;
    while (current) {
      console.log(current.value);
      current = current.next;
    }
  }
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

// Printing Node Values
head.displayList();

// head -> node2 -> node3 -> node4 -> node5 -> null
