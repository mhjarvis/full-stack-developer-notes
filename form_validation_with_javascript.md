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

| Properties              | Description |
| ---------------         | ----------- |
| validity                | Contains boolean properties related to the validity of an input element |
| validationMessage       | Contains the message a browser will display when the validity is false. |
| willValidate            | Indicates if an input element will be vlidated.

## Validity Properties

| Properties              | Description |
| ---------------         | ----------- |
| customError             | Set to true, if a custom validity mesage is set |
| patternMismatch         | Set to true, if a custom validity message is set |
| rangeOverflow           | Set to true, if an element's value is greater than its max attribute |