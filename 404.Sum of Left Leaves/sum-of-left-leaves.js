/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
const sumOfLeftLeaves = function (root) {
  if (root === null) return 0;
  let ans = 0;
  if (!!root.left) {
    if (!root.left.left && !root.left.right) ans += root.left.val;
    else ans += sumOfLeftLeaves(root.left);
  }
  if (!!root.right) {
    ans += sumOfLeftLeaves(root.right);
  }
  return ans;
};
