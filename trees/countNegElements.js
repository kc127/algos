function countNegElements (root) {
  if (!root) return 0;
  if (root.value < 0) return 1;

  return countNegElements (root.left) + countNegElements(root.right);
}