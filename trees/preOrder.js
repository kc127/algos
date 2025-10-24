/*

                       A
          B                         C
    D            E            F            G
H                                  I         

inorder: L > C > R
preorder: C > L > R
postorder:  L > R > C

*/
class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

function preOrder (root, values = []) {
  if (!root) {
    return 0;
  }
  values.push(root.value);
  preOrder(root.left, values);
  preOrder(root.right, values);
  return values;
}


function inOrder (root, values = []) {
  if (!root) {
    return 0;
  }
  inOrder(root.left, values);
  values.push(root.value);
  inOrder(root.right, values);
  return values;
}

function postOrder (root, values = []) {
  if (!root) {
    return 0;
  }
  postOrder(root.left);
  postOrder(root.right);
  values.push(root.value);
  return values;
}

let treeB = new TreeNode("B",
                new TreeNode("D",
                  new TreeNode("H")
                ),
                new TreeNode("E")
);
let treeC = new TreeNode("C",
                new TreeNode("F",
                    null,
                    new TreeNode("I")
                ),
                new TreeNode("G")
);

let treeA = new TreeNode("A",
                treeB,
                treeC
);

console.log(inOrder(treeA));