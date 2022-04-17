/**
 * Definition for Node.
 */
class CurrentNode {
  val: number;
  next: CurrentNode | null;
  random: CurrentNode | null;
  constructor(val?: number, next?: CurrentNode, random?: CurrentNode) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
    this.random = random === undefined ? null : random;
  }
}

/**
 * Create copy of the existing random Node of type CurrentNode
 * @param head
 * @returns
 */
var copyRandomList = function (head: CurrentNode) {
  if (!head) {
    return null;
  }
  const clones = new Map();
  let n = head;
  while (n) {
    clones.set(n, new CurrentNode(n.val));
    n = n.next;
  }
  n = head;
  while (n) {
    clones.get(n).next = clones.get(n.next) || null;
    clones.get(n).random = clones.get(n.random) || null;
    n = n.next;
  }
  return clones.get(head);
};
