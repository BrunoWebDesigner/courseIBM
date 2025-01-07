//Creates the element <p> and text "Hello World". Appends Hello World <p> to the HTML document.
function addPara() {
    var newPara = document.createElement("p");
    var newText = document.createTextNode("Hello World!");
    newPara.appendChild(newText);
    document.body.appendChild(newPara);
}

// Arrays
const Beatles = ["Ringo", "Paul", "George", "John"];
// Here Beatles[0] is "Ringo".

// Create a new date from a string
var newDate = new Date("2021-01-17T13:15:30");

// Create a new date instance representing 17 Jan 2021 00:00:00
// Note that the month number is zero-based
var newDate = new Date(2021, 0, 17);

//Changes the content of the div to "Hello World!"
document.getElementById("div1").innerHTML = "<p>Hello World!</p>";

// Gets an array of all elements in a document with the <p> tag.
var tagNameArray = document.getElementsByTagName("p");

// Writes "Hello World" to the output stream.
document.write("Hello World");

// Removes the CSS style color blue
var div1 = document.getElementById("div1").getAttribute("style");

// Changes the content of the div to "Hello World!"
document.getElementById("div1").innerHTML = "<p>Hello World!</p>";

// Removes the CSS style color blue
var div1 = document.getElementById("div1").getAttribute("style");

// In all elements named "theImage" sets the name of all src attributes to "another.gif"
document.getElementById("theImage").setAttribute("src", "another.gif");

// Changes the CSS style color from blue to red
var div1 = document.getElementById("div1");
div1.style.color = "red";

// Catch statement defines a block of code to be executed if an error occurs in the try block.
try {

// Some code that may throw an error
} catch (err) {
    document.getElementById("myfile").innerHTML = err.name;
}

// Creates custom error message
throw new Error("Only values 1-10 are permitted");

// Go back two pages if the history exists in the history list.
history.go(-2);

// Creates a new <li> element and places it in the elementList before the first child of <ul>
let newLI = document.createElement("li");
newLI.innerText = "new Element";
let elementList = document.getElementById("thisList");
elementList.insertBefore(newLI, elementList.childNodes[0]);

// Returns the hostname property
let myhost = location.hostname;

// Retrieves the name of the browser
var browsername = navigator.appName;

// Executes myFunction after MyHTMLPage has been loaded
document.getElementById("MyHTMLPage").onload = function () { myFunction(); };

// Creates a new node and replaces the second element in "thisList" with the word "blue"
let secondBullet = document.createTextNode("blue");
var myList = document.getElementById("thisList");
myList.replaceChild(secondBullet, myList.childNodes[1]);

// Returns the height and width of the user’s screen
var height = screen.height;
var width = screen.width;

// Opens a new browser window with the specified URL
window.open("http://www.w3schools.com");

// Opens a new window that opens the IBM home page and has a width of 600 and a height of 800
let thisWindow = window.open("http://www.ibm.com", "myWindow", "width=600,height=800");

// Scrolls the window to the pixel located at the coordinate (20, 200)
window.scrollTo(20, 200);

// Enables the use of properties and methods of the String class such as the property n.length
let n = new String("abc");

// Returns string
typeof "abc";

// Returns object
typeof new String("abc");
