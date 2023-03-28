/* Object-Based Stack

In JavaScript, an object is a set of key and value pairs. The 'count' variable will be the key of the objects. 

*/

// instantiate class
class Stack {
    constructor() {
        this.count = 0;             // keep track of size of array
        this.items = {};
    }

    // add elements to the stack (can add multiple elements at a time)
    push(element) {
        this.items[this.count] = element;
        this.count++;
    }

    // return size of the object
    size() {
        return this.count;
    }

    // return isEmpty value
    isEmpty() {
        return this.count === 0;
    }

    // remove last element from the array
    pop() {
        if(this.isEmpty()) {                        // check if the stack is empty
            return 'Array is empty';
        }
        this.count--;                               // if not empty, decrement the count variable
        const result = this.items[this.count];      // store the value from the top of the stack
        delete this.items[this.count];              // remove the element from this.items
        return result;
    }
}

// instantiate a stack and see if it is empty...
const stack = new Stack();

// add some elements to the stack using push...
stack.push(5);
stack.push(10);
stack.push(22);
stack.push(23);

console.log('\nAdded the numbers 5, 10, 22, 23 and printing the current stack: ', stack);
console.log('\nCurrent size of the array: ', stack.size());
console.log('\nStack is empty: ', stack.isEmpty());

// pop element
console.log('\nPopping the last element: ', stack.pop());
console.log('\nPrinting out the current stack: ', stack);