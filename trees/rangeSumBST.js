/*
Range Sum of BST

                10
        5                 15
  3         7       null        18

high = 15, low = 7, return 10 + 7 + 15 = 32

*/

function rangeSumBST(root, low, high) {
  let globalSum = 0;

  function dfs(node, low, high) {
    if (!node) return;

    if (low < node.val) {
      dfs(node.left, low, high);
    }
    if (node.val >= low && node.val <= high) {
      globalSum += node.val;
    }
    if (high > node.val) {
      dfs(node.right, low, high);
    }
  }

  dfs(root, low, high);
  return globalSum;
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

console.log(rangeSumBST(treeA, 7, 15),' expect 32');
// console.log(rangeSumBST(treeA, 0, 0), ' expect 0');
