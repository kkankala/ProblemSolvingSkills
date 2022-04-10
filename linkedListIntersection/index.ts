import { LinkedList, LinkedListNode } from '../commonUtils/linkedList';
//TODO: Finish this.

/**
 * Intersection: Given two (singly) linked lists, determine if the two lists intersect. Return the intersecting node.
 * Note that the intersection is defined based on reference, not value. That is, if the kth node of the first linked list is the exact same node (by reference) as the jth node of the second linked list, then they are intersecting.
 * @param list1
 * @param list2
 */
const findIntersection = (
  list1: LinkedListNode<number> | null | undefined,
  list2: LinkedListNode<number> | null | undefined
): LinkedListNode<number> | null => {
  if (!list1 || !list2) {
    return null;
  }
  console.log('validation passed');

  let pointerList1: any = list1;
  let pointerList2: any = list2;
  let count = 0;
  while (pointerList1 != pointerList2) {
    pointerList1 = pointerList1 !== null ? pointerList1.next : list2;
    pointerList2 = pointerList2 !== null ? pointerList2.next : list1;
    count++;
    console.log(count);
  }
  return pointerList1;

  //   // Get Tail and sizes.
  //   let result1: Result | null = getTailAndSize(list1);
  //   let result2: Result | null = getTailAndSize(list2);

  //   //If different tail nodes, then there's no intersection
  //   if (result1?.tail != result2?.tail) {
  //     return null;
  //   }

  //   //   Set pointers to the start of each linkedlist
  //   let shorter = result1!.size < result2!.size ? list1 : list2;
  //   let longer = result1!.size < result2!.size ? list2 : list1;

  //   /* Advance the pointer for the longer linked list by difference in lengths, so they start at the same point for different lists */
  //   longer = getKthNode(longer, Math.abs(result1!.size - result2!.size));

  //   while (shorter !== longer) {
  //     shorter = shorter!.next!;
  //     longer = longer!.next!;
  //   }

  //   // return either one with intersection point
  //   return longer;
};

// const getTailAndSize = (list: LinkedListNode<number>): Result | null => {
//   if (!list) {
//     return null;
//   }
//   let size: number = 1;
//   let current: LinkedListNode<number> | undefined | null = list;
//   while (current?.next !== null) {
//     size++;
//     current = current!.next;
//   }
//   return new Result(current, size);
// };

// const getKthNode = (
//   head: LinkedListNode<number>,
//   k: number
// ): LinkedListNode<number> => {
//   let current: any = head;
//   while (k > 0 && current !== null) {
//     current = current.next;
//     k--;
//   }
//   return current;
// };
// class Result {
//   tail: LinkedListNode<number>;
//   size: number;
//   constructor(tail: LinkedListNode<number>, size: number) {
//     this.tail = tail;
//     this.size = size;
//   }
// }

let node1 = new LinkedListNode<number>(1);
let node2 = new LinkedListNode<number>(2);
let node7 = new LinkedListNode<number>(7);
console.log('creating linkedlist 1');
let firstLinkedList = new LinkedList<number>(new LinkedListNode<number>(3));
firstLinkedList.add(new LinkedListNode<number>(1));
firstLinkedList.add(new LinkedListNode<number>(5));
firstLinkedList.add(new LinkedListNode<number>(9));
firstLinkedList.add(node7);
firstLinkedList.add(node2);
firstLinkedList.add(node1);
firstLinkedList.print();

console.log('creating linkedlist 2');
// let secondLinkedList = new LinkedList<number>(new LinkedListNode<number>(4));
// secondLinkedList.add(new LinkedListNode<number>(6));
// secondLinkedList.add(node7);
// secondLinkedList.add(node2);
// secondLinkedList.add(node1);
// secondLinkedList.print();
console.log('done second list');

// let intersection = findIntersection(
//   firstLinkedList!.head,
//   secondLinkedList!.head
// );
// if (intersection) {
//   intersection.print();
// }
