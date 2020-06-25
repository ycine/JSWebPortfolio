console.log('witaj')
var canvas = document.getElementById("myCanvas1");

var ctx = canvas.getContext("2d");


function draw() {

        
    ctx.fillStyle = "#FF6222";
    ctx.fillRect(0, 0, 51, 75);
    
}
function draw2() {
    ctx.fillStyle = "#FF9222";
    ctx.fillRect(150, 50, 51, 75);
}

function draw3() {
    ctx.fillStyle = "#FF9999";
    ctx.fillRect(60, 15, 51, 75);
}

function draw4() {
    ctx.moveTo(50, 60);
    ctx.lineTo(70, 100);
    ctx.strokeStyle = "RGB(1,1,255)";
    ctx.lineWidth = 8;
    ctx.stroke(); 
}

function draw5() {
    ctx.beginPath();
    ctx.arc(25, 98, 10, 0, 2 * Math.PI);
    ctx.strokeStyle =  "RGB(1,200,155)";
    ctx.stroke();
    console.log("2")
}
// draw();

function interva(){

    var set1 =setTimeout(draw,2000);
    var set2 =setTimeout(draw2,2500);
    var set3 =setTimeout(draw3,3000);
    var set4 =setTimeout(draw4,4000);
    var set5 =setTimeout(draw5,5000);
    
ctx.clearRect(0, 0, canvas.width, canvas.height);
}

dx = setInterval(interva,7000)