const analyzeArray = require('./analyzeArray');

test('arr returns object with correct values', () => {
    expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
        average: 3,
        min: 1,
        max: 5,
        length: 5,
    })
})