

//changing main heading name
console.dir(document);
console.log(document.getElementById('main-heading'));
var mainHeading = document.getElementById('main-heading');
console.log(mainHeading);
mainHeading.textContent = 'New DOM Layout';


//changing the heading color
var mainTitle=document.getElementById("main-heading");
document.getElementById("page-header").classList.add("bg-success");
mainTitle.style.backgroundColor="green";




// adding paragraph 1 and paragraph 2
console.log(document.getElementById('para1'));
var paragraphOne = document.getElementById('para1');
console.log(paragraphOne);
paragraphOne.textContent='The Document Object Model (DOM) is a cross-platform and language-independent interface that treats an XML or HTML document as a tree structure.';

console.log(document.getElementById('para2'));
var paragraphTwo = document.getElementById('para2');
console.log(paragraphTwo);
paragraphTwo.textContent='The Document Object Model (DOM) is a programming interface for HTML and XML documents. It represents the page so that programs can change the document structure, style, and content. The DOM represents the document as nodes and objects. That way, programming languages can connect to the page.';

// changing the five card colors
var cardRed= document.getElementsByClassName("card-body");
document.getElementById("red").classList.remove("bg-white");
document.getElementById("red").classList.add("bg-danger");
console.log(cardRed);


var cardBlue= document.getElementsByClassName("card-body");
document.getElementById("blue").classList.remove("bg-white");
document.getElementById("blue").classList.add("bg-primary");
console.log(cardBlue);

var cardYellow= document.getElementsByClassName("card-body");
document.getElementById("yellow").classList.remove("bg-white");
document.getElementById("yellow").classList.add("bg-warning");
console.log(cardYellow);

var cardGreen= document.getElementsByClassName("card-body");
document.getElementById("green").classList.remove("bg-white");
document.getElementById("green").classList.add("bg-success");
console.log(cardGreen);

var cardDark= document.getElementsByClassName("card-body");
document.getElementById("black").classList.remove("bg-white");
document.getElementById("black").classList.add("bg-dark");
console.log(cardDark);




//button event listener

document.getElementById("btn").addEventListener("click", displayText);
function displayText(){
    var text = document.getElementById('para4');
    console.log(text);
    text.textContent='The Document Object Model is a cross-platform and language-independent interface that treats an XML or HTML document as a tree structure wherein each node is an object representing a part of the document.';
    console.log(displayText);
}

