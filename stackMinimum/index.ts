import { MyStack } from '../commonUtils/stack';

/**
 * Stack Min: How would you design a stack which, in addition to push and pop, has a function min
which returns the minimum element? Push, pop and min should all operate in 0(1) time.
Solution: maintain the minimum value in another stack and push n pop minimum value in this new stack.
 */
class MinStack extends MyStack<number> {
  private currentMinStack = new MyStack<number>();
  /**
   *
   */
  constructor() {
    super();
  }

  push(data: number) {
    let currentMin = this.min();
    if (currentMin && data <= currentMin) {
      this.currentMinStack.push(data);
    }
    super.push(data);
  }

  pop() {
    let val = super.pop();
    if (val?.data === this.min()) {
      this.currentMinStack.pop();
    }
    return val;
  }

  min() {
    if (this.currentMinStack.isEmpty()) {
      return Number.MAX_VALUE;
    }
    return this.currentMinStack.peek()?.data;
  }
}

var minStack = new MinStack();
minStack.push(3);
minStack.push(4);
minStack.push(2);

console.log(minStack.min());
