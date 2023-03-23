## Introduction

Asynchronious functions give us the ability to get our program to continue excuting code when the program is waiting on some other task to complete. This will be important when working with APIs or files on servers (for example).

When running code, some functions will take longer than others (e.g. fetching data from servers). Asynchronous functions are types which can happen in the background while the rest of the code continuous executing.

## Resources

1. [The Odin Project - Asynchronous Code](https://www.theodinproject.com/lessons/node-path-javascript-asynchronous-code)
2. [Web Dev Simplified - Promises](https://www.youtube.com/watch?v=DHvZLI7Db8E)
3. [You Don't Know JS: Asynchrony](https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/async%20%26%20performance/ch1.md)
4. [You Don't Know JS: Callbacks](https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/async%20%26%20performance/ch2.md)
5. [You Don't Know JS: Promises](https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/async%20%26%20performance/ch3.md)
6. 

## The Event Loop

The event loop manages code execution. 

## Callbacks

A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action. An example: 

    btn.addEventListener("click", function() {
      // do something
    })

Here, the 'do something' is the callback and is called whne ```btn``` gets clicked.

Callbacks work, but can be troublesome if you intend to chain several of them together in a specific order. 

Callbacks are most often used with asynchronous functions. A typical example is ```setTimeout()```. In the following, ```myFunction``` is used as a callback.

    setTimeout(myFunction, 3000);

    function myFunction() {
      document.getElementById("demo").innerHTML = 'Howdy!';
    }

[On Callbacks](https://github.com/maxogden/art-of-node#callbacks)

## Promises

A promise is an object that might produce a value at some point in the future. Using promises allows us to tell our code to wait until the data is done fetching to continue. 

The basic promise syntax is as follows: 

    let myPromise = new Promise(function(myResolve, myReject) {
        // "Producing Code" (May take some time)

        myResolve(); // when successful
        myReject();  // when error
    });

        // "Consuming Code" (Must wait for a fulfilled Promise)
    myPromise.then(
        function(value) { /* code if successful */ },
        function(error) { /* code if some error */ }
    );

Promises have the following terminology (or, a promise can be the following):
- fulfilled - the action relating to the promise succeeded.
- rejected - the action relating to the promise failed.
- pending - has not fulfilled or rejected 
- settled - has fulfilled or rejected

Example:

    let p = new Promise((resolve, reject) => {
      let a = 1 + 1;
      if(a == 2) {
        resolve('Success');
      } else {
        reject('Failed');
      }
    })

    // Success

    p.then((message) => {                               // executes on resolve
      console.log('This is in the then ' + message);
    }).catch((message) => {                             // executes on reject
      console.log('This is in the catch '+ message);
    })

[W3 Tutorials Promises](https://www.w3schools.com/js/js_promise.asp)

