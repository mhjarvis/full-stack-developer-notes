// import the index.js file:

const sum = require('./sum');

// create the actual test:

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
})

