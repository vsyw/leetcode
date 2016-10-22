/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
const zigzagLevelOrder = function (root) {
  if (!root) return [];

  // let node = root;
  const queue = [[root, 1]];
  const level = {};

  while(queue.length) {
    const node = queue.shift();
    if (level.hasOwnProperty(node[1])) {
      level[node[1]].push(node[0].val);
    } else {
      level[node[1]] = [node[0].val];
    }
    if (!!node[0].left) queue.push([node[0].left, node[1] + 1]);
    if (!!node[0].right) queue.push([node[0].right, node[1] + 1]);
  }
  
  const res = [];

  for (const key in level) {
    if (parseInt(key, 10) % 2 === 0) {
      res.push(level[key].reverse());
    } else {
      res.push(level[key]);
    }
  }
  return res;
};
