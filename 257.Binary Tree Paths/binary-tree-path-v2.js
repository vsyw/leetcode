/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
const traverse = function (node, tmp, res) {
  if (node.left === null && node.right === null) res.push(tmp + node.val);
  if (node.left !== null) traverse(node.left, tmp + node.val + '->', res);
  if (node.right !== null) traverse(node.right, tmp + node.val + '->', res);
};

const binaryTreePaths = function (root) {
  const res = [];
  if (root) traverse(root, '', res);
  return res;
};
