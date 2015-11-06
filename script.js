var currentColor = "red";

function makeDiv(color) {
  	var div = null;
	div = document.createElement('div');
	div.style.width = "2.3%";
	div.style.height = "width";
	div.style.float = "left";
	div.style.paddingBottom = "2.3%";
	div.style.backgroundColor = color;
	div.style.border = "1px solid #C4C3FD";
  	return div;
}

function pallette(amount) {
	for (var i = 0; i < amount; i++) {
	  var div = makeDiv();
	  div.style.border = "0";
	  div.style.margin = "1px";
	  div.id = "pallette"+i;
	  div.style.backgroundColor = "undefined";
	  document.body.appendChild(div);
	  div.addEventListener("click", colorChange);
	}
}

function blankSlate(color) {
	for (var i = 0; i < 1073; i++) {
	  var div = makeDiv(color);
	  div.id = i;
	  div.addEventListener("click", paint);
	  document.body.appendChild(div);
	}
}

function paint (event) {
	event.target.style.backgroundColor = currentColor;
}

function colorChange (event) {
	currentColor = event.target.style.backgroundColor;
	document.getElementById("pallette36").style.backgroundColor=currentColor;
	document.getElementById("pallette36").style.border= "1px solid black";
	document.getElementById("pallette36").style.margin= "0";
}


//=========================

// function reColor(color) {
// 	var targetBox = 
// }
function init() {
	pallette(37);
	blankSlate("white");
	document.getElementById("pallette0").style.backgroundColor="#fdfdfd";
	document.getElementById("pallette1").style.backgroundColor="#ddd";
	document.getElementById("pallette2").style.backgroundColor="#bbb";
	document.getElementById("pallette3").style.backgroundColor="#999";
	document.getElementById("pallette4").style.backgroundColor="#777";
	document.getElementById("pallette5").style.backgroundColor="#555";
	document.getElementById("pallette6").style.backgroundColor="#333";
	document.getElementById("pallette7").style.backgroundColor="#111";

	document.getElementById("pallette8").style.backgroundColor="#ff8080";
	document.getElementById("pallette9").style.backgroundColor="#ff0000";
	document.getElementById("pallette10").style.backgroundColor="#b30000";
	document.getElementById("pallette11").style.backgroundColor="#660000";

	document.getElementById("pallette12").style.backgroundColor="#ffcc80";
	document.getElementById("pallette13").style.backgroundColor="#ff8000";
	document.getElementById("pallette14").style.backgroundColor="#cc7a00";
	document.getElementById("pallette15").style.backgroundColor="#804d00";

	document.getElementById("pallette16").style.backgroundColor="#ffffcc";
	document.getElementById("pallette17").style.backgroundColor="#ffff00";
	document.getElementById("pallette18").style.backgroundColor="#cccc00";
	document.getElementById("pallette19").style.backgroundColor="#7f8000";

	document.getElementById("pallette20").style.backgroundColor="#b3ffb3";
	document.getElementById("pallette21").style.backgroundColor="#00f000";
	document.getElementById("pallette22").style.backgroundColor="#00b300";
	document.getElementById("pallette23").style.backgroundColor="#008000";

	document.getElementById("pallette24").style.backgroundColor="#b3ffff";
	document.getElementById("pallette25").style.backgroundColor="#00FFFF";
	document.getElementById("pallette26").style.backgroundColor="#00cccc";
	document.getElementById("pallette27").style.backgroundColor="#006666";

	document.getElementById("pallette28").style.backgroundColor="#B3B3ff";
	document.getElementById("pallette29").style.backgroundColor="#0000ff";
	document.getElementById("pallette30").style.backgroundColor="0000b3";
	document.getElementById("pallette31").style.backgroundColor="000066";

	document.getElementById("pallette32").style.backgroundColor="#ffb3ff";
	document.getElementById("pallette33").style.backgroundColor="#ff00ff";
	document.getElementById("pallette34").style.backgroundColor="#cc00cc";
	document.getElementById("pallette35").style.backgroundColor="#80007f";


}

init();

