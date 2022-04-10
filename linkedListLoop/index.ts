import { LinkedListNode } from '../commonUtils/linkedList';

/**
 * Loop Detection: Given a circular linked list, implement an algorithm that returns the node at the beginning of the loop.
DEFINITION
Circular linked list: A (corrupt) linked list in which a node's next pointer points to an earlier node, so as to make a loop in the linked list.
This is a modification of a classic interview problem: detect if a linked list has a loop. Let's apply the Pattern Matching approach.

 * @param head 
 */
const findBeginningOfLoop = (
  head: LinkedListNode<number>
): LinkedListNode<number> => {
  // better explanation to solution - https://leetcode.com/problems/linked-list-cycle-ii/discuss/1701055/JavaC%2B%2BPython-best-explanation-ever-happen's-for-this-problem
  // actual implementation - https://leetcode.com/problems/linked-list-cycle-ii/discuss/1701128/C%2B%2BJavaPython-Slow-and-Fast-oror-Image-Explanation-oror-Beginner-Friendly
  let slow: any = head;
  let fast: any = head;

  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) break;
  }

  if (fast === null || fast.next === null) return null;

  while (head !== slow) {
    head = head.next;
    slow = slow.next;
  }
  return head;
};
