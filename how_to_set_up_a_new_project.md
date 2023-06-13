<h1 style="text-align:center">How to Set Up A New Project</h1>

## I. Setup Webpack and ```.gitignore```

1. Run ```npm init``` in the project directory to generate a ```package.json``` file. Use the default values if you like. 

2. Run ```npm install webpack webpack-cli --save-dev``` to install webpack to the ```node_modules``` directory of your project.

3. Add a ```.gitignore``` file to ignore the ```node_modules``` folder when backing up to GitHub. If these packages are needed when downloading, one can always run ```npm install``` to install all the packages listed in the ```package.json``` file.

4. Create a ```src``` directory with a ```index.js``` file.

5. Create a ```dist``` directory with ```index.html``` and ```styles.css``` files.

## II. Link Your Files

In ```index.html``` include the following skeleton: 

    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="styles.css">
        <script src="main.js" defer></script>
        <title>Document</title>
    </head>
    <body>
        
    </body>
    </html>

In ```styles.css``` include the following skeleton:
