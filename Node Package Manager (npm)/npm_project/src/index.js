const moment = require("moment");   // import external package into file
const semver = require("semver");   // import semver package

const a = 10;

const day = moment().format("dddd");        // call moment and function to return date of the week

console.log(day);

console.log(semver.valid("1.5.2"))      // valid version
console.log(semver.valid("1.2.33.3"))   // invalid version returns 'null'