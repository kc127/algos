function countOddNodesRecursive (root) {
  let count = 0;

  function dfs (node) {
    if (!node) return;
    if (node.val % 2 === 1) count++;

    dfs(node.left);
    dfs(node.right);
  }

  dfs(root);
  return count;
}

function countOddNodesIterative (root) {
  if (!root) return 0;

  let result = 0;
  let stack = root ? [root] : [];

  while (stack.length > 0) {
    let curr = stack.pop();
    if (curr.val % 2 === 1) {
      result++;
    }
    if (curr.left) {
      stack.push(curr.left);
    }
    if (curr.right) {
      stack.push(curr.right);
    }
  }
  return result;
}

class TreeNode {
  constructor (val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

let treeA = new TreeNode(10,
              new TreeNode(5,
                new TreeNode(3),
                new TreeNode(7)
              ),
              new TreeNode(15,
                null,
                new TreeNode(18)
              )
);

console.log(countOddNodesIterative(treeA),' expect 4');