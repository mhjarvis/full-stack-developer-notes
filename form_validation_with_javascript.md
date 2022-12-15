## Introduction

While HTML and CSS provide some ways to validating forms, the Contstraint Validation API provides a way to validate form on the frontend with Javascript. One of the major issues with relying on just HTML/CSS for validation is that there is no way to style the output. Another issue is the problem of browser compatibility.

The goal is to get the right data, in the right format, while protecting the users' data and while protecting ourselves from faulty or malicious data.

In order to take control of the look and feel of native error mesages, you need to use JavaScript. 

## Resources

1. [Mozilla Form Validation](https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation)
2. [W3 Tutorials JavaScript Validaation API](https://www.w3schools.com/js/js_validation_api.asp)

## The Constraint Validation API

The setup is very basic. The HTML: 

    <input id="myInput" type="number" min="100" max="300" required>
    <button onclick="myFunction()">OK</button>

    <p id="output"></p>

The JavaScript can be written several ways, two of which are: 

    function myFunction() {
      let text;
      if(document.getElementById("myInput").validity.rangeOverflow) {
        text = "Value too large";
      } else {
        text = "Input OK";
      }
      document.getElementById("output").innerHTML = text;
    }

OR:
  <form>
    const myInput = document.getElemntByID('myInput');

    myInput.addEventListener('input', (event) => {
      if(myInput.validity.typeMimatch) {
        myInput.setCustomValidity("I was expecting soemething else"):;
        myInput.reportValidity();
      } else {
        myInput.setCustomValidity("");
      }
    })
  </form>
  
## Constraint Validation DOM Properties

| Properties                    | Description |
| ---------------               | ----------- |
| ```validity```                | Contains boolean properties related to the validity of an input element |
| ```validationMessage```       | Contains the message a browser will display when the validity is false. |
| ```willValidate```            | Indicates if an input element will be vlidated.

## Validity Properties

| Properties                    | Description |
| ---------------               | ----------- |
| ```customError```             | Set to true, if a custom validity mesage is set |
| ```patternMismatch```         | Set to true, if a custom validity message is set |
| ```rangeOverflow```           | Set to true, if an element's value is greater than its max attribute |
| ```rangeUnderflow```          | Set to true, if an element's value is less than its min attribute |
| ```stepMismatch```            | Set to true, if an element's value is invalid per its step attribute |
| ```tooLong```                 | element's value exceeds its maxLength attribute |
| ```typeMismatch```            | Set to true, if an element's value is invalid per its type attribute |
| ```valueMissing```            | Set to true, if an element (with a required attribute) has no value |
| ```valid```                   | Set to true, if an element's value is valid |


### Additional Examples

Here we are checking whether a input element has no value, in which case, it will not be submitted until it contains one.

    const the_title = document.getElementById('the_title');

    the_title.addEventListener("input", (event) => {
      if(the_title.validity.valueMissing) {
        the_title.setCustomValidity("Please enter a book title");
        the_title.reportValidity();
      } else {
        the_title.setCustomValidity("");
      }
    });