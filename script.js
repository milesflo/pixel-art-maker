var currentColor = null;

function makeDiv(color) {
  	var div = null;
	div = document.createElement('div');
	div.style.width = "4.6%";
	div.style.height = "width";
	div.style.float = "left";
	div.style.paddingBottom = "4.6%";
	div.style.backgroundColor = color;
	div.style.border = "1px solid #C4C3FD";
	div.addEventListener("click", colorChange)
  	return div;
}


function blankSlate(color) {
	for (var i = 0; i < 400; i++) {
	  var div = makeDiv(color);
	  div.id = i;
	  document.body.appendChild(div);
	}
}

//======================
var box = document.getElementsByTagName('div');

function colorChange (event) {
	event.target.style.backgroundColor = "red";
}


//=========================

// function reColor(color) {
// 	var targetBox = 
// }

blankSlate("white");