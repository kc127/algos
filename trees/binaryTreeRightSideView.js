class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function rightSideView (root) {
  if (!root) return [];

  let rightSideNodes = [];
  let queue = [root];

  while (queue.length > 0) {
    let size = queue.length;
    let level = [];
    for (let i = 0; i < size; i++) {
      let curr = queue.shift();
      if (curr.left) queue.push(curr.left);
      if (curr.right) queue.push(curr.right);

      level.push(curr.val);
    }
    rightSideNodes.push(level[level.length - 1]);
  }
  return rightSideNodes;
}

function rightSideViewSlightlyOptimal (root) {
  if (!root) return [];
  let rightSideNodes = [];
  let queue = [root];

  while (queue.length) {
    let size = queue.length;

    for (let i = 0; i < size; i++) {
      let curr = queue.shift();
      if (i === size - 1) {
        rightSideNodes.push(curr.val);
      }
      if (curr.left) queue.push(curr.left);
      if (curr.right) queue.push(curr.right);
    }
  }

  return rightSideNodes;
}

/*
             5
       6             7
     8    9       10      11
  12   13

  level 0 = 1
  level 1 = 2
  level 2 = 4
  level 3 = 2


*/
let treeNode = new TreeNode(5,
                    new TreeNode(6,
                      new TreeNode(8,
                        new TreeNode(12),
                        new TreeNode(13)
                      ),
                      new TreeNode(9),
                    ),
                    new TreeNode(7,
                      new TreeNode(10),
                      new TreeNode(11)
                    )
)

console.log(rightSideView(treeNode))
