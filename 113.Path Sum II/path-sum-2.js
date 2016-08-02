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
 * @return {number[][]}
 */
function traverse(root, sum, backtrack, ans) {
  if (root) {
    backtrack.push(root.val);
    if (root.left === null && root.right === null && root.val === sum) {
      ans.push(backtrack.slice());
    }
    traverse(root.left, sum - root.val, backtrack, ans);
    traverse(root.right, sum - root.val, backtrack, ans);
    backtrack.pop();
  }
}

const pathSum = function (root, sum) {
  const backtrack = [];
  const ans = [];
  traverse(root, sum, backtrack, ans);
  return ans;
};

// console.log(pathSum, )