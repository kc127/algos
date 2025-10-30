const isOdd = (x) => (x % 2 === 1);

function countOdd(root) {

  let count = 0;

  function dfs (node) {
    if (!node) return 0;

    if (isOdd(node.value)) count++;

    dfs(node.left);
    dfs(node.right);
  }
  dfs(root);
  return count;
}

class TreeNode {
  constructor (value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}