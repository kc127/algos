

class TreeNode {
  constructor (val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

/*

                          3 l = 0, min += 0, max = 0;
       9 l = 1, min = -1                                        20, max = 1
                                      15                    7



*/

function verticalOrder (root) {
  let levelNodes = {};
  let result = [];

  let queue = root ? [[root, 0]] : [];
  let minLevel = Infinity;
  let maxLevel = -Infinity;

  while (queue.length) {
    let size = queue.length;
    for (let i = 0; i < size; i++) {
      let [node, level] = queue.shift();
      minLevel = Math.min(minLevel, level);
      maxLevel = Math.max(maxLevel, level);

      if (levelNodes[level] === undefined) {
        levelNodes[level] = [];
      }
      levelNodes[level].push(node.val);

      if (node.left) queue.push([node.left, level - 1]);
      if (node.right) queue.push([node.right, level + 1]);
    }
  }

  for (let i = minLevel; i <= maxLevel; i++) {
    result.push(levelNodes[i]);
  }

  return result;
};


let tree1 = new TreeNode(3,
                new TreeNode(9),
                new TreeNode(20,
                  new TreeNode(15),
                  new TreeNode(7)
                )
);

console.log(verticalOrder(tree1));
