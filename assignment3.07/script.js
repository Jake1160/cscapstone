let rotations = 0;

function turnPage()
{
    rotations += 0.25;
    document.querySelector("body").style.transform = "rotate(" + rotations + "turn)";
}