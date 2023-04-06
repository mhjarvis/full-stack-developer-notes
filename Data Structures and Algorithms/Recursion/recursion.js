/* Recursion

Recursion is a function calling itself. For example, the following function will call itself...indefinetly:

    function countdown(number) {
        console.log(number);
        countdown(number - 1);
    }

THE BASE CASE

To prevent our function from continuing indefinetly, we need a way to end the function calling itself. This is the base case - usually a conditional statement that will stop the function calling. For the above function we could add...

    if(number === 0) return;

Thus, the ```base case``` is the case in the function that the function will not recurse. EVERY RECURSIVE FUNCTION NEEDS AT LEAST ONE BASE CASE TO PREVENT IT FROM CALLING ITSELF INDEFINITELY.

RECURSION AND THE COMPUTER

A computer processes recursive code through the use of the call stack. Just like the stack, each new function call is added to the stack until it reaches the base case. Thus, a lot of memory may be used when the stack begins to build up. In the event of a infinite recursion, we get a ```Stack Overflow```. At this point, there is no more room in short-term memory.

---------------------------------------------------------------------------------------------------------

RECURSIVE CATEGORY: REPEATEDLY EXECUTE

There are many different cattegories of recursive problems depending on the algorithm. The easiest of which is where the goal of the algorithm was to repeatedly execute a task.

RECURSIVE TRICK: PASSING EXTRA PARAMETERS

Ex: function recursiveFunction(thepara, index = 0)

There are two basic approaches to manipulating data. Lets take the example of doubling the values in an array ([1,2,3,4,5] = [2,4,6,8,10]). We could create a new array and leave the original array alone. That is one approach. Another is the in-place modification.

```in-place modifications``` - modifying an array in place. Here we are modifying the original array passed into the function. 

*/

// Example of a modify in place array

function doubleArray(arr, index = 0) {          // use default values to remove need to add extra para
    if (index >= arr.length) {
        return;
    }
    arr[index] *= 2;
    doubleArray(arr, index + 1);               // added initially, recursive call
}

// initiate array
let array = [1,2,3,4,5,6]

// call function to modify original array in place
doubleArray(array, 0)

// print newly modified array
console.log(array)

/* 

RECURSIVE CATEGORY: CALCULATIONS

This category of problems focuses on performing a calculation based on a subproblem. A SUBPROBLEM is a version of the same problem applied to a smaller input. 


*/