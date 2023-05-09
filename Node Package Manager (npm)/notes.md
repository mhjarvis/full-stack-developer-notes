### Creating a new project

In the folder that will hold he project, type:

    npm init

This will create the walkthrough in setting up your project and creating a package.JSON (JavaScript Object Notation) file. JSON is a format for stroing and transporting data and is often used when data is sent from a server to a web page. For example: 

    {
        "employees":[
            {"firstName":"John", "lastName":"Doe"},
            {"firstName":"Anna", "lastName":"Smith"},
            {"firstName":"Peter", "lastName":"Jones"}
        ]
    }

The package walkthrough will allow you to create a package name, vresion, description, entry point (index.js), test command, git repository, keywords, author, license, etc. The result will be the creation of a package.json file, for example: 

    {
    "name": "npm_project",
    "version": "1.0.0",     
    "description": "",
    "main": "index.js",
    "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1"
    },
    "author": "",
    "license": "ISC"
    }

Versioning in npm takes the form of semantic versioning (Major Version / Minor Version / Patch Number)  

You can use npm to install programs using: 

    npm install

This will install all packages that are listed in the package.json file as dependencies. These can be found in the node_modules folder. 

You can also install a specific package using:

    npm install <package>

    npm install <package> --save-dev            // creates development dependency

For example, we can install a package (such as moment to help with parsing, validating dates) by typing ```npm install moment```. Once this package is added, it will now depend as a dependency in the package.json file. It also adds a package-lock.json file and adds a 'moment' folder under node_modules.