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
var maxDepth = function(root) {
  var count = 0;
  
  traverse(root, 0);
  return count;

  function traverse(node, num) {
    if (node !== null) {
      num += 1;
      traverse(node.left, num);
      traverse(node.right, num);
    } else {
      if (num > count) {
        count = num;
      }
    }
  }
};