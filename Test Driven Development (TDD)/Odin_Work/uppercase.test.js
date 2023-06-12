const capitalizeFirstLetter = require('./uppercase');

// A capitalize function that takes a string and returns it with the first 
// character capitalized.

test('first letter capatalized in string', () => {
    expect(capitalizeFirstLetter('dog eat')).toBe('Dog eat');
})
