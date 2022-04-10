export class LinkedListNode<T> {
  data: T;
  next?: LinkedListNode<T> | null;
  constructor(data: T) {
    this.data = data;
    this.next = null;
  }
  print(): void {
    let currentNode: any = this;
    while (currentNode?.data) {
      console.log(currentNode.data);
      currentNode = currentNode!.next;
    }
  }
}

export class LinkedList<T> {
  head?: LinkedListNode<T> | null;

  constructor(head: LinkedListNode<T>) {
    this.head = head;
  }

  size() {
    let count = 0;
    let node = this.head;
    while (node) {
      count++;
      node = node.next;
    }
    return count;
  }

  clear() {
    this.head = null;
  }

  getLast() {
    let lastNode = this.head;
    if (lastNode) {
      while (lastNode.next) {
        lastNode = lastNode.next;
      }
    }
    return lastNode;
  }

  getFirst() {
    return this.head;
  }

  print(): void {
    let currentNode = this.head;
    while (currentNode?.data) {
      console.log(currentNode.data);
      currentNode = currentNode.next;
    }
  }

  /** Add node to the end of the linked list */
  add = (node: LinkedListNode<T>): void => {
    let lastNode = this.getLast();
    if (lastNode) lastNode.next = node;
  };

  remove = (item: T): boolean => {
    let currentNode = this.head;
    let previousNode: LinkedListNode<T> | null | undefined = null;

    // if Head node needs to be deleted
    if (currentNode !== null && currentNode?.data === item) {
      this.head = currentNode.next;
      return true;
    }

    // Search for the key to be deleted, keep track of the previous node
    while (currentNode !== null && currentNode?.data !== item) {
      previousNode = currentNode;
      currentNode = currentNode?.next;
    }

    if (currentNode == null) {
      return false;
    }

    //unlink the node from linkedlist;
    previousNode!.next = currentNode.next;
    return true;
  };
}
