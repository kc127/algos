/*
Diameter of a Binary Tree

              A
          B        C
    D

Diamater = 3


                        A
                B
          C

Diameter = 2

                          A

Diameter = 0

*/
function diameterOfBinaryTree (root) {
  let maxDiameter = 0;

  function dfs (node) {
    if (!node) {
      return 0;
    }

    let leftDepth = dfs(node.left);
    let rightDepth = dfs(node.right);

    maxDiameter = Math.max(maxDiameter, leftDepth + rightDepth);

    return 1 + Math.max(leftDepth, rightDepth);
  }
  return dfs(root);
}

class TreeNode {
  constructor (value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}


/*
            1
        2       3

*/

let treeA = new TreeNode(1,
              new TreeNode(2),
              new TreeNode(3))

/*
                         1
                    2         3
              4         5

*/
let treeB = new TreeNode(1,
                new TreeNode(2,
                  new TreeNode(4),
                  new TreeNode(5)
                ),
                new TreeNode(3)
)

console.log(diameterOfBinaryTree(treeA), ' expect 2');
console.log(diameterOfBinaryTree(treeB), ' expect 3');
