// Recursion works by placing things into a call stack
// The following function will call itself over and over
// After about 10,000 iterations, it will cause a stack overflow

/* ************************************************************************* */

/*
function foo(count) {
  console.log('foo', count)
  foo(count + 1);
} 

foo(0);
*/

/* ************************************************************************* */

console.log('\n1. Uncomment in order to cause a stack overflow.\n');

// A easier recursive function that calls itself would be a countdown function

function countDown(count) {
  console.log('time left: ', count)
  if (count > 0) {
    countDown(count - 1)
  }
}

/* ************************************************************************* */

console.log('2. Call the countdown function using recursion and print:\n');
countDown(3);

