# Test Driven Development Using Jest

## Getting Started
See the file ```sum.js``` for a basic walkthrough to installing Jest, creating a basic function, exporting/importing that function into the ```sum.test.js``` file, and creating the ```package.json``` file in order to run a basic test. 

    npm test

For additional documentation see: [Jest Documentation - Getting Started](https://jestjs.io/docs/getting-started).

## Using Matchers
### Common Matchers
The simplest way to test a value is with exact equality - such as we did in the ```sum.test.js``` file initally. Example:

    test('two plus two is four', () => {
        expect(2 + 2).toBe(4);
    })

```toBe``` uses ```Object.is``` to test exact equality. To check the value of an object, use ```toEqual```:

    test('object assignment', () => {
        const data = {one: 1};
        data['two'] = 2;
        expect(data).toEqual({one: 1, two: 2});
        // expect(a + b).not.toBe(0);   // test opposite
    });

### Truthiness
If you want to distinguish between ```undefined```, ```null```, and ```false```, you can use helpers:

- ```toBeNull``` matches only null
- ```toBeUndefined``` matches only ```undefined```
- ```toBeDefined``` is the opposite of ```toBeUndefind```
- ```toBeTruthy``` matches anything that an ```if``` statemnt treats as true
- ```toBeFalsy``` matches anything that an ```if``` statement treeats as false

Example:

    test('null', () => {
        const n = null;
        expect(n).toBeNull();
        expect(n).toBeDefined();
        expect(n).not.toBeUndefined();
        expect(n).not.toBeTruthy();
        expect(n).toBeFalsy();
    });

    test('zero', () => {
        const z = 0;
        expect(z).not.toBeNull();
        expect(z).toBeDefined();
        expect(z).not.toBeUndefined();
        expect(z).not.toBeTruthy();
        expect(z).toBeFalsy();
    });

### Numbers
Most ways of comparing numbers have matcher equivalents: 

    test('two plus two', () => {
        const value = 2 + 2;
        expect(value).toBeGreaterThan(3);
        expect(value).toBeGreaterThanOrEqual(3.5);
        expect(value).toBeLessThan(5);
        expect(value).toBeLessThanOrEqual(4.5);

        // toBe and toEqual are equivalent for numbers
        expect(value).toBe(4);
        expect(value).toEqual(4);
    });

For floating point equality, use ```toBeCloseTo``` insteaed of ```toEqual```, becuase you don't want a test to depend on a tiny rounding error.

    test('adding floating point numbers', () => {
        const value = 0.1 + 0.2;
        //expect(value).toBe(0.3);           This won't work because of rounding error
        expect(value).toBeCloseTo(0.3); // This works.
    });

### Strings
Check strings against regular expressions with ```toMatch```:

    test('there is no I in team', () => {
        expect('team').not.toMatch(/I/);
    });

    test('but there is a "stop" in Christoph', () => {
        expect('Christoph').toMatch(/stop/);
    });

### Arrays and iterables
You can check if an array or iterable contains a particular item using ```toContain```:

    const shoppingList = [
        'diapers',
        'kleenex',
        'trash bags',
        'paper towels',
        'milk',
    ];

    test('the shopping list has milk on it', () => {
        expect(shoppingList).toContain('milk');
        expect(new Set(shoppingList)).toContain('milk');
    });

### Exceptions
Test wether a particular function throws an error when its called using ```toThrow```:

    function compileAndroidCode() {
        throw new Error('you are using the wrong JDK!');
    }

    test('compiling android goes as expected', () => {
        expect(() => compileAndroidCode()).toThrow();
        expect(() => compileAndroidCode()).toThrow(Error);

        // You can also use a string that must be contained in the error message or a regexp
        expect(() => compileAndroidCode()).toThrow('you are using the wrong JDK');
        expect(() => compileAndroidCode()).toThrow(/JDK/);

        // Or you can match an exact error message using a regexp like below
        expect(() => compileAndroidCode()).toThrow(/^you are using the wrong JDK$/); // Test fails
        expect(() => compileAndroidCode()).toThrow(/^you are using the wrong JDK!$/); // Test pass
    });

For additional documentation see: [Jest Documentation - Using Matchers](https://jestjs.io/docs/using-matchers)