import { LinkedList, LinkedListNode } from '../commonUtils/linkedList';

/**
 * Partition: Write code to partition a linked list around a value x, such that all nodes less than x come before all nodes greater than or equal to x.
 * If x is contained within the list the values of x only need to be after the elements less than x (see below).
 * The partition element x can appear anywhere in the "right partition"; it does not need to appear between the left and right partitions.
 *
 * Solution: We iterate through the linked list, inserting elements into our before list or our after list.
 * Once we reach the end of the linked list and have completed this splitting, we merge the two lists.
 * @param node
 * @param x
 * @returns
 */
var partition1 = (
  node: LinkedListNode<number>,
  x: number
): LinkedListNode<number> => {
  let beforeStart: LinkedListNode<number> | null | undefined = null;
  let beforeEnd: LinkedListNode<number> | null | undefined = null;
  let afterStart: LinkedListNode<number> | null | undefined = null;
  let afterEnd: LinkedListNode<number> | null | undefined = null;

  /* Partition list */
  while (node !== null) {
    let next = node.next;
    node.next = null;
    if (node.data < x) {
      if (beforeStart === null) {
        beforeStart = node;
        beforeEnd = beforeStart;
      } else {
        beforeEnd!.next = node;
        beforeEnd = node;
      }
    } else {
      if (afterStart === null) {
        afterStart = node;
        afterEnd = afterStart;
      } else {
        afterEnd!.next = node;
        afterEnd = node;
      }
    }
    node = next!;
  }
  if (beforeStart === null) {
    return afterStart!;
  }

  beforeEnd!.next = afterStart;
  return beforeStart!;
};

var partition2 = (node: LinkedListNode<number>, x: number) => {
  let head: LinkedListNode<number> | null | undefined = node;
  let tail: LinkedListNode<number> | null | undefined = node;

  while (node !== null) {
    let next: any = node.next;
    if (node.data < x) {
      /* Insert node at head. */
      node.next = head;
      head = node;
    } else {
      /* Insert node at tail. */
      tail.next = node;
      tail = node;
    }
    node = next;
  }
  tail.next = null;
  // The head has changed, so we need to return it to the user.
  return head;
};

var node1 = new LinkedListNode<number>(3);
var node2 = new LinkedListNode<number>(5);
var node3 = new LinkedListNode<number>(8);
var node4 = new LinkedListNode<number>(5);
var node5 = new LinkedListNode<number>(10);
var node6 = new LinkedListNode<number>(2);
var node7 = new LinkedListNode<number>(1);

const linkedList = new LinkedList<number>(node1);
linkedList.add(node2);
linkedList.add(node3);
linkedList.add(node4);
linkedList.add(node5);
linkedList.add(node6);
linkedList.add(node7);
linkedList.print();

let node = partition2(node1, 5);
console.log('after partition');
node.print();
