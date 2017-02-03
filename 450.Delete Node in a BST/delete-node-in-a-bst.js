/* eslint-disable no-param-reassign */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} key
 * @return {TreeNode}
 */
const insertRightSubTreeToLeftMaxNode = function (leftNode, rightSubtree) {
  while (leftNode.right !== null) {
    leftNode = leftNode.right;
  }
  leftNode.right = rightSubtree;
};

const deleteNode = function (root, key) {
  if (root === null) return null;

  if (key < root.val) {
    root.left = deleteNode(root.left, key);
  } else if (key > root.val) {
    root.right = deleteNode(root.right, key);
  } else {
    if (root.left === null) {
      return root.right;
    } else if (root.right === null) {
      return root.left;
    } else {
      insertRightSubTreeToLeftMaxNode(root.left, root.right);
      return root.left;
    }
  }

  return root;
};
