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



*/
