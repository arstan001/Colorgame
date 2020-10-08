var colors = [
	"rgb(255, 0, 0)",
	"rgb(255, 255, 0)",
	"rgb(0, 255, 0)",
	"rgb(0, 255, 255)",
	"rgb(0, 0, 255)",
	"rgb(255, 0,255)",
]
var a;
var tuxt = "RGB(255, 0, 0)";
var squares = document.querySelectorAll(".square");
var butt = document.getElementById("colorname");
var newcolor = document.getElementById("newcolor");
var easymod = document.getElementById("easy");
var hardmod = document.getElementById("hard");
var tryagain = document.getElementById("tryagain");
var sectop = document.getElementById("top");

for(var i=0; i < squares.length; i++){
	squares[i].style.backgroundColor = colors[i];
}


function randomize () {
	tuxt = "rgb(";
	a = Math.floor(Math.random() * 255); 
	tuxt += a + ", ";
	a = Math.floor(Math.random() * 255); 
	tuxt += a + ", ";
	a = Math.floor(Math.random() * 255); 
	tuxt += a + ")";
	return tuxt;
}

newcolor.addEventListener("click", gethard)

function gethard(){
	var word = randomize();
	easymod.classList.toggle("selected");
	hardmod.classList.toggle("selected");
	newcolor.textContent = "New Colors";
	tryagain.textContent = "Try again";
	tryagain.style.color = "white";

	sectop.style.backgroundColor = "#0071bd";
	var i = Math.floor(Math.random() * 5);
	squares[i].style.backgroundColor = word;
	
	butt.textContent = word;

	for (var n = 0; n < squares.length; n++){
		if (n!==i){
			squares[n].style.backgroundColor = randomize();
		}
	}
}
function geteasy(){
	
	easymod.classList.toggle("selected");
	hardmod.classList.toggle("selected");
	var word = randomize();
	newcolor.textContent = "New Colors";
	tryagain.textContent = "Try again";
	tryagain.style.color = "white";
	sectop.style.backgroundColor = "#0071bd";
	var i = Math.floor(Math.random() * 2);
	squares[i].style.backgroundColor = word;
	
	butt.textContent = word;

	for (var n = 0; n < squares.length/2; n++){
		if (n!==i){
			squares[n].style.backgroundColor = randomize();
		}
	}
}

easymod.addEventListener("click", function(){
	newcolor.addEventListener("click", geteasy)
	geteasy();
	for (var n = 3; n < squares.length; n++){
		squares[n].classList.add("d-none");
	}
})
hardmod.addEventListener("click", function(){
	newcolor.addEventListener("click", gethard)
	for (var n = 3; n < squares.length; n++){
		squares[n].classList.remove("d-none");
	}
	gethard();
})
function ifright(element)
{

	if (this.style.backgroundColor === butt.textContent)
	{
		var ourcolor = butt.textContent;
		for (var n = 0; n < squares.length; n++){
			squares[n].style.backgroundColor = ourcolor;
		}
		sectop.style.backgroundColor = ourcolor;
		tryagain.textContent = "Congratulations!";
		tryagain.style.color = "black"
		newcolor.textContent = "PLAY AGAIN!";	
	}
	else
	{
		tryagain.style.color = "black"
		this.style.backgroundColor = "#232323";
	}
}
for (var n = 0; n < squares.length; n++){
	squares[n].addEventListener("click", ifright);
}
gethard();
