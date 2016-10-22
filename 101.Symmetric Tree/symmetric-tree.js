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
const leftTraverse = function (root, res) {
  if (!root) {
    res.push('.');
    return null;
  }
  res.push(root.val);
  leftTraverse(root.left, res);
  leftTraverse(root.right, res);
  return root;
};

const rightTraverse = function (root, res) {
  if (!root) {
    res.push('.');
    return null;
  }
  res.push(root.val);
  rightTraverse(root.right, res);
  rightTraverse(root.left, res);
  return root;
};

const isSymmetric = function (root) {
  if (!root) return true;
  const left = [];
  const right = [];
  leftTraverse(root.left, left);
  rightTraverse(root.right, right);
  return left.join('') === right.join('');
};
