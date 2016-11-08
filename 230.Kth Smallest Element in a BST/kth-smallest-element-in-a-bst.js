/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
const inorderTraverse = function (node, k, res) {
  if (node.left) inorderTraverse(node.left, k, res);
  if (res.length === k) return;
  res.push(node.val);
  if (node.right) inorderTraverse(node.right, k, res);
  return;
};

const kthSmallest = function (root, k) {
  const res = [];
  inorderTraverse(root, k, res);
  // console.log(res);
  return res.pop();
};
