export class Stack {
  items: any[];
  constructor() {
    this.items = [];
  }

  push = (item: any): void => {
    this.items.push(item);
  };

  pop = () => {
    if (this.items.length == 0) return;
    return this.items.pop();
  };

  peek = () => {
    return this.items[this.items.length - 1];
  };

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
