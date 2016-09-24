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
function dfs(root) {
  if (root === null) return [0, 0];
  const left = dfs(root.left);
  const right = dfs(root.right);
  const res = [0, 0];
  res[0] = Math.max(left[0], left[1]) + Math.max(right[0], right[1]);
  res[1] = left[0] + right[0] + root.val;
  return res;
}

const rob = function (root) {
  const res = dfs(root);
  // res[0] excluding the value of current node
  // res[1] including the value of current node
  return Math.max(res[0], res[1]);
};
