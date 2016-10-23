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
const backtrack = function (root, sum, res) {
  if (!root) return;
  if (sum - root.val === 0) {
    res[0] += 1;
  }

  backtrack(root.left, sum - root.val, res);
  backtrack(root.right, sum - root.val, res);

};

const bfs = function (root, sum, res) {
  const queue = [root];
  while (queue.length) {
    const node = queue.shift();
    if (!!node) {
      queue.push(node.left);
      queue.push(node.right);
      backtrack(node, sum, res);
    }
  }
};

const pathSum = function (root, sum) {
  const res = [0];
  bfs(root, sum, res);
  return res[0];
};
