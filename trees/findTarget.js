class TreeNode {
  constructor (value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

function findTarget (root, target) {
  if (!root) return null;

  if (root.value === target) {
    return root;
  }

  const left = findTarget (root.left, target);
  if (left) return left;
  const right = findTarget (root.right, target);
  return right;
}
