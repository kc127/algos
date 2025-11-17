// https://leetcode.com/problems/populating-next-right-pointers-in-each-node/description/?envType=company&envId=facebook&favoriteSlug=facebook-thirty-days

class TreeNode {
  constructor (val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function connect (root) {
  let queue = root ? [root] : [];

  while (queue.length) {
    let size = queue.length;

    for (let i = 0; i < size; i++) {
      let curr = queue.shift();
      if (i < size - 1) {
        curr.next = queue[0];
      }

      if (curr.left) queue.push(curr.left);
      if (curr.right) queue.push(curr.right);
    }
  }
  return root;
}

let tree1 = new TreeNode(3,
                new TreeNode(9),
                new TreeNode(20,
                  new TreeNode(15),
                  new TreeNode(7)
                )
);

console.log(connect(tree1))
