/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
  var child = null;
  doFlatten(root);
  function doFlatten(root) {
    if (!root) return;
    doFlatten(root.right);
    doFlatten(root.left);
    root.right = child;
    root.left = null;
    child = root;
  }
};

