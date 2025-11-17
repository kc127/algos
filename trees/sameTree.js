function sameTree (root1, root2) {
  if (!root1 && !root2) return true;
  if (!root1 || !root2) return false;

  if (root1.val !== root2.val) return false;

  return sameTree(root1.left, root2.left) && sameTree(root1.right, root2.right);
}

class TreeNode {
  constructor (val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

/*

tree1
                1
        2               3

tree2
                1
        2                3

tree3

                1
        3                 2


*/


let tree1 = new TreeNode(1,
                new TreeNode(2),
                new TreeNode(3)
);

let tree2 = new TreeNode(1,
                new TreeNode(2),
                new TreeNode(3)
);

let tree3 = new TreeNode(1,
                new TreeNode(3),
                new TreeNode(2)
);

console.log(sameTree(tree1, tree2));
console.log(sameTree(tree2, tree3));