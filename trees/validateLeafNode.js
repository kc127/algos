function validateLeafNode (root, target) {
  if (!root) {
    return false;
  }

  if (root.value === target && !root.left && !root.right) {
    return true;
  }
  return validateLeafNode(root.left, target) || validateLeafNode(root.right, target);
}