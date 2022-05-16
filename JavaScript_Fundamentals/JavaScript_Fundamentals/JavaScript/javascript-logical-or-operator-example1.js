function viewOutput() {
    'use strict';
    var no = document.getElementById('no').value;
    if (no < 5 || no > 20) {
        var newParagraph = document.createElement("p"); //creates a new paragraph element
        var newText = document.createTextNode('Value of input is less than 5 or greater than 20'); //creates text along with ouput to be displayed 
        newParagraph.appendChild(newText); //created text is appended to the paragraph element created
        document.body.appendChild(newParagraph); // created paragraph and text along with output is appended to the document body
    }
    else {
        var newParagraph1 = document.createElement("p"); //creates a new paragraph element
        var newText1 = document.createTextNode('Wrong input'); //creates text along with ouput to be displayed 
        newParagraph1.appendChild(newText1); //created text is appended to the paragraph element created
        document.body.appendChild(newParagraph1); // created paragraph and text along with output is appended to the document body
    }
}