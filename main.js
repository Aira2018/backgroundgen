var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var gradcolor = document.getElementsByTagName('h3');
var body = document.getElementById("gradient");
var currentbackground = document.getElementById("demo");
var amazing = document.getElementById('amazing');

function setGradient(){
    body.style.background = "linear-gradient(to right, "
                            + color1.value 
                            + "," 
                            + color2.value 
                            + ")";
    currentbackground.textContent = body.style.background;
    amazing.textContent = 'wow amazing background';
}

color1.addEventListener('input', setGradient);
color2.addEventListener('input', setGradient);