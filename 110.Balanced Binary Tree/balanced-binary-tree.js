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
function depth(root) {
  if (!root) return 0;
  const left = depth(root.left);
  const right = depth(root.right);
  if (Math.abs(left - right) > 1 || left === -1 || right === -1) {
    return -1;
  }
  return Math.max(left, right) + 1;
}

const isBalanced = function (root) {
    if (!root) return true;
};