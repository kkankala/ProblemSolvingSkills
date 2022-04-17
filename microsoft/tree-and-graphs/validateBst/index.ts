import { TreeNode } from '../../../commonUtils/binaryTree';

/**
 * Given the root of a binary tree, determine if it is a valid binary search tree (BST).
 * A valid BST is defined as follows:
 * 1. The left subtree of a node contains only nodes with keys less than the node's key.
 * 2. The right subtree of a node contains only nodes with keys greater than the node's key.
 * 3. Both the left and right subtrees must also be binary search trees.
 * Runtime: O(N), Space: O(N)
 * @param treeNode
 * @returns
 */
const isValidBST = (treeNode: TreeNode) => {
  if (!treeNode) return true;
  function dfs(root: TreeNode, min: any, max: any): boolean {
    if (!root) return true;
    if (root.val <= min || root.val >= max) return false;
    return dfs(root.left, min, root.val) && dfs(root.right, root.val, max);
  }

  return dfs(treeNode, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER);
  //   return inOrder(treeNode,null);
};

// // you can use Pre Order traversal to validate binary tree
// let validateNode = (
//   rootNode: TreeNode,
//   min: number = Number.MIN_SAFE_INTEGER,
//   max: number = Number.MAX_SAFE_INTEGER
// ): boolean => {
//   if (!rootNode) return true;
//   if (rootNode.val <= min || rootNode.val >= max) return false;
//   return (
//     validateNode(rootNode.left, min, rootNode.val) &&
//     validateNode(rootNode.right, rootNode.val, max)
//   );
// };

// //you can use InOrder traversal to validate binary tree
// let inOrder = (
//   rootNode: BinaryTreeNode<number>,
//   prevNode?: BinaryTreeNode<number>
// ): boolean => {
//   if (rootNode === null) {
//     return true;
//   }
//   if (!inOrder(rootNode.left)) {
//     return false;
//   }
//   if (prevNode && rootNode.data <= prevNode.data) {
//     return false;
//   }

//   return inOrder(rootNode.right);
// };
var rootNode = new TreeNode(0);
rootNode.left = new TreeNode(1);
let fourNode = new TreeNode(4);
fourNode.left = new TreeNode(3);
fourNode.right = new TreeNode(6);

if (isValidBST(rootNode)) {
  debugger;
}
debugger;
