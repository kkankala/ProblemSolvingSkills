export class DoubleLinkedListNode<T> {
  data: T;
  next?: DoubleLinkedListNode<T> | null;
  prev?: DoubleLinkedListNode<T> | null;
  constructor(data: T) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}

export class DoubleLinkedList<T> {
  head: DoubleLinkedListNode<T> | null;
  tail: DoubleLinkedListNode<T> | null;

  constructor(head: DoubleLinkedListNode<T>) {
    this.head = head;
    this.tail = head;
  }
}
