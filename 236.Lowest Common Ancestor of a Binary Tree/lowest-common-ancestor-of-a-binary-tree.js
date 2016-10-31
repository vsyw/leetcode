/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
// function TreeNode(val) {
//   this.val = val;
//   this.left = this.right = null;
// }
// const b1 = new TreeNode(2);
// const b2 = new TreeNode(1);
// const b3 = new TreeNode(3);
// const b4 = new TreeNode(4);

// const t1 = b1;
// t1.right = b2;
// t1.left = b3;
// t1.right.right = b4;
const lowestCommonAncestor = function (root, p, q) {
  if (!root || root === p || root === q) return root;
  const left = lowestCommonAncestor(root.left, p, q);
  const right = lowestCommonAncestor(root.right, p, q);
  if (left && right) return root;
  return !left ? right : left;
};

console.log(lowestCommonAncestor(t1, b2, b4));
// console.log(k);
