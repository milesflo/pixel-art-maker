// var body = getElementsByTagName('body');
// body.style.marginTop = "0";

function makeDiv(color) {
  	var div = null;
	div = document.createElement('div');
	div.style.width = "9.555%";
	div.style.height = "width";
	div.style.float= "left";
	div.style.paddingBottom = "9.555555%";
	div.style.backgroundColor = color;
	div.style.border = "1px solid black";
  	return div;
}


function newBG(color) {
	for (var i = 0; i < 110; i++) {
	  document.body.appendChild(makeDiv(color));
	}
}

newBG("white");