/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
const clone = function (node, offset) {
  if (node === null) return null;
  const newNode = new TreeNode(node.val + offset);
  newNode.left = clone(node.left, offset);
  newNode.right = clone(node.right, offset);
  return newNode;
};

const generateTrees = function (n) {
  if (n === 0) return [];
  const res = new Array(n + 1);
  res[0] = [null];

  for (let i = 1; i <= n; i++) {
    res[i] = [];
    for (let j = 0; j < i; j++) {
      for (const nodeL of res[j]) {
        for (const nodeR of res[i - j - 1]) {
          const head = new TreeNode(j + 1);
          head.left = nodeL;
          head.right = clone(nodeR, j + 1);
          res[i].push(head);
        }
      }
    }
  }
  return res[n];
};