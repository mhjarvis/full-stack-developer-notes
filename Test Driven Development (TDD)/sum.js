// Ensure that Jest is installed using npm: 
// 
// npm install --save-dev jest
//
// We start by writing a function:

function sum(a, b) { 
    return a + b;
}

// export that function to use in our test file:

module.exports = sum;

// after adding the sum.test.js file, we add the following to package.json:

/*

    {
    "scripts": {
        "test": "jest"
    }
    }

*/