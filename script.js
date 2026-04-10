window.onresize = screen;
window.onload = screen;

function screen(){
    width = window.innerWidth;
    document.getElementById("size").innerHTML = "WIDTH " + width + "px";
}