// var p = document.getElementById("changeMe");
var p = document.querySelector("#changeMe");


p.innerHTML = "text";
p.stlye.background = "blue";
p.style.color = "red";
p.style.textAlign = "center";
function changeParagraphBackground()
{
    p.style.background = 'green';
}
p.onclick = changeParagraphBackground;

var currentMargin = 0;
function nextFrame()
{
    currentMargin++;
    p.style.margin = currentMargin + "pc";
}

var animation;

function play()
{
    animation = setInterval(nextFrame,20);
}
play();
document.querySelector("#play").onclick = play

function stop()
{
    currentMargin = 0;
    p.style.margin = "0px";
    clearInterval(animation);
}

document.querySelector("#stop").onclick=stop;