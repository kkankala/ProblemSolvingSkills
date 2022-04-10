import { LinkedList, LinkedListNode } from '../commonUtils/linkedList';

/**
 * Remove Dupes: Write code to remove duplicates from an unsorted linked list. FOLLOW UP
How would you solve this problem if a temporary buffer is not allowed?
 * @param linkedList 
 */
const deleteDupes = (linkedList: LinkedList<number>) => {
  //runner technique
  let currentNode = linkedList.head;
  while (currentNode !== null) {
    let runner: LinkedListNode<number> | undefined = currentNode;
    while (runner?.next !== null) {
      if (runner!.next!.data === currentNode!.data) {
        runner!.next = runner!.next!.next;
      } else {
        runner = runner!.next;
      }
    }
    currentNode = currentNode!.next;
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
deleteDupes(linkedList);
linkedList.print();
