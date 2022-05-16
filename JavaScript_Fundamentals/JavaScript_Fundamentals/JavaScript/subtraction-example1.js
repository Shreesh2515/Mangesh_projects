var var1 = 45;
var var2 = 78;
var str1 = "Mangesh";
var str2 = "Purandare";
var newvar = var1 - var2;
var newstr = str1 - str2;
var varstr = var1 - str2;
var newParagraph = document.createElement("p");
var newText = document.createTextNode("var1 -var2 = " + newvar);
newParagraph.appendChild(newText);
document.body.appendChild(newParagraph);
var newParagraph1 = document.createElement("p");
var newText1 = document.createTextNode("str1 - str2  = " + newstr);
newParagraph1.appendChild(newText1);
document.body.appendChild(newParagraph1);
var newParagraph2 = document.createElement("p");
var newText2 = document.createTextNode("var1 - str2  = " + varstr);
newParagraph2.appendChild(newText2);
document.body.appendChild(newParagraph2)
