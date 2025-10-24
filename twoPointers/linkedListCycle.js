class Node {
  constructor(val, next = null) {
      this.val = val;
      this.next = next;
  }
}

function hasCycle(nodes) {
  if (!nodes) return true;
  let slow = nodes;
  let fast = nodes;
  while (fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;

      if (fast === slow) {
          return true;
      }
  }
  return false;
}