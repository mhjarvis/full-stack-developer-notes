/* Array Based Stacks

*/

// create a class with a data structure that will store the elements of the stack
class Stack {
    constructor() {
        this.items = [];
    }

    // push elements to the stack
    push(element) {
        this.items.push(element);
    }

    // remove elements from the stack
    pop() {
        return this.items.pop();
    }

    // return the item from the top of the stack
    peek() {
        return this.items[this.items.length - 1];
    }

    // check to see if the stack is empty
    isEmpty() {
        return this.items.length === 0;
    }

    // empty the stack
    clear() {
        this.items = [];
    }
}

// instantiate a stack and see if it is empty...
const stack = new Stack();
console.log('\nNew Stack created...the stack is empty: ', stack.isEmpty());

// add some elements to the stack using push...
stack.push(5);
stack.push(10);
stack.push(22);
stack.push(23);

// peek at the last element...
console.log('\nAdding the numbers 5, 10, 22, 23 to stack...peeking at the last element: ', stack.peek());

// 