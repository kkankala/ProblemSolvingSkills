import { LinkedList, LinkedListNode } from '../commonUtils/linkedList';
import { Stack } from '../commonUtils/stack';

/**
 * Palindrome: Implement a function to check if a linked list is a palindrome.
 * Solution: we want to detect linked lists where the front half of the list is the reverse of the second half.
 * If we don't know the size of the linked list, we can iterate through the linked list,
 * using the fast runner/ slow runner technique described in the beginning of the chapter.
 * At each step in the loop, we push the data from the slow runner onto a stack.
 * When the fast runner hits the end of the list, the slow runner will have reached the middle of the linked list.
 * By this point, the stack will have all the elements from the front of the linked list, but in reverse order.
 * 0 -> 1 -> 2 -> 1 -> 0
 * @param linkedList
 */
const isPalindrome = (linkedList: LinkedList<number>): boolean => {
  let fast = linkedList.head;
  let slow = linkedList.head;

  let stack = new Stack();

  //   Push element from first half of the linked list onto stack. When fast runner(which is moving at 2x speed)
  //   reaches the end of the linked list, then we know we're at the middle
  while (fast != null && fast.next !== null) {
    stack.push(slow!.data);
    slow = slow?.next;
    fast = fast!.next?.next; // this is moving at 2x speed
  }

  //   Has odd number of elements, so skip the middle element
  if (fast !== null) {
    slow = slow!.next;
  }

  while (slow !== null) {
    let top = stack.pop();
    if (top !== slow!.data) return false;
    slow = slow!.next;
  }
  return true;
};

var node1 = new LinkedListNode<number>(0);
var node2 = new LinkedListNode<number>(1);
var node3 = new LinkedListNode<number>(2);
var node4 = new LinkedListNode<number>(1);
var node5 = new LinkedListNode<number>(0);

const linkedList = new LinkedList<number>(node1);
linkedList.add(node2);
linkedList.add(node3);
linkedList.add(node4);
linkedList.add(node5);
linkedList.print();
console.log(`is above linked list palindrome ?: ${isPalindrome(linkedList)}`);

var nodea = new LinkedListNode<number>(0);
var nodeb = new LinkedListNode<number>(1);
var nodec = new LinkedListNode<number>(2);
var noded = new LinkedListNode<number>(0);
var nodee = new LinkedListNode<number>(1);

const linkedList2 = new LinkedList<number>(nodea);
linkedList2.add(nodeb);
linkedList2.add(nodec);
linkedList2.add(noded);
linkedList2.add(nodee);
linkedList2.print();
console.log(`is above linked list palindrome ?: ${isPalindrome(linkedList2)}`);
