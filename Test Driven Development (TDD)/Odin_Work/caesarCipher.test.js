const caesarCipher = require('./caesarCipher');

test('string should equal vwulqj', () => {
    expect(caesarCipher('string')).toBe('vwulqj');
})