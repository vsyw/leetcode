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
function dfsHeight(root) {
  if (root === null) return 0;

  const leftHeight = dfsHeight(root.left);
  if (leftHeight === -1) return -1;

  const rightHeight = dfsHeight(root.right);
  if (rightHeight === -1) return -1;
  
  if (Math.abs(leftHeight - rightHeight) > 1) return -1;
  return Math.max(leftHeight, rightHeight) + 1;
}

const isBalanced = function (root) {
  return dfsHeight(root) !== -1;
};
