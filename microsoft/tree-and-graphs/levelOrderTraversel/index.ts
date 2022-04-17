import { TreeNode } from '../../../commonUtils/binaryTree';
/**
 * Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).
 * Constraints:
 * 1. The number of nodes in the tree is in the range [0, 2000].
 * 2. -1000 <= Node.val <= 1000
 *
 * Level Order Traversal visits node at same level before visiting's node's children at lower level
 * @param root
 * @returns
 */
const levelOrderTraversal = (root: TreeNode): any => {
  if (!root) {
    return [];
  }

  const queue: TreeNode[] = [];
  queue.push(root);
  const result: any = [];
  while (queue.length > 0) {
    const size = queue.length; // keep track of size before changing at the below.
    const temp = [];
    for (let index = 0; index < size; index++) {
      const node = queue.shift(); //This is very expensive O(n) in JS. Use it cautiously
      temp.push(node.val); //visit node/print node

      // Now add children of this node to queue, so you can visit it later
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
    result.push(temp);
  }
  return result;
};

var twentyNode = new TreeNode(20, new TreeNode(15), new TreeNode(7));
var rootNode = new TreeNode(3, new TreeNode(9), twentyNode);
console.log(levelOrderTraversal(rootNode));
