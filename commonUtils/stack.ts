import { LinkedListNode } from './linkedList';
export class CapacityStack {
  items: Array<number>;
  capacity: number;
  private size: number = 0;

  constructor(capacity: number) {
    this.items = Array<number>();
    this.capacity = capacity;
  }

  push(item: number): boolean {
    if (this.size >= this.capacity) {
      return false;
    }
    this.size++;
    this.items.push(item);
    return true;
  }

  pop() {
    if (this.items.length == 0) return;
    this.size--;
    return this.items.pop();
  }

  peek() {
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    // return true if stack is empty
    return this.size == 0;
  }

  isFull() {
    return this.size === this.capacity;
  }

  print() {
    var str = '';
    for (var i = 0; i < this.items.length; i++) str += this.items[i] + ' ';
    console.log(str);
  }
}

export class MyStack<T> {
  top?: LinkedListNode<T> | null;

  constructor() {
    this.top = null;
  }

  push(element: T) {
    var node = new LinkedListNode<T>(element);
    node.next = this.top;
    this.top = node;
  }

  pop() {
    var temp = this.top;
    this.top = this.top?.next;
    return this.top;
  }

  peek() {
    return this.top;
  }

  isEmpty(): boolean {
    return this.top === null;
  }

  print() {
    var temp = this.top;
    while (temp !== null) {
      console.log(temp?.data);
      temp = temp?.next;
    }
  }
}
