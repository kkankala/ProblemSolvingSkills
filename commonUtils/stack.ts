import { LinkedListNode } from './linkedList';
export class Stack {
  items: any[];
  constructor() {
    this.items = [];
  }

  push(item: any): void {
    this.items.push(item);
  }

  pop() {
    if (this.items.length == 0) return;
    return this.items.pop();
  }

  peek() {
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    // return true if stack is empty
    return this.items.length == 0;
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
