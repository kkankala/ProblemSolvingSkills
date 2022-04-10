import { LinkedList, LinkedListNode } from '../commonUtils/linkedList';

/**
 * Return Kth to Last: Implement an algorithm to find the kth to last element of a singly linked list.
 * @param linkedList
 * @param kthElement Kth element from last to return
 * @param lengthOfLinkedList length of linked list
 * @returns
 */
let printKthToLastEasy = (
  linkedList: LinkedList<number>,
  kthElement: number,
  lengthOfLinkedList: number
): number => {
  //if length of list is known, then kth element to last element is (length - k)th element. We can just iterate through linked list to find this element.
  let counter = 0;
  let currentNode: LinkedListNode<number> | undefined | null = linkedList.head;
  while (currentNode != null && counter < lengthOfLinkedList - kthElement) {
    currentNode = currentNode!.next;
    counter++;
  }
  return currentNode!.data;
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
linkedList.add(node7);
linkedList.print();
let kthElementEasy = printKthToLastEasy(linkedList, 4, 6);
console.log(`4th element from last is ${kthElementEasy}`);
