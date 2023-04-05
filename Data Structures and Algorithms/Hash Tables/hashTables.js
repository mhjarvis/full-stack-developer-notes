/* Hash Tables

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





    

Efficiency:

Hash Tables can be used to look up data in O(1) time.













*/