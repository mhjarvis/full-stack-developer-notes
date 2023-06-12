// A capitalize function that takes a string and returns it with the first 
// character capitalized.

function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

module.exports = capitalizeFirstLetter;
