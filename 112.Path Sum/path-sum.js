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
 * @return {boolean}
 */
// function traverse(root, currentSum, sum) {
//   if (root) {
//     if (currentSum === sum) {
//       if (root.left === null && root.right === null) {
//         return true;
//       }
//     }
//     if (currentSum < sum) {
//       return traverse(root.left, currentSum + root.val, sum);
//       traverse(root.right, currentSum + root.val, sum);
//     }
//   }
// }

const hasPathSum = function (root, sum) {
  if (root === null) return false;
  if (root.left === null && root.right === null && sum - root.val === 0) {
    return true;
  }
  return hasPathSum(root.left, sum - root.val) ||
  hasPathSum(root.right, sum - root.val);
};
