class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

function middleOfLinkedList(head) {
  if (!head) {
    return 0;
  }

  let slow = head;
  let fast = head;
  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow.value;
}

let l5 = new Node(5);
let l4 = new Node(4, l5);
let l3 = new Node(3, l4);
let l2 = new Node(2, l3);
let l1 = new Node(1, l2);

console.log(middleOfLinkedList(l1), ' expected 3');
console.log(middleOfLinkedList(l2), ' expected 4');