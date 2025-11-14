function bfs (root) {
  if (!root) return [];
  let result = [];

  let queue = [root];

  while (queue.length) {
    let currNode = queue.shift();
    result.push(currNode.val);

    if (currNode.left) queue.push(currNode.left);
    if (currNode.right) queue.push(currNode.right);
  }

  return result;
}

function bfs (root) {
  if (!root) return [];

  let levels = [];
  let queue = [root];

  while (queue.length) {
    let size = queue.length;
    let level = [];
    for (let i = 0; i < size; i++) {
      let curr = queue.shift();
      if (curr.left) queue.push(curr.left);
      if (curr.right) queue.push(curr.right);
      level.push(curr.val);
    }
    levels.push(level);
  }
  return levels;
}