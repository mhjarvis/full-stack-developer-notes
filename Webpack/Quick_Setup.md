# Installing Webpack

1. Ensure that Node JS is installed. 
2. In the working folder, create the ```package.json``` file:
    
    npm init

3. Install webpack:

    npm install webpack webpack-cli --save-dev

4. Create a ```index.js``` file in a new ```src``` folder.
5. Create a ```index.html``` file.
6. Create a ```webpack.config.js``` file in the root folder with the following code:

    ```module.exports = {
        watch: true         // for auto updating code and reloading
        entry: "./src/index.js",
        output: {
            filename: "main.js"
        }
    }```
