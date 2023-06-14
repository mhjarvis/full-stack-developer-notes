<h1 style="text-align:center">How to Set Up A New Project</h1>

## I. Setup Webpack and ```.gitignore```

1. Run ```npm init``` in the project directory to generate a ```package.json``` file. Use the default values if you like. 

2. Run ```npm install webpack webpack-cli --save-dev``` to install webpack to the ```node_modules``` directory of your project.

3. Add a ```.gitignore``` file to ignore the ```node_modules``` folder when backing up to GitHub. If these packages are needed when downloading, one can always run ```npm install``` to install all the packages listed in the ```package.json``` file.

4. Create a ```src``` directory with a ```index.js``` file.

5. Create a ```dist``` directory with ```index.html``` and ```styles.css``` files.

## II. Link Your Files

1. In ```index.html``` include the following skeleton: 

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

2. Create a ```webpack.config.js``` file that includes the following:

    const path = require('path');

    module.exports = {
      mode: 'production',
      entry: './src/index.js',
      output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
      },
    };

4. Run ```npx webpack --config webpack.config.js``` to run the build; this should create the ```main.js``` file in the ```dist``` folder.

5. Run ```npx webpack --watch``` so you do not have to rerun webpack everytime you make a change.

## III. Add Testing Support

1. In ```package.json```, change the ```test``` line to read ```"test": "jest"```.

## IV. Setup  CSS

1. Add a ```reset.css``` file in the dist folder. Add the following content:

    /* http://meyerweb.com/eric/tools/css/reset/ 
    v2.0 | 20110126
    License: none (public domain)
    */

    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed, 
    figure, figcaption, footer, header, hgroup, 
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
    }
    /* HTML5 display-role reset for older browsers */
    article, aside, details, figcaption, figure, 
    footer, header, hgroup, menu, nav, section {
        display: block;
    }
    body {
        line-height: 1;
    }
    ol, ul {
        list-style: none;
    }
    blockquote, q {
        quotes: none;
    }
    blockquote:before, blockquote:after,
    q:before, q:after {
        content: '';
        content: none;
    }
    table {
        border-collapse: collapse;
        border-spacing: 0;
    }

2. In your ```styles.css``` file, add the following:

    @import url('./reset.css');

    /*************************************/ 
    /************** GENERAL **************/
    /*************************************/ 

    :root {
        font-size: 10px;
        font-family: ;
        
        /* Color Variables */
        --white: #000000;       
    }

    * {
    /*   outline: 1px solid red;  */  
    }

    body {
        display: flex;
        align-items: center;
        justify-content: center;
        overflow-x: hidden;
    }

    main {

    }

    @media (min-width: 800px) {
        main {

        }