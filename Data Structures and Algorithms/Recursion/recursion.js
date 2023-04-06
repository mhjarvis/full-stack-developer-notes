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

*/
