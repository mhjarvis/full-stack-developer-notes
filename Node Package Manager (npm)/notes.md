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
