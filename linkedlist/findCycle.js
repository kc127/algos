class Node {
  constructor (val, next = null) {
    this.val = val;
    this.next = next;
  }
}

function findCycle (head) {
  let fast = head;
  let slow = head;

  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;

    if (fast === slow) {
      return true;
    }
  }
  return false;
}

let ll1 = new Node(1,
  new Node(2,
    new Node (3,
      new Node(4))));
let ll2 = new Node(1);
ll2.next = ll2;

console.log(findCycle(ll1), ' expect false')
console.log(findCycle(ll2), ' expect true')

