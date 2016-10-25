/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number}
 */
const findPath = function (root, sum) {
  let res = 0;
  if (root === null) return res;
  if (sum === root.val) res++;
  res += findPath(root.left, sum - root.val);
  res += findPath(root.right, sum - root.val);
  return res;
};

const pathSum = function (root, sum) {
  if (root === null) return 0;
  return findPath(root, sum) + pathSum(root.left, sum) + pathSum(root.right, sum);
};
