import { LinkedList, LinkedListNode } from '../../../commonUtils/linkedList';
import { printLinkedListNode } from '../../../commonUtils/logger';

/**
 * Given the head of a singly linked list, reverse the list, and return the reversed list.
 * @param head
 * @returns reversed list
 */
const reverseList = (
  head: LinkedListNode<number> | null
): LinkedListNode<number> | null => {
  if (!head) {
    return head;
  }

  let previousNode: LinkedListNode<number> | null = null;
  let currentNode = head;
  // Given problem: 1 -> 2 -> 3 -> 4 -> 5
  // solution: <- 1 <- 2 <- 3 <- 4 <- 5 - return previous node (5). Reverse the next node of each node by maintaining temp node.
  while (currentNode !== null) {
    let temp = currentNode;
    currentNode = currentNode.next;
    temp.next = previousNode;
    previousNode = temp;
    // printLinkedListNode(previousNode);
  }
  return previousNode;
};

var node1 = new LinkedListNode<number>(1);
var node2 = new LinkedListNode<number>(2);
var node3 = new LinkedListNode<number>(3);
var node4 = new LinkedListNode<number>(4);
var node5 = new LinkedListNode<number>(5);

const linkedList = new LinkedList<number>(node1);
linkedList.add(node2);
linkedList.add(node3);
linkedList.add(node4);
linkedList.add(node5);
console.log('Reverse :');
linkedList.print();
console.log('Reversed linked list is :');
printLinkedListNode(reverseList(linkedList.head));

var node6 = new LinkedListNode<number>(6);
var node7 = new LinkedListNode<number>(7);
var node8 = new LinkedListNode<number>(8);
var node9 = new LinkedListNode<number>(9);
var node10 = new LinkedListNode<number>(10);

const linkedList2 = new LinkedList<number>(node6);
linkedList2.add(node7);
linkedList2.add(node8);
linkedList2.add(node9);
linkedList2.add(node10);
console.log('Reverse :');
linkedList2.print();
console.log('Reversed linked list is :');
printLinkedListNode(reverseList(linkedList2.head));
