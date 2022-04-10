import { LinkedList, LinkedListNode } from '../commonUtils/linkedList';

/**
 * Return Kth to Last: Implement an algorithm to find the kth to last element of a singly linked list.
 * A more optimal, but less straightforward, solution is to implement this iteratively.
 * We can use two pointers, p1 and p2. We place them k nodes apart in the linked list by putting p2 at the beginning and moving p1 k nodes into the list.
 * Then, when we move them at the same pace, p1 will hit the end of the linked list after LENGTH - k steps.
 * At that point,p2 will beLENGTH - k nodes in to the list,or k nodes from the end.
 * @param linkedList
 * @param kthElement Kth element from last to return
 * @returns
 */
let printKthToLast = (
  linkedList: LinkedList<number>,
  kthElement: number
): number | null | undefined => {
  let pointer1: LinkedListNode<number> | null | undefined = linkedList.head;
  let pointer2: LinkedListNode<number> | null | undefined = linkedList.head;

  for (let i = 0; i < kthElement; i++) {
    if (pointer1 === null) {
      return null;
    }
    pointer1 = pointer1?.next;
  }

  while (pointer1 != null) {
    // console.log(`pointer1 data is ${pointer1?.data}`);
    // console.log(`pointer2 data is ${pointer2?.data}`);
    pointer1 = pointer1.next;
    pointer2 = pointer2?.next;
    // console.log('after moving pointers');
    // console.log(`pointer1 data is ${pointer1?.data}`);
    // console.log(`pointer2 data is ${pointer2?.data}`);
    // console.log('------------------------');
  }
  return pointer2?.data;
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

// let kthElementEasy = printKthToLast(linkedList, 4);
// console.log(`4th element from last is ${kthElementEasy}`);

let kthElementEasy = printKthToLast(linkedList, 1);
console.log(`1st element from last is ${kthElementEasy}`);
