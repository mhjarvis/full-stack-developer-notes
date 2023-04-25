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
console.log('\nDoubling the array [1,2,3,4,5,6] equals: ', array)

/* 

RECURSIVE CATEGORY: CALCULATIONS

This category of problems focuses on performing a calculation based on a subproblem. A SUBPROBLEM is a version of the same problem applied to a smaller input. In part, we don't even need to know how the calculation actually works.

When tackeling a top-down recursive type problem, there are three things to think about that can help make everything easier:
    1. Imaging the function your writing has already been implemented by someone else.
    2. Identify the subproblem of the problem.
    3. See what happens when you call the function on the subproblem and go from there.

*/

// Function that sums all numbers of an array

let total = 0;

function sums(arr, index = 0) {
    if (index >= arr.length - 1) {
        return total;
    }
    return arr[index] + sums(arr, index + 1)
}


console.log('\nThe array [1,2,3,4,5,6,7,8,9] sums up to be: ', sums([1,2,3,4,5,6,7,8,9]))

// String Reversal function

function reverse(string, index = string.length - 1) {

    if (index < 0) {
        return "";
    }
    return '' + string[index] + reverse(string, index -1)
}

console.log('\nThe reverse string of "abcdef" is: ', reverse('abcdef'))

// String Reversal function (Alternative)

function reverseString(string) {
    if (string === '') {
        return ''
    }
    return reverseString(string.substr(1)) + string.charAt(0)
}

console.log('\nThe reverse string of "abcdef" is (using alt fun): ', reverseString('abcdef'))

// Function Count X that returns the number of 'x's in a string

function countX(string, index = 0) {
    if (index === string.length) {
        return 0;
    }

    if (string[index] === 'x') {
        return 1 + countX(string, index + 1)
    } else {
        return countX(string, index + 1)
    }
}

console.log('\nThe number of x\'s in the string "xbxxdfreewcxd" : ', countX('xbxxdfreewcxd'))

/* The Staircase Problem

Let’s say we have a staircase of N steps, and a person has the ability to climb one, two, or three steps at a time. How many different possible “paths” can someone take to reach the top? Write a function that will calculate this for N steps.

*/

// Using the method above, we can solve the problem by using the top-down method
// First, we find the sub-problem, in this case, a 10-step staircase (in a 11-step staircase)
// The number of steps to the top is at least the sum of all the paths to stairs 10, 9, and 8
// since one can jump from 8 to 11, but not from 7 to 11, etc

/*
    function numberOfPaths(n) {
        numberOfPaths(n - 1) + numberOfPaths(n - 2) + numberOfPaths(n - 3)
    }
*/

// At this point, we only need to add the base case
// First, we know that if there is only one step, we need it to return 1.

/*
    if (n < 0) {
        return 0
    }
    if (n == 1 || n == 0) {
        return 1
    }
*/

// Put it all together, we get:

function numberOfPaths(n) {
    if (n < 0) {
        return 0
    }
    if (n == 1 || n == 0) {
        return 1
    }
    return numberOfPaths(n - 1) + numberOfPaths(n - 2) + numberOfPaths(n - 3)
}

console.log('\nThe number of paths for 11 staircases is: ', numberOfPaths(11))

/* Angram Generation 

*/

function angram(string) {

}

console.log('\nAngram of abcd includes: ', angram('abcd'))







function testNeww(num) {
    if (num === 1) {
        return 1;
    }


}

console.log('\n', testNeww(1))