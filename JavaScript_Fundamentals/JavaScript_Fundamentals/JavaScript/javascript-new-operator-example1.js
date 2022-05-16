var date1 = new Date();
var newParagraph = document.createElement("p");
var newText = document.createTextNode('The date is : ' + date1);
newParagraph.appendChild(newText);
document.body.appendChild(newParagraph);