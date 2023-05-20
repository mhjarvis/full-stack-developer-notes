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

Javascript will output the results of the build, and most likely you will see a WARNING regarding the 'mode' option. To disregard this WARNING, we can either add ```--mode=production``` to our call, or update our ```package.json``` file. 