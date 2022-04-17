import { LinkedList, LinkedListNode } from '../../../commonUtils/linkedList';
import { printLinkedListNode } from '../../../commonUtils/logger';

/**
 * You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit.
 * Add the two numbers and return the sum as a linked list.
 * You may assume the two numbers do not contain any leading zero, except the number 0 itself.
 * Constraints:
 * 1. The number of nodes in each linked list is in the range [1, 100].
 * 2. 0 <= Node.val <= 9
 * 3. It is guaranteed that the list represents a number that does not have leading zeros.
 * @param firstList
 * @param secondList
 */
const addTwoNumbers = (
  firstList: LinkedListNode<number> | null,
  secondList: LinkedListNode<number> | null
): LinkedListNode<number> | null => {
  let sum = 0;
  let currentNode = new LinkedListNode(0);
  let result = currentNode;

  while (firstList !== null || secondList !== null) {
    if (firstList) {
      sum = sum + firstList.data;
      firstList = firstList?.next;
    }

    if (secondList) {
      sum = sum + secondList.data;
      secondList = secondList?.next;
    }
    currentNode.next = new LinkedListNode(sum % 10);
    currentNode = currentNode.next;
    sum = sum > 9 ? 1 : 0; //carry must be either 0 or 1 because the largest possible sum of two digits (including the carry) is   9 + 9 + 1 = 19
  }
  if (sum) {
    currentNode.next = new LinkedListNode(sum);
  }
  return result.next; //not returning first 0 node.
};

var node1 = new LinkedListNode<number>(1);
var node2 = new LinkedListNode<number>(2);
var node3 = new LinkedListNode<number>(3);
var node4 = new LinkedListNode<number>(4);
var node5 = new LinkedListNode<number>(5);

const firstList = new LinkedList<number>(node1);
firstList.add(node2);
firstList.add(node3);
firstList.add(node4);
firstList.add(node5);

var node6 = new LinkedListNode<number>(6);
var node7 = new LinkedListNode<number>(7);
var node8 = new LinkedListNode<number>(8);
var node9 = new LinkedListNode<number>(9);
var node10 = new LinkedListNode<number>(10);

const secondList = new LinkedList<number>(node6);
secondList.add(node7);
secondList.add(node8);
secondList.add(node9);
secondList.add(node10);
printLinkedListNode(firstList.head);
printLinkedListNode(secondList.head);
console.log('Sum of the above lists');
printLinkedListNode(addTwoNumbers(firstList.head, secondList.head));
