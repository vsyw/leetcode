/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
const levelOrder = function (root) {
  if (root === null) return [];
  const q = [];
  const level = 1;
  const res = [];
  let curLevel = level;

  q.push([level, root]);
  let tmp = [];
  
  while (q.length > 0) {
    const node = q.shift();
    if (node[1] && node[1].left !== null) q.push([node[0] + 1, node[1].left]);
    if (node[1] && node[1].right !== null) q.push([node[0] + 1, node[1].right]);
    
    if (node[0] === curLevel) {
      tmp.push(node[1].val);
    } else {
      res.push(tmp.slice());
      curLevel = node[0];
      tmp = [node[1].val];
    }
  }
  return [...res, tmp];
};