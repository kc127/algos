/**https://leetcode.com/problems/add-two-numbers/description/?envType=company&envId=facebook&favoriteSlug=facebook-thirty-days */

var addTwoNumbers = function(l1, l2) {
  if (!l1 && !l2) return null;
  if (!l1) return l2;
  if (!l2) return l1;

  let sumNode = new ListNode(0);
  let head = sumNode;
  let carry = 0;
  while (l1 || l2) {
      let totalSum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry;
      let nodeVal = totalSum % 10 ;
      carry = Math.floor(totalSum/10);
      sumNode.next = new ListNode(nodeVal);
      sumNode = sumNode.next;

      l1 = l1 ? l1.next : null;
      l2 = l2 ? l2.next : null;
  }

  if (carry !== 0) {
      sumNode.next = new ListNode(carry);
  }

  return head.next;
};