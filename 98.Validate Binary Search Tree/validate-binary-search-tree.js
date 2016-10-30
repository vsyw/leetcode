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
const validate = function (root, prev) {
  if (root === null) return true;
  
  if (!validate(root.left, prev)) return false;
  if (prev !== null && prev.val !== null && root.val <= prev.val) return false;
  prev.val = root.val; prev.left = root.left; prev.right = root.right;
  return (validate(root.right, prev));
};

const isValidBST = function (root) {
  const prev = new TreeNode(null);
  return validate(root, prev);
};
