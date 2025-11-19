class Node {
  constructor (val, next = null) {
    this.val = val;
    this.next = next;
  }
}

function findLength (head) {
  if (!head) return 0;

  let curr = head;
  let length = 0;

  while (curr) {
    length += 1;
    curr = curr.next;
  }
  return length;
}

let ll1 = new Node(1,
  new Node(2,
    new Node (3,
      new Node(4))));
let ll2 = new Node(1);

console.log(findLength(ll1), ' expect 4')
console.log(findLength(ll2), ' expect 1')
