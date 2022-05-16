var fruits = new Array("Orange", "Apple", "Banana", "Chery");
var newParagraph = document.createElement("p");
var newText = document.createTextNode("Fruits List : " + fruits);
newParagraph.appendChild(newText);
document.body.appendChild(newParagraph);
//Delete the array object.
delete fruits;
var newParagraph1 = document.createElement("p");
var newText1 = document.createTextNode("Display the Fruits after delete the array object - Fruits List : " + fruits;);
newParagraph1.appendChild(newText1);
document.body.appendChild(newParagraph1);