var minDepthBFS = function (root) {
  if (root === null) return 0;
  let queue = [];
  queue.push(root);
  let level = 1;
  let size;
  while (queue.length) {
    size = queue.length;
    for (let i = 0; i < size; i++) {
      let node = queue.shift();
      if (node.left === null && node.right === null) {
        return level;
      } else {
        if (node.left !== null) queue.push(node.left);
        if (node.right !== null) queue.push(node.right);
      }
    }
    level++;
  }
  return level;
}