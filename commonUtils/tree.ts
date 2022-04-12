class TreeNode {
  name: string;
  children: TreeNode[];
}

class Tree {
  root: TreeNode;
  /**
   *
   */
  constructor(rootNode: TreeNode) {
    this.root = rootNode;
  }
}
