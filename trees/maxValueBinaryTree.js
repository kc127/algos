/*
            5
      1
  8       20

*/

class TreeNode {
  constructor (value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

// divide and conquer
function findMax1(root) {
  if (!root) return -Infinity;

  let leftMax = findMax(root.left);
  let rightMax = findMax(root.right);

  return Math.max(root.value, leftMax, rightMax);
}

// global variable
function findMax (root) {
  let globalMax = -Infinity;

  function dfs (node) {
    if (!node) return;

    globalMax = Math.max(node.value, globalMax);
    dfs(node.left);
    dfs(node.right);
  }

  dfs(root);
  return globalMax;
}


let treeA = new TreeNode(5,
              new TreeNode(1,
                new TreeNode(8),
                new TreeNode(20)
              ),
              null
);


console.log(findMax(treeA), ' expect 20');