const reverseString = require('./reverseString');

// A capitalize function that takes a string and returns it with the first 
// character capitalized.

test('shit is reversed', () => {
    expect(reverseString('shit')).toBe('tihs');
})

test('eating is reversed', () => {
    expect(reverseString('eating')).toBe('gnitae');
})

test('"test" becomes "tset"', () => {
    expect(reverseString('test')).toBe('tset');
  });
  
test('"what about spaces" becomes "secaps tuoba tahw"', () => {
    expect(reverseString('what about spaces')).toBe('secaps tuoba tahw');
});
  
test('"12345" becomes "54321"', () => {
    expect(reverseString('12345')).toBe('54321');
});
  