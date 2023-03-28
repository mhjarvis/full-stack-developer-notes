/* Stacks

Stacks are last in first out (LIFO) data structures. 

Top - indicates the top of the stack.
Bottom - indicates the bottom of the stack.

Creating your own stack module will help in terms of efficiency and in time complexity isusses. It also adds semantic maning to the application. 

*/

// using WeakMap() for implementation will be beneficial as it retains a weak
// reference to the keys it holds, meaning they get garbage-collected. However, 
// keys can only be non-primitives and are not enumerable. 

let Stack = (() => {

    const sKey = {};
    const items = new WeakMap();

    // create class
    class Stack {
        constructor() {
            items.set(sKey, [])
        }

        // function to push an item to the top of the stack
        push(element) {
            let stack = items.get(sKey);
            stack.push(element);
        }

        // function to remove an item from the top of the stack
        pop() {
            let stack = items.get(sKey);
            return stack.pop();
        }

        // function that shows the last item pushed into the stack
        peek() {
            let stack = items.get(sKey);
            return stack[stack.length - 1];
        }

        // function that empties the stack
        clear() {
            items.set(sKey, []);
        }

        // function to get current size of the stack
        size() {
            return items.get(sKey).length;
        }
    }
    
    return Stack;
})();