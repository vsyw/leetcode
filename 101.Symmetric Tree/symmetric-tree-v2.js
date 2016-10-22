/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
const helper = function (left, right) {
  if (left === null || right === null) return left === right;
  if (left.val !== right.val) return false;
  return helper(left.left, right.right) && helper(left.right, right.left);
};

const isSymmetric = function (root) {
  return root === null || helper(root.left, root.right);
};
