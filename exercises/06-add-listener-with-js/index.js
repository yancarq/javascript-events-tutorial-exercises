window.onload = function myLoadFunction() {
	alert("The website just finished loading!");
	//some code here
	document.getElementById("theGreen").addEventListener("click", EventoClickGreen);
};

//the listener function here
function EventoClickGreen() {
	alert("wuju.....!");
}
