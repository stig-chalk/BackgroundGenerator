var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var random = document.querySelector("span");

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";
	css.textContent = body.style.background;
}

function randomRGB() {
	var rgb = "#";
	for (var i = 0; i < 3; i++) {
		var hex = Math.round(Math.random()*15).toString(16);
		rgb += hex + hex;
	}
	return rgb;
}

function randomBg() {
	color1.value = randomRGB();
	color2.value = randomRGB();
	setGradient();
}

css.textContent = body.style.background;
setGradient();

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

random.addEventListener("click", function() {
	randomBg();
});