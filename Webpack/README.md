# Webpack

## Why Use Webpack
Javascript is becoming more and more complex. As your application grows, Webpack will help keep things organized and compile everything to one file. It will manage dependencies, prevent file collisions, manage your assets, etc. 

## Setting Up
In the directory you are working in, e can initialize a basic JSON file via:

    npm init -y                     // answers yes to all questions

This will create the package.json file that will save references to our installed modules. From here we can install webpack via the cmd line:

    npm install webpack webpack-cli --save-dev

## Walking Through Webpack

Webpack no longer requires a configuration file. It assumes the entry point of the project is ```src/index``` and will output the result in ```dist/main.js```. It expects you to create a entry file called ```index.js``` inside a src folder and it will then create a output file in ```dist/main.js```.

Create a ```src``` folder with a ```index.js``` file in it. This will be our entry point.

If we want to test everything, we can add some JavaScript and run ```node_modules/.bin/webpack```. This will tell webpack to bundle the JS and it will update everything into one file via ```dist/main.js```. This is not the prefered method to run webpack. 

Javascript will output the results of the build, and most likely you will see a WARNING regarding the 'mode' option. To disregard this WARNING, we can either add ```--mode=production``` to our call, or update our ```package.json``` file. We can do that by removing the following line:

    "test": "echo \"Error: no test specified\" && exit 1"

and replace it with:

    "build": "webpack --mode=production"

This will allow us to use our custom command of ```npm run build```. This looks for a webpack command in the ```node_modules``` and call it for us. **Note that you can call this whatever you want in your ```package.json``` file. You can use 'dev' instead of 'build', or whatever you would like.

At this point we can create a HTML file, link it to dist/main.js, and see if everything works alright. 

## Writing Modular Code

