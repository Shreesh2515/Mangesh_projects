var a = 20;
var b = 5;
var newParagraph = document.createElement("p"); //creates a new paragraph element
var newText = document.createTextNode('Value of a = ' + a + ' b = ' + b); //creates text along with ouput to be displayed 
newParagraph.appendChild(newText); //created text is appended to the paragraph element created
document.body.appendChild(newParagraph); // created paragraph and text along with output is appended to the document body
if (a != b) {
    var newParagraph1 = document.createElement("p"); //creates a new paragraph element
    var newText1 = document.createTextNode('a is not equal to b [ != operator ]'); //creates text along with ouput to be displayed 
    newParagraph1.appendChild(newText1); //created text is appended to the paragraph element created
    document.body.appendChild(newParagraph1); // created paragraph and text along with output is appended to the document body
}
else {
    var newParagraph2 = document.createElement("p"); //creates a new paragraph element
    var newText2 = document.createTextNode('a is equal to b.'); //creates text along with ouput to be displayed 
    newParagraph2.appendChild(newText2); //created text is appended to the paragraph element created
    document.body.appendChild(newParagraph2); // created paragraph and text along with output is appended to the document body
}