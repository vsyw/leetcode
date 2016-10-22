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
  const res = [];
  const queue = [root];
  let needToRevert = false;

  while (queue.length) {
    const len = queue.length;
    const tmp = [];
    for (let i = 0; i < len; i++) {
      const node = queue.shift();
      tmp.push(node.val);
      if (!!node.left) queue.push(node.left);
      if (!!node.right) queue.push(node.right);
    }
    if (needToRevert) {
      res.push(tmp.reverse());
      needToRevert = !needToRevert;
    } else {
      res.push(tmp);
      needToRevert = !needToRevert;
    }
  }
  return res;
};
