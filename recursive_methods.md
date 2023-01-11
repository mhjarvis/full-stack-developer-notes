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

