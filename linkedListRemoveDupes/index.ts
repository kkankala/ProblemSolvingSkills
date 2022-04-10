import { LinkedList, LinkedListNode } from '../commonUtils/linkedList';

/**
 * Remove Dupes: Write code to remove duplicates from an unsorted linked list.
 * @param linkedList
 */
const removeDupes = (linkedList: LinkedList<number>) => {
  let myMap = new Map<number, number>();
  let previousNode: any = null;
  let currentNode = linkedList.head;
  while (currentNode?.data) {
    //if current value already exists, remove current node by assigning previous next to current next. Current will be detached.
    if (myMap.get(currentNode.data)) {
      previousNode.next = currentNode.next;
    } else {
      myMap.set(currentNode.data, currentNode.data);
      previousNode = currentNode;
    }
    //loop through linked list
    currentNode = currentNode.next;
  }
};

var node1 = new LinkedListNode<number>(4);
var node2 = new LinkedListNode<number>(2);
var node3 = new LinkedListNode<number>(1);
var node4 = new LinkedListNode<number>(3);
var node5 = new LinkedListNode<number>(7);
var node6 = new LinkedListNode<number>(2);
var node7 = new LinkedListNode<number>(5);

const linkedList = new LinkedList<number>(node1);
linkedList.add(node2);
linkedList.add(node3);
linkedList.add(node4);
linkedList.add(node5);
linkedList.add(node6);
linkedList.add(node7);
linkedList.print();
console.log('deleting dupes now...');
removeDupes(linkedList);
linkedList.print();
