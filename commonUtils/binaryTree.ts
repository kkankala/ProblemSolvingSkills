//https://4db.github.io/2018/07/24/binary-tree-es6/

export class BinaryTreeNode<T> {
  data: T;
  left: any;
  right: any;
  /**
   *
   */
  constructor(data: T) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

export class BinaryTree<T> {
  root: BinaryTreeNode<T>;
  constructor() {
    this.root = null;
  }

  insert(data: T) {
    const newNode = new BinaryTreeNode<T>(data);
    if (!this.root) {
      this.root = newNode;
      return true;
    }
    this.insertNode(this.root, newNode);
    return true;
  }

  /**
   * This will recursively find correct node and insert data. It makes sure to have data in the order -- all left descendants <= n < all right descendants
   * @param node Parent Node
   * @param newNode Current new Node
   * @returns true or false
   */
  private insertNode(node: BinaryTreeNode<T>, newNode: BinaryTreeNode<T>) {
    if (newNode.data <= node.data) {
      if (!node.left) {
        node.left = newNode;
        return true;
      }
      this.insertNode(node.left, newNode);
      return true;
    }
    if (!node.right) {
      node.right = newNode;
      return true;
    }
    this.insertNode(node.right, newNode);
    return true;
  }

  remove(data: T) {
    return (this.root = this.removeNode(this.root, data));
  }

  removeNode(node: BinaryTreeNode<T>, data: T): BinaryTreeNode<T> | null {
    if (!node || (!node.left && !node.right)) {
      return null;
    }

    if (data < node.data) {
      node.left = this.removeNode(node.left, data);
      return node;
    }
    if (!node.left) {
      return node.right;
    }
    if (!node.right) {
      node.left;
    }

    var tempNode = this.findMinNode(node.right);
    node.data = tempNode.data;
    node.right = this.removeNode(node.right, tempNode.data);
    return node;
  }

  findMinNode(node: BinaryTreeNode<T>): any {
    return node.left === null ? node : this.findMinNode(node.left);
  }

  traverseInOrder(node: BinaryTreeNode<T> | null) {
    if (!node) {
      this.traverseInOrder(node.left);
      console.log(node.data);
      this.traverseInOrder(node.right);
    }
  }

  traversePreOrder(node: BinaryTreeNode<T>) {
    if (!node) {
      console.log(node.data);
      this.traverseInOrder(node.left);
      this.traverseInOrder(node.right);
    }
  }

  traversePostOrder(node: BinaryTreeNode<T>) {
    if (!node) {
      this.traverseInOrder(node.left);
      this.traverseInOrder(node.right);
      console.log(node.data);
    }
  }
}
