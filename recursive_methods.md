## Introduction

Recursion is essentially a function calling itself. It works itself out by continuously doing this until it breaks itself down to the simplest parts. It is useful when a task can naturally be split into simpler variant of the same task. 

## Resources

1. [The Odin Project](https://www.theodinproject.com/lessons/javascript-recursive-methods)
2. [JavaScript.info Recursion](https://javascript.info/recursion)

## Using Recursion

A basic example:

    function pow(x, n) {
      if (n == 1) {
        return x;
      } else {
        return x * pow(x, n - 1);
      }
    }

    alert( pow(2, 3) ); // 8

It can also be abreviated as follows:

    function pow(x, n) {
      return (n == 1) ? x : (x * pow(x, n - 1));
    }

Javascript limits the depth recursion can go - which can be relied upon to be about 10,000. 

## The Execution Context and Stack

Information about the process of a function is stored in its execution context, which is an internal data structure that contains details about the execution of a function. One function call has exactly one excution context associated with it. When a function makes a nested call, the following happens:

- The current function is paused.
- The execution context associated with it is remembered in a special data structure called execution context stack. 
- The nested call executes.
- Afterwards, the old excution context is retrieved from the stack, and the outer function is resumed from where it stopped.

Going through the function ```pow(2, 3)```, wew ultimately end up with the following context stack:

    CONTEXT: { x: 2, n: 1, at line 1 } call: pow(2, 1) (because n == 1, 2 is returned)
    CONTEXT: { x: 2, n: 2, at line 5 } call: pow(2, 2)
    CONTEXT: { x: 2, n: 3, at line 5 } call: pow(2, 3)

In this example, the recursion depth is set at 3. Note that this takes memory. A looped-based algorithm, in this case, is more memory-saving.

**Any recursion can be rewritten as a loop. The loop variant usually can be made more effective.**

