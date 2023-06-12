// A capitalize function that takes a string and returns it with the first 
// character capitalized.

function reverseString(str) {
    let splitString = str.split('');
    let reverseArr = splitString.reverse();
    let joinArray = reverseArr.join('');
    return joinArray;
}

module.exports = reverseString;
