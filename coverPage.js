
 var contactNav = document.getElementById("navId2");
 var btn2 = document.getElementById("toggleButton2");
btn2.innerHTML = "&#8592";

contactNav.style.right = "-255px";

function toggleRight(){
	contactNav.style.height = window.innerHeight - 60+"px";
	if(contactNav.style.right == "-255px"){
		contactNav.style.right = "0px";
        btn2.innerHTML = "&#8594";
	} else {
		contactNav.style.right = "-255px";
        btn2.innerHTML = "&#8592";
	}
}

 var contactDiv = document.getElementById("contacts");

function address(){

var descriptString = "Life never stops being a teacher. But for a young child, life lessons  are   abundant.  In  this  book,   we  give  joyful company to little Tara as  she comes to terms with the world and its many surprises.";


var addString= " <br/> <br/> &copy; Punjiri Web and Mobile Technologies, 2016.  <br/> Mangalore, Karnataka, India  <br/>  Email: maya.ahmed@gmail.com <br/>";

var newString = descriptString + addString;
contactDiv.innerHTML= newString;
}

address();

var overlay = document.getElementById("overlay");
window.addEventListener("load", function(){
    overlay.style.display="none";

  })
