const calculator = require('./calculator');

test('adding 2 + 3 equals 5', () => {
    expect(calculator.add(2, 3)).toBe(5);
})