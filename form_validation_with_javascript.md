## Introduction

While HTML and CSS provide some ways to validating forms, the Contstraint Validation API provides a way to validate form on the frontend with Javascript.

The goal is to get the right data, in the right format, while protecting the users' data and while protecting ourselves from faulty or malicious data.

In order to take control of the look and feel of native error mesages, you need to use JavaScript. 

## The Constraint Validation API

The setup is very basic. The HTML: 

    <input id="myInput" type="number" min="100" max="300" required>
    <button onclick="myFunction()">OK</button>

    <p id="output"></p>

The JavaScript: 

    function myFunction() {
      let text;
      if(document.getElementById("myInput").validity.rangeOverflow) {
        text = "Value too large";
      } else {
        text = "Input OK";
      }
      document.getElementById("output").innerHTML = text;
    }

## Constraint Validation DOM Properties