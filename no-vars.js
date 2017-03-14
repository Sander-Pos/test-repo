var main = (function() {
	var para = document.getElementById("para");
	para.innerHTML = "Paragraph changed!";

	var myCanvas = document.getElementById("myCanvas");
	var ctx = myCanvas.getContext("2d");

	present = new Image();
	present.src = "present_menu.png";

	function drawPic() {
		ctx.drawImage(present,92,92);
	}
	function myFunction() {
		para.innerHTML = "added line one";
		ctx.beginPath();
		ctx.moveTo(0,0);
		ctx.lineTo(200,200);
		ctx.stroke();
	}
	function myNewFunction() {
		para.innerHTML = "added line two";
		ctx.beginPath();
		ctx.moveTo(200,0);
		ctx.lineTo(0,200);
		ctx.stroke();
	}
	function clearCanvas() {
		para.innerHTML = "cleared the canvas";
		ctx.clearRect(0,0,200,200);
	}
   return {
        lineOne: myFunction,
		lineTwo: myNewFunction,
        clear: clearCanvas,
		drawPic: drawPic
	};
})();
var secondary = (function() {
	var header = document.getElementById("header");

	function setHeader() {
		header.innerHTML = "header changed!";
	}
   return {
        change: setHeader
	};
})();


