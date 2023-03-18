// Recursion works by placing things into a call stack
// The following function will call itself over and over
// After about 10,000 iterations, it will cause a stack overflow

/* ************************************************************************* */

console.log('\n1. Uncomment in order to cause a stack overflow.\n');

/*
function foo(count) {
    console.log('foo', count)
    foo(count + 1);
} 

foo(0);
*/

/* ************************************************************************* */

console.log('2. Call the countdown function using recursion and print:\n');

// A easier recursive function that calls itself would be a countdown function
function countDown(count) {
    console.log('time left: ', count)
    if (count > 0) {
        countDown(count - 1)
    }
}

countDown(3);

/* ************************************************************************* */

console.log('\n3. Use recursion to print the elements of an array:\n')

// Print each element using recursion starting with index x
function iterate(arr, index) {
    if (index < arr.length) {
        console.log(arr[index]);
        iterate(arr, index + 1)
    }
}

let array = [23, 44, 555, 34, 90, 939, 1, 93];
iterate(array, 0);

/* ************************************************************************* */

console.log('\n4. Fibonacci sequence using recursion:\n')

// Return the nth fibonacci number
// fib(1) = 1, fib(2) == 2, fib(n > 2) = fib(n - 1) + fib(n - 2)
// e.g. 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597

function fib(n) {
    if (n === 1 || n === 2) {               // base case
        return 1;
    } else {
        return fib(n - 1) + fib(n - 2)
    }
}

console.log('The 10th Fibonacci Number is: ' + fib(10))
console.log('The 15th Fibonacci Number is: ' + fib(15))

/* ************************************************************************* */

console.log('\n5. Palindrome function:\n')

// Return true/false if the string is a palindrome
function isPalindrome() {
    
}