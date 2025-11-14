class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function bfs (root) {
  if (!root) {
    return [];
  }

  let queue = [root];
  let result = [];

  while (queue.length > 0) {
    let currLevel = queue.length;
    result.push(currLevel);

    for (let i = 0; i < currLevel; i++) {
      let currNode = queue.shift();
      if (currNode.left) queue.push(currNode.left);
      if (currNode.right) queue.push(currNode.right);
    }
  }
  return result;
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

console.log(bfs(treeNode))
