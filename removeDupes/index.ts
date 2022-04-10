import { LinkedList, LinkedListNode } from '../commonUtils/linkedList';

/**
 * Remove Dups: Write code to remove duplicates from an unsorted linked list. FOLLOW UP
How would you solve this problem if a temporary buffer is not allowed?
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
node1.next = node2;

var node3 = new LinkedListNode<number>(1);
node2.next = node3;

var node4 = new LinkedListNode<number>(3);
node3.next = node4;

var node5 = new LinkedListNode<number>(7);
node4.next = node5;

var node6 = new LinkedListNode<number>(2);
node5.next = node6;

var node7 = new LinkedListNode<number>(5);
node6.next = node7;

const linkedList = new LinkedList<number>(node1);
linkedList.print();
console.log('deleting dupes now...');
removeDupes(linkedList);
linkedList.print();
