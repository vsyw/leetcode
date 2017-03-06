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
  if (root === null) return 0;
  return Math.max(depth(root.left) + 1, depth(root.right) + 1);
}

const isBalanced = function (root) {
  if (root === null) return true;
  const left = depth(root.left);
  const right = depth(root.right);

  return Math.abs(left - right) <= 1 && isBalanced(root.left) && isBalanced(root.right);
};
