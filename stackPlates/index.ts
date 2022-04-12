import { CapacityStack } from '../commonUtils/stack';
class StackOfPlates {
  private stacks = new Array<CapacityStack>();
  capacity: number;

  /**
   * Problem: Imagine a (literal) stack of plates. If the stack gets too high, it
   * might topple. Therefore, in real life, we would likely start a new stack when
   * the previous stack exceeds some threshold. Implement a data structure
   * SetOfStacks that mimics this. SetOfStacks should be composed of several
   * stacks and should create a new stack once the previous one exceeds capacity.
   * SetOfStacks.push() and SetOfStacks. pop() should behave identically to a
   * single stack (that is, pop() should return the same values as it would if
   * there were just a single stack).
   */
  constructor(capacity: number) {
    this.capacity = capacity;
  }

  getLastStack() {
    if (this.stacks.length === 0) {
      return null;
    }
    return this.stacks[this.stacks.length - 1];
  }

  push(data: number) {
    let lastStack = this.getLastStack();
    if (lastStack && !lastStack.isFull()) {
      lastStack.push(data);
    } else {
      let newStack = new CapacityStack(this.capacity);
      newStack.push(data);
      this.stacks.push(newStack);
    }
  }

  pop() {
    let lastStack = this.getLastStack();
    if (!lastStack) {
      return null;
    }
    let removedItem = lastStack.pop();
    if (lastStack.isEmpty()) {
      this.stacks.pop();
    }
    return removedItem;
  }

  print() {
    this.stacks.forEach((currentStack) => {
      currentStack.print();
    });
  }
}

var stackOfPlates = new StackOfPlates(2);
stackOfPlates.push(2);
stackOfPlates.push(3);

stackOfPlates.push(4);
stackOfPlates.push(5);

stackOfPlates.push(6);
stackOfPlates.push(1);

stackOfPlates.print();
