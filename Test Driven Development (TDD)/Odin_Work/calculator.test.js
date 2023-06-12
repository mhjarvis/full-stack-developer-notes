const calculator = require('./calculator');

test('adding 2 + 3 equals 5', () => {
    expect(calculator.add(2, 3)).toBe(5);
})

test('subtracting 2 - 3 equals -1', () => {
    expect(calculator.subtract(2, 3)).toBe(-1);
})

test('dividing 5 / 1 equals 5', () => {
    expect(calculator.divide(5, 1)).toBe(5);
})

test('multiplying 2 * 3 equals 6', () => {
    expect(calculator.multiply(2, 3)).toBe(6);
})