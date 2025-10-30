class TreeNode {
  constructor (value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

function countLeafNodes (root) {
  if (!root) return 0;

  if (!root.left && !root.right) {
    return 1;
  }

  return countLeafNodes (root.left) + countLeafNodes(root.right);
}