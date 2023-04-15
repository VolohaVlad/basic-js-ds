const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
  constructor() {
    this.storage = [];
  }

  push(element) {
    this.storage.push(element);
  }

  pop() {
    const element = this.storage[this.storage.length - 1];
    this.storage = this.storage.slice(0, this.storage.length - 1);
    return element;
  }

  peek() {
    const element = this.storage[this.storage.length - 1];
    return element;
  }
}

module.exports = {
  Stack
};
