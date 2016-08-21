/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */

const preorderTraversal = function (root) {
  const result = [];
  const stack = [];

  let cur = root;

  while (cur !== null || stack.length > 0) {
    while (cur !== null) {
      result.push(cur.val);
      if (cur.right !== null) {
        stack.push(cur.right);
      }
      cur = cur.left;
      if (cur === null && stack.length > 0) {
        cur = stack.pop();
      }
    }
  }

  return result;
};

