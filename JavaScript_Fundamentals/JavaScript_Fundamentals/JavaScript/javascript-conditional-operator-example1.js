function ViewOutput() {
    'use strict';
    var marks = document.getElementById("marks").value;
    var status1 = (marks >= 30) ? "Pass" : "Fail";
    var newParagraph = document.createElement("p"); //creates a new paragraph element
    var newText = document.createTextNode(status1); //creates text along with ouput to be displayed 
    newParagraph.appendChild(newText); //created text is appended to the paragraph element created
    document.body.appendChild(newParagraph); // created paragraph and text along with output is appended to the document body
}