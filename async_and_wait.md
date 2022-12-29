## Introduction

The keywords ```async``` and ```await``` can help make asynchronous code easier to understand (or, make it more readable like synchronous code). 

```async``` -lets JavaScript know you are declaring a asynchronous function. ```await``` will be required to use inside of this function. A function declared with ```async``` automatically returns a promise. Throwwing an error will reject the promise. 

The ```await``` keyword tells JavaScript to wait for an asynchronous action to finish before continuing the function. Instead of calling ```.then()``` after a asynchronous function, you would assign a variable to the result ```await```. 

## Resources

1. [Odin Project Link](https://www.theodinproject.com/lessons/node-path-javascript-async-and-await)

## Error Handling

To handle errors you can just call the function and append a ```.catch()``` method to the end:

    asyncFunctionCall().catch(err => {
      console.log(err)
    });

Or, you can use the ```try/catch``` block:

    asynch function getPersonInfo(name) {
      try {
        const people = await server.getPeople();
        const person = people.find(person => { return person.name === name });
        return person;
      } catch (error) {
          // Handle error
      }
    }