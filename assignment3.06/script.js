var p = document.querySelector("#changeMe");

p.style.background = "blue";
p.style.color = "red";
p.style.textAlign = "center";
p.style.margin= "20px";
p.style.height=100;
function changeParagraphBackground()
{
    p.style.background = 'green';
}
p.onclick = changeParagraphBackground;

var currentMargin = 0;

function nextFrame()
{
    currentMargin++;
    p.style.margin = currentMargin + "px";
}

var currentHeight=0;

function nextHeight()
{
    currentHeight++;
    p.style.height = currentHeight 
}
var animation;

function play()
{
    animation = setInterval(nextFrame,20);
    animation = setInterval(nextHeight,500)
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