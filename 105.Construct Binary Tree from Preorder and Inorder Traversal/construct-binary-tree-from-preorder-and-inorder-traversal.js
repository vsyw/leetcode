/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

function constructTree(preStart, inStart, inEnd, preorder, inorder) {
  // console.log(preorderIndex);
  if (preStart > preorder.length - 1 || inStart > inEnd) return null;
  
  const rootNode = new TreeNode(preorder[preStart]);
  const index = inorder.indexOf(rootNode.val);
  rootNode.left = constructTree(preStart + 1, inStart, index - 1, preorder, inorder);
  rootNode.right = constructTree(preStart + index - inStart + 1, index + 1, inEnd, preorder, inorder);
  
  return rootNode;
}

const buildTree = function (preorder, inorder) {
  return constructTree(0, 0, inorder.length - 1, preorder, inorder);
};

console.log(buildTree([0,1,3,6,7,4,2,5,8,9], [6,3,7,1,4,0,2,8,5,9]))