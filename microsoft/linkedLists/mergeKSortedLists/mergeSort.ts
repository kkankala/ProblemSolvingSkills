import { LinkedList, LinkedListNode } from '../../../commonUtils/linkedList';
import { printLinkedListNode } from '../../../commonUtils/logger';

/**
 * You are given an array of k linked-lists lists, each linked-list is sorted in ascending order.
 * Merge all the linked-lists into one sorted linked-list and return it.
 * Constraints
 * 1. k == lists.length
 * 2. 0 <= k <= Math.pow(10,4)
 * 3. 0 <= lists[i].length <= 500
 * 4. lists[i] is sorted in ascending order.
 * 5. The sum of lists[i].length will not exceed Math.pow(10,4).
 * @param lists
 * @returns
 */
const mergeKSortedLists = (
  lists: Array<LinkedListNode<number> | null>
): LinkedListNode<number> | null => {
  if (lists === null || lists.length === 0) {
    return null;
  }
  return mergeSortLists(lists, 0, lists.length - 1);
};

const mergeSortLists = (
  lists: Array<LinkedListNode<number> | null>,
  start: number,
  end: number
): LinkedListNode<number> => {
  if (start === end) {
    return lists[start];
  }
  //find middle of the array
  let middle = Math.floor(start + (end - start) / 2); //this is same of start + end /2, but will override overflow exception

  //divide them
  let left = mergeSortLists(lists, start, middle);
  let right = mergeSortLists(lists, middle + 1, end);

  //sort them
  return merge(left, right);
};

const merge = (
  firstNode: LinkedListNode<number>,
  secondNode: LinkedListNode<number>
): LinkedListNode<number> => {
  let dummyNode = new LinkedListNode(0);
  let current = dummyNode;
  while (firstNode !== null || secondNode !== null) {
    if (firstNode === null) {
      current.next = secondNode;
      secondNode = secondNode.next;
    } else if (secondNode === null) {
      current.next = firstNode;
      firstNode = firstNode.next;
    } else if (firstNode.data < secondNode.data) {
      current.next = firstNode;
      firstNode = firstNode.next;
    } else {
      current.next = secondNode;
      secondNode = secondNode.next;
    }

    current = current.next;
  }
  return dummyNode.next; //skip first node of dummyNode
};

let firstList = new LinkedList<number>(new LinkedListNode(1));
firstList.add(new LinkedListNode(4));
firstList.add(new LinkedListNode(5));

let secondList = new LinkedList<number>(new LinkedListNode(1));
secondList.add(new LinkedListNode(3));
secondList.add(new LinkedListNode(4));

let thirdList = new LinkedList<number>(new LinkedListNode(2));
thirdList.add(new LinkedListNode(6));

let output = mergeKSortedLists([
  firstList.head,
  secondList.head,
  thirdList.head,
]);
printLinkedListNode(output);
