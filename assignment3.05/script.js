// var p = document.getElementById("changeMe");
var p = document.querySelector("#changeMe");


p.innerHTML = "text";
p.stlye.background = "blue";
p.style.color = "red";
p.style.textAlign = "center";
function changeParagraphBackground()
{
    onclick="this.style.background= 'green'"
}

p.onclick = changeParagraphBackground;