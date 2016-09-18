/**
 * Definition for binary tree with next pointer.
 * function TreeLinkNode(val) {
 *     this.val = val;
 *     this.left = this.right = this.next = null;
 * }
 */

/**
 * @param {TreeLinkNode} root
 * @return {void} Do not return anything, modify tree in-place instead.
 */
const connect = function (root) {
  if (root === null) return;
  let pre = root;
  let cur = null;
  while (pre.left) {
    cur = pre;
    while (cur) {
      cur.left.next = cur.right;
      if (cur.next) {
        cur.right.next = cur.next.left;
      }
      cur = cur.next;
    }
    pre = pre.left;
  }
};