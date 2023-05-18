# Webpack

## Why Use Webpack
Javascript is becoming more and more complex. As your application grows, Webpack will help keep things organized and compile everything to one file. It will manage dependencies, prevent file collisions, manage your assets, etc. 

## Setting Up
In the directory you are working in, e can initialize a basic JSON file via:

    npm init -y                     // answers yes to all questions

This will create the package.json file that will save references to our installed modules. From here we can install webpack via the cmd line:

    npm install webpack webpack-cli --save-dev