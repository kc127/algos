class TreeNode {
  constructor (value, left, right) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

function countElems (root) {
  if (!root) return 0;

  return (1 + countElems(root.left) + countElems(root.right));
}