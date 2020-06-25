console.log('witaj')
var canvas = document.getElementById("myCanvas2");

var ctx2 = canvas.getContext("2d");


function draw() {

    ctx2.beginPath():
    ctx2.fillStyle = "#FF6222";
    ctx2.moveTo(0, 0);
    ctx2.lineTo(100,50);
    ctx2.lineTo(50, 100);
    ctx2.lineTo(0, 90);
    ctx2.closePath();
    ctx2.fill();
    
}
function draw2() {
    ctx2.fillStyle = "#FF9222";
    ctx2.fillRect(150, 50, 51, 61, 71);
}

function draw3() {
    ctx22.fillStyle = "#FF9999";
    ctx22.fillRect(60, 15, 51, 75);
}

function draw4() {
    ctx2.moveTo(50, 60);
    ctx2.lineTo(70, 100);
    ctx2.strokeStyle = "RGB(1,1,255)";
    ctx2.lineWidth = 8;
    ctx2.stroke(); 
}

function draw5() {
    ctx2.beginPath();
    ctx2.arc(25, 98, 10, 0, 2 * Math.PI);
    ctx2.strokeStyle =  "RGB(1,200,155)";
    ctx2.stroke();
    console.log("3")
}
// draw();

function interva(){

    var set1 =setTimeout(draw,2000);
    var set2 =setTimeout(draw2,2500);
    var set3 =setTimeout(draw3,3000);
    var set4 =setTimeout(draw4,4000);
    var set5 =setTimeout(draw5,5000);
    
ctx2.clearRect(0, 0, canvas.width, canvas.height);
}

dx = setInterval(interva,7000)