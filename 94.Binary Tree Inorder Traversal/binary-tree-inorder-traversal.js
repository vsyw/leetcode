/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
function traverse(root, result) {
  if (!root) return;
  traverse(root.left, result);
  result.push(root.val);
  traverse(root.right, result);
}

const inorderTraversal = function (root) {
  const result = [];
  traverse(root, result);
  return result;
};

