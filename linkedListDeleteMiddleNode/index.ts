import { LinkedList, LinkedListNode } from '../commonUtils/linkedList';

const isMiddleNodeDeleted = (middleNode: LinkedListNode<number>): boolean => {
  if (middleNode === null || middleNode.next === null) {
    return false;
  }

  let next = middleNode.next;
  middleNode.data = next!.data;
  middleNode.next = next!.next;
  return true;
};

var node1 = new LinkedListNode<number>(4);
var node2 = new LinkedListNode<number>(2);
var node3 = new LinkedListNode<number>(1);
var node4 = new LinkedListNode<number>(3);
var node5 = new LinkedListNode<number>(7);
var node7 = new LinkedListNode<number>(5);

const linkedList = new LinkedList<number>(node1);
linkedList.add(node2);
linkedList.add(node3);
linkedList.add(node4);
linkedList.add(node5);
linkedList.print();

if (isMiddleNodeDeleted(node3)) {
  console.log('updated list after deletion');
  linkedList.print();
} else {
  console.log('error deleting middle node');
}
