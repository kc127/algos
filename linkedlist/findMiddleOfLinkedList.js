class Node {
  constructor (val, next = null) {
    this.val = val;
    this.next = next;
  }
}

function fastAndSlow(head) {
  let fast = head;
  let slow = head;

  while (fast !== null && fast.next !== null) {
    fast = fast.next.next;
    slow = slow.next;
  }
  return slow;
}

let ll1 = new Node(1,
  new Node(2,
    new Node (3,
      new Node(4))));
let ll2 = new Node(1);

console.log(fastAndSlow(ll1), ' expect 3')
console.log(fastAndSlow(ll2), ' expect 1')
