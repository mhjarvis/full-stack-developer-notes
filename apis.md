## Introduction

APIs (Application Programming Interfaces) provide for a way to serve data to users for external uses. APIs are accessed through URLs. How these are accessed depends on the service. This is usually documentd on the service's website. 

In most cases, you will also need to create an account and request access to a services data (get an API key). That key will usually need to be included with each data request. This leads to limitations that your key will generally have, especially if free. 


## Resources

1. [Odin Project Link](https://www.theodinproject.com/lessons/node-path-javascript-working-with-apis)
2. [Cross-Origin Request Sharing - javascript.info](https://javascript.info/fetch-crossorigin)
3. [Using the Fetch API - Mozilla](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)
4. [Public APIs Part 1](https://github.com/n0shake/Public-APIs)
5. [Public APIs Part 2](https://github.com/public-apis/public-apis)

## Fetching Data

Using the service ```fetch```, we can make  HTP rquestion uing the following outline:

    // URL (required), options (optional)
    fetch('https://url.com/some/url')
      .then(function(response) {
        // Successful response :)
      })
      .catch(function(err) {
        // Error :(
      });

      https://api.giphy.com/v1/gifs/translate?api_key=QPKhJ9M8D5gOxLFBM0K05fGTXyU2nfbh&s=ryan_goslin

## Cross-Origin Request Sharing (CORS)

When we send a fetch request to another website, it will probably fail. Cross-Origin Requests (those sent to another domain) require special haders from the remote site.

With fetch, you are able to easily supply a JavaScript object for options. 

  fetch('url.url.com/api', {
    mode: 'cors'
  });

Adding the ```{mode: 'cors'}``` after the URL will take care of this problem. 

## Using Fetch

An example:

  <body>
    <img src="#">
    <script>
      const img = document.querySelector('img');      // select img element in html
      fetch('https://api.giphy.com/v1/gifs/translate?api_key=QPKhJ9M8D5gOxLFBM0K05fGTXyU2nfbh&s=ryan_goslin', {mode: 'cors'})
        .then(function(response) {
            return response.json();
        })
        .then(function(response) {
            img.src = response.data.images.original.url;
        });
    </script>
  </body>