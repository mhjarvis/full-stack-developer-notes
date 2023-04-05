/* Hash Tables

GENERAL:

Depending on the language, these are refered to by many different names (e.g. maps, hash maps, dictionaries, associative arrays, etc.). Hash Table is a list of paired values. The first item is the 'key' and the second item is the 'value'. These have a significant association with each other. 'Hashing' is similar to the decypher code used when playing as kids to decypher notes. 

** Hash function need to meet only one criterion to be valid: a hash function must convert the same string to the same number every single time it's applied. 

When storing data in a hash table, a computer first applies a hash function to the key. Lets say we store our keys as values and mutliply their values for our hash...

    BAD = 'evil' = 2 * 1 * 4 = 8

This puts our Key 'BAD' into cell 8.

    CAB = 'taxi' = 3 * 1 * 2 = 6

This puts our Key 'CAB' into cell 6.

    ACE = 'star' = 1 * 3 * 5 = 15

This puts our Key 'ACE' into cell 15. This gives us the following hash table:

    {
        'BAD': 'evil',
        'CAB': 'taxi',
        'ACE': 'star',
    }

** There can only be one instance of a key in a hash table, but multiple instances of the same value.

EFFICIANCY:

Hash Tables can be used to look up data in O(1) time. In our example above, the computer performs 2 steps to lookup the key 'BAD' - it hashes the key, and then looks in cell 8 for the value. Because it will always take a constant amount of time, we will get O(1) efficiency. However, this only works if we know the key. If we only knew the 'value', we would still have to revert to searcing the entire hash table. 

** It is important to setup Hash Tables in such a way that collisions are kept to a minimum, as worst case (i.e. if all keys are collisions), we essentially have an array and an efficiency of O(n) - see below.

COLLISIONS:

What would happen if we were to hash the key 'DAB' = 'pat'?

    DAB = 'pat' = 4 * 1 * 2 = 8

Since there is already a value in cell 8, we would encounter a collision. One solution to this is to apply separate chaining - placing a reference to an array in that cell containing all values to that key. If we then lookup the key 'DAB', the computer first hashes they key (8), looks up cell 8 and notes it contains an array, then searches the array linearly looking at each index until it finds the day matching 'DAB', then returns the value at that index.t

MAKING AN EFFICIENT HASH TABLE:

A primary consideration when creating a hash function is the balance between avoiding collisions and not taking up memory unnecissarily. A rule of thumb then is that for every 7 data elements stored in the table, it should have 10 cells. This is called the 'load factor'. Ideally, the load factor is 0.7. 

HASH TABLE USE CASES: 

Obvious use cases include naturally paired data (e.g. canidate => votes received, an inventory tracking system - shirt A => 101 in stock). They can also be used to simplify conditional statements (especially long conditional statements). 

HASH TABLES FOR SPEED

Basic arrays can be turned into hash tables to increase speed. For example, given the following: 

    arr = [61, 34, 20, 111, 209]

Instead of doing a linear search on this unordered array, we can use a hash table for increased speeds. 

    {
        61: true,
        34: true,
        20: true,
        111: true,
        209: true,
    }

*/

// Test whether an array is a subset using hash tables in liue of dual for loops

let bigArr = [1, 3, 8, 34, 2, 752, 23, 65, 3467, 474, 34345, 24, 345354, 54647, 987, 7897, 5, 4, 546, 99]
let subset = [474, 24, 5]

let hashTable = {}      // create hash table

for (const value of bigArr) {       // add 'true' to each index of the array
    hashTable[value] = true;
}

console.log(hashTable)

// This loop will now create a type of index for the array, using a hash table.
// We can now also use a single loop and run through the array to see if each value is in it

function testSubset(table, subset) {
    for (const value of subset) {
        if(!hashTable[value]) {
            return false;
        }
    }
    return true;
}

console.log('\n...[474, 24, 5] is in the big array: ', testSubset(hashTable, subset))

// This effectivly takes our efficiency from O(n^2) using loops to O(n)