function binaryTreeMinDepth(root) {
  // WRITE YOUR BRILLIANT CODE HERE
  let minLevel = Infinity;
  let queue = root ? [root] : root;
  let level = -1;
  while (queue.length) {
      let size = queue.length;
      level += 1;
      for (let i = 0; i < size; i++) {
          let curr = queue.shift();
          if (!curr.left && !curr.right) {
              minLevel = Math.min(level, minLevel)
          }
          if (curr.left) queue.push(curr.left);
          if (curr.right) queue.push(curr.right);
      }
  }
  return minLevel;
}