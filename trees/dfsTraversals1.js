

class TreeNode {
  constructor (val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

/*

                          3
       9                                         20
                                      15                    7


{
  preOrder: [ 3, 9, 20, 15, 7 ],
  inOrder: [ 9, 3, 15, 20, 7 ],
  postOrder: [ 9, 15, 7, 20, 3 ]
}
*/

function dfs (root) {
  let resultPreOrder = []
  let resultInOrder = []
  let resultPostOrder = []


  function preOrder (node) {
    if (!node) return;

    resultPreOrder.push(node.val);
    preOrder(node.left);
    preOrder(node.right);
  }

  function inOrder(node) {
    if (!node) return;

    inOrder(node.left);
    resultInOrder.push(node.val);
    inOrder(node.right);
  }

  function postOrder(node) {
    if (!node) return;

    postOrder(node.left);
    postOrder(node.right);
    resultPostOrder.push(node.val);
  }

  preOrder(root);
  inOrder(root);
  postOrder(root);

  return {
    "preOrder": resultPreOrder,
    "inOrder": resultInOrder,
    "postOrder": resultPostOrder
  }
}

let tree1 = new TreeNode(3,
                new TreeNode(9),
                new TreeNode(20,
                  new TreeNode(15),
                  new TreeNode(7)
                )
)

console.log(dfs(tree1));


