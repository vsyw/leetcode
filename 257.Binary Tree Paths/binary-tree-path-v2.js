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
  if (root.left === null && root.right === null) res.push(tmp + node.val);
  if (root.left !== null) traverse(node.left, tmp + node.val + '->', res);
  if (root.right !== null) traverse(node.right, tmp + node.val + '->', res);
};

const binaryTreePaths = function (root) {
  const res = [];
  if (root) traverse(root, '', res);
  return res;
};
