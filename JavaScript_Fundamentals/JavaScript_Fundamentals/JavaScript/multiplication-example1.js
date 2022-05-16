var var1 = 45;
var var2 = 78;
var var3 = 45.10;
var var4 = 178.12;
var newvar = var1 * var2;
var newvar1 = var3 * var4;

var newParagraph = document.createElement("p");
var newText = document.createTextNode("var1 * var2 = " + newvar);
newParagraph.appendChild(newText);
document.body.appendChild(newParagraph);

var newParagraph1 = document.createElement("p");
var newText1 = document.createTextNode("var3 * var4  = " + newvar1);
newParagraph1.appendChild(newText1);
document.body.appendChild(newParagraph1);