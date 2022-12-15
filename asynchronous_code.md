## Introduction

When running code, some functions will take longer than others (e.g. fetching data from servers). Asynchronous functions are types which can happen in the background while the rest of the code executes.

[The Odin Project - Asynchronous Code](https://www.theodinproject.com/lessons/node-path-javascript-asynchronous-code)

## Resources



## Callbacks

A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action. An example: 

    myDiv.addEventListener("click", function() {
      // do something
    })

Here, the 'do something' is the callback and is called whne ```myDiv``` gets clicked.

Callbacks work, but can be troublesome if you intend to chain several of them together in a specific order. 

Callbacks are most often used with asynchronous functions. A typical example is ```setTimeout()```. In the following, ```myFunction``` is used as a callback.

    setTimeout(myFunction, 3000);

    function myFunction() {
      document.getElementById("demo").innerHTML = 'Howdy!';
    }

[On Callbacks](https://github.com/maxogden/art-of-node#callbacks)

## Promises

A promise is an object that might produce a value at some point in the future. Using promises allows us to tell our code to wait until the data is done fetching to continue. 