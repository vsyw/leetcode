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

function constructTree(index, preorder, inorder) {
  // console.log(preorderIndex);
  if (index >= preorder.length || index >= inorder.length) return null;
  
  const rootNode = new TreeNode(preorder[index]);
  console.log(rootNode);
  if (inorder.indexOf(rootNode.val) === -1) return null; 
  const currentRootIndex = inorder.indexOf(rootNode.val);

  rootNode.left = constructTree(index + 1, preorder, inorder);
  rootNode.right = constructTree(currentRootIndex + 1, preorder, inorder);
  
  return rootNode;
}

const buildTree = function (preorder, inorder) {
  return constructTree(0, preorder, inorder);
};

console.log(buildTree([0,1,3,6,7,4,2,5,8,9], [6,3,7,1,4,0,2,8,5,9]))