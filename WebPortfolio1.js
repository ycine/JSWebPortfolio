console.log('witaj')
var canvas = document.getElementById("myCanvas");

var ctx = canvas.getContext("2d");

function draw01() {   
    ctx.moveTo(100, 105);
    ctx.lineTo(100, 110);
    ctx.strokeStyle = "RGB(1,1,255)";
    ctx.lineWidth = 1;
    ctx.stroke(); 
}
function draw() {   
    ctx.moveTo(100, 100);
    ctx.lineTo(100, 105);
    ctx.strokeStyle = "RGB(1,1,255)";
    ctx.lineWidth = 1;
    ctx.stroke(); 
    
}
function draw2() {   
    ctx.moveTo(100, 95);
    ctx.lineTo(100, 100);
    ctx.strokeStyle = "RGB(1,1,255)";
    ctx.lineWidth = 1;
    ctx.stroke(); 
}
function draw3() {
    ctx.moveTo(100, 90);
    ctx.lineTo(100, 95);
    ctx.strokeStyle = "RGB(1,1,255)";
    ctx.lineWidth = 1;
    ctx.stroke(); 
}
function draw4() {
    ctx.moveTo(100, 85);
    ctx.lineTo(100, 90);
    ctx.strokeStyle = "RGB(1,1,255)";
    ctx.lineWidth = 1;
    ctx.stroke(); 
}

function draw5() {
    ctx.moveTo(100, 80);
    ctx.lineTo(100, 85);
    ctx.strokeStyle = "RGB(1,1,255)";
    ctx.lineWidth = 1;
    ctx.stroke(); 
}

function draw6() {
    ctx.moveTo(100, 75);
    ctx.lineTo(100, 80);
    ctx.strokeStyle = "RGB(1,1,255)";
    ctx.lineWidth = 1;
    ctx.stroke(); 
}

function draw7() {
    ctx.moveTo(100, 70);
    ctx.lineTo(100, 75);
    ctx.strokeStyle = "RGB(1,1,255)";
    ctx.lineWidth = 1;
    ctx.stroke(); 
}
function draw8() {
    ctx.moveTo(100, 65);
    ctx.lineTo(100, 70);
    ctx.strokeStyle = "RGB(1,1,255)";
    ctx.lineWidth = 1;
    ctx.stroke(); 
}
function draw9() {
    ctx.moveTo(100, 60);
    ctx.lineTo(100, 65);
    ctx.strokeStyle = "RGB(1,1,255)";
    ctx.lineWidth = 1;
    ctx.stroke(); 
}
function draw10() {
    ctx.beginPath();
    ctx.arc(103, 77, 16, 23.5, 24 );
    ctx.strokeStyle =  "RGB(1,200,155)";
    ctx.stroke();
    console.log("1")
}
function draw11() {
    ctx.beginPath();
    ctx.arc(103, 77, 16, 24, 24.5 );
    ctx.strokeStyle =  "RGB(200,000,055)";
    ctx.stroke();
    console.log("1")
}
function draw12() {
    ctx.beginPath();
    ctx.arc(103, 77, 16, 24.5, 25.5 );
    ctx.strokeStyle =  "RGB(100,000,155)";
    ctx.stroke();
    console.log("1")
}
function draw13() {
    ctx.beginPath();
    ctx.arc(103, 77, 16, 25.5, 26.9 );
    ctx.strokeStyle =  "RGB(200,100,055)";
    ctx.stroke();
    console.log("1")
}
/////////////////////////////////////////////
function draw001() {   
    ctx.moveTo(130, 90);
    ctx.lineTo(135, 97);
    ctx.strokeStyle = "RGB(1,1,1)";
    ctx.lineWidth = 1;
    ctx.stroke(); 
}
function draw002() {   
    ctx.moveTo(135, 97);
    ctx.lineTo(140, 104);
    ctx.strokeStyle = "RGB(1,1,255)";
    ctx.lineWidth = 1;
    ctx.stroke(); 
}
function draw003() {   
    ctx.moveTo(140, 104);
    ctx.lineTo(145, 111);
    ctx.strokeStyle = "RGB(1,1,255)";
    ctx.lineWidth = 1;
    ctx.stroke(); 
}

function draw0031() {   
    ctx.moveTo(145, 111);
    ctx.lineTo(148, 115);
    ctx.strokeStyle = "RGB(1,1,255)";
    ctx.lineWidth = 1;
    ctx.stroke(); 
}
function draw004() {   
    ctx.moveTo(165, 90);
    ctx.lineTo(160, 97);
    ctx.strokeStyle = "RGB(100,1,2)";
    ctx.lineWidth = 1;
    ctx.stroke(); 
}
function draw005() {   
    ctx.moveTo(160, 97);
    ctx.lineTo(155, 104);
    ctx.strokeStyle = "RGB(100,1,2)";
    ctx.lineWidth = 1;
    ctx.stroke(); 
}
function draw006() {   
    ctx.moveTo(155, 104);
    ctx.lineTo(150, 111);
    ctx.strokeStyle = "RGB(100,1,2)";
    ctx.lineWidth = 1;
    ctx.stroke(); 
}
function draw007() {   
    ctx.moveTo(150, 111);
    ctx.lineTo(145, 118);
    ctx.strokeStyle = "RGB(100,1,2)";
    ctx.lineWidth = 1;
    ctx.stroke(); 
}
function draw008() {   
    ctx.moveTo(145, 118);
    ctx.lineTo(140, 125);
    ctx.strokeStyle = "RGB(100,1,2)";
    ctx.lineWidth = 1;
    ctx.stroke(); 
}
////////////////////////////////////////

function draw0011() {
    ctx.beginPath();
    ctx.arc(161, 112, 3, 3, 360 );
    ctx.strokeStyle =  "RGB(200,100,055)";
    ctx.fillStyle = "red";
    ctx.fill();
    ctx.stroke();
    
}

function interva(){
    var set1 =setTimeout(draw01,1000);
    var set1 =setTimeout(draw,1200);
    var set2 =setTimeout(draw2,1400);
    var set3 =setTimeout(draw3,1600);
    var set4 =setTimeout(draw4,1800);
    var set5 =setTimeout(draw5,2000);
    var set6 =setTimeout(draw6,2200);
    var set7 =setTimeout(draw7,2400);
    var set7 =setTimeout(draw8,2600);
    var set7 =setTimeout(draw9,2800);
    var set7 =setTimeout(draw10,3000);
    var set7 =setTimeout(draw11,3200);
    var set7 =setTimeout(draw12,3400);
    var set7 =setTimeout(draw13,3600);

    var set7 =setTimeout(draw001,2400);
    var set7 =setTimeout(draw002,2500);
    var set7 =setTimeout(draw003,2500); 
    var set7 =setTimeout(draw0031,2600); 

    var set7 =setTimeout(draw004,2600); 
    var set7 =setTimeout(draw005,2600); 
    var set7 =setTimeout(draw006,2700); 
    var set7 =setTimeout(draw007,2800); 
    var set7 =setTimeout(draw008,2900); 

    var set7 =setTimeout(draw0011,2900); 

    
ctx.clearRect(0, 0, canvas.width, canvas.height);
}

interva()
// dx = setInterval(interva,7000)


////////////////////////////////////////////////////////////////////////////////////////


var canvas1 = document.getElementById("myCanvas1");

var ctx1 = canvas1.getContext("2d");


function draw21() {    
    ctx1.beginPath();
    ctx1.moveTo(25, 50);
    ctx1.bezierCurveTo(0, 30, 15, 20, 40, 30);
    // ctx1.bezierCurveTo(20,25,20,62.5,20,62.5);
    ctx1.strokeStyle =  "RGB(200,100,055)";
    ctx1.stroke();
}
function draw22() {
    ctx1.beginPath();
    ctx1.moveTo(25, 50);
    ctx1.bezierCurveTo(30, 60, 10, 60, 15, 70);
    ctx1.strokeStyle =  "RGB(100,0,055)";
    ctx1.stroke();
}

function draw33() {
    ctx1.beginPath();
    ctx1.moveTo(15, 70);
    ctx1.bezierCurveTo(15, 70, 25, 90, 26, 100);
    ctx1.strokeStyle =  "RGB(100,5,005)";
    ctx1.stroke();
}

function draw44() {
    ctx1.beginPath();
    ctx1.moveTo(26, 100);
    ctx1.bezierCurveTo(14, 115, 30, 120, 30, 120);
    ctx1.strokeStyle =  "RGB(100,5,100)";
    ctx1.stroke();
}

function draw55() {
    ctx1.beginPath();
    ctx1.moveTo(30, 120);
    ctx1.quadraticCurveTo(34, 115, 50, 140);
    ctx1.strokeStyle =  "RGB(200,5,100)";
    ctx1.stroke();
   
}
function draw66() {
    ctx1.beginPath();
    ctx1.moveTo(50, 140);
    ctx1.quadraticCurveTo(40, 120, 120, 130);
    ctx1.strokeStyle =  "RGB(00,5,200)";
    ctx1.stroke();
}
function draw77() {
    ctx1.beginPath();
    ctx1.moveTo(120, 130);
    ctx1.quadraticCurveTo(110, 120, 160, 90);
    ctx1.strokeStyle = "RGB(100,5,200)";
    ctx1.stroke();
}

function draw88() {
    ctx1.beginPath();
    ctx1.moveTo(160, 90);
    ctx1.bezierCurveTo(160, 90, 175,70, 180, 95);
    ctx1.strokeStyle =  "RGB(100,5,100)";
    ctx1.stroke();
}
function draw99() {
    ctx1.beginPath();
    ctx1.moveTo(180, 95);
    ctx1.quadraticCurveTo(190, 95, 195, 60);
    ctx1.strokeStyle =  "RGB(0,200,100)";
    ctx1.stroke();
}
function draw100() {
    ctx1.beginPath();
    ctx1.moveTo(195, 60);
    ctx1.quadraticCurveTo(200, 55, 240, 60);
    ctx1.strokeStyle =  "RGB(0,250,00)";
    ctx1.stroke();
}
function draw101() {
    ctx1.beginPath();
    ctx1.moveTo(240, 60);
    ctx1.quadraticCurveTo(230, 55, 250, 40);
    ctx1.strokeStyle =  "RGB(250,250,00)";
    ctx1.stroke();
}

function draw102() {
    ctx1.beginPath();
    ctx1.moveTo(250, 40);
    ctx1.quadraticCurveTo(230, 30, 220, 15);
    ctx1.strokeStyle =  "RGB(50,250,100)";
    ctx1.stroke();
}
function draw103() {
    ctx1.beginPath();
    ctx1.moveTo(220, 15);
    ctx1.quadraticCurveTo(230, 5, 150, 20);
    ctx1.strokeStyle = "RGB(50,50,40)";
    ctx1.stroke();
}
function draw104() {
    ctx1.beginPath();
    ctx1.moveTo(150, 20);
    ctx1.bezierCurveTo(150,5, 80,50, 80, 25);
    ctx1.strokeStyle = "RGB(150,0,240)";
    ctx1.stroke();
}
function draw105() {
    ctx1.beginPath();
    ctx1.moveTo(80, 25);
    ctx1.bezierCurveTo(40,20, 40,5, 40, 30);
    ctx1.strokeStyle = "RGB(150,10,140)";
    ctx1.stroke();
}


function draw106() {
    ctx1.beginPath();
    ctx1.moveTo(40, 110);
    ctx1.bezierCurveTo(30,95, 75,100, 65, 90);
    ctx1.strokeStyle = "RGB(0,30,240)";
    ctx1.stroke();
}
function draw107() {
    ctx1.beginPath();
    ctx1.moveTo(60, 118);
    ctx1.bezierCurveTo(30,95, 75,100, 65, 90);
    ctx1.strokeStyle = "RGB(0,30,240)";
    ctx1.stroke();
}

function draw108() {
    ctx1.beginPath();
    ctx1.moveTo(80, 122);
    ctx1.bezierCurveTo(98,110, 70,100, 65, 90);
    ctx1.strokeStyle = "RGB(0,30,240)";
    ctx1.stroke();
}
function draw109() {
    ctx1.beginPath();
    ctx1.moveTo(65, 90);
    ctx1.bezierCurveTo(50,80, 90,90, 120,50);
    ctx1.strokeStyle = "RGB(0,30,240)";
    ctx1.stroke();
}

function draw110() {
    ctx1.beginPath();
    ctx1.moveTo(105, 90);
    ctx1.bezierCurveTo(105, 90, 90,90, 100,70);
    ctx1.strokeStyle = "RGB(0,30,240)";
    ctx1.stroke();
}
function draw111() {
    ctx1.beginPath();
    ctx1.moveTo(45, 80);
    ctx1.bezierCurveTo(25, 60, 90,85, 116,55);
    ctx1.strokeStyle = "RGB(0,30,240)";
    ctx1.stroke();
}
function draw112() {
    ctx1.beginPath();
    ctx1.moveTo(160,80);
    ctx1.bezierCurveTo(100,80, 116,55, 116,55);
    ctx1.strokeStyle = "RGB(0,30,240)";
    ctx1.stroke();
}
function draw113() {
    ctx1.beginPath();
    ctx1.moveTo(210,45);
    ctx1.bezierCurveTo(210,45, 140,56, 137,30);
    ctx1.strokeStyle = "RGB(0,30,240)";
    ctx1.stroke();
}
function draw114() {
    ctx1.beginPath();
    ctx1.moveTo(116,55);
    ctx1.bezierCurveTo(118,55, 120,40, 150, 20);
    ctx1.strokeStyle = "RGB(0,30,240)";
    ctx1.stroke();
}
function interva1(){
    var set1 =setTimeout(draw21,2000);
    var set2 =setTimeout(draw22,2500);
    var set3 =setTimeout(draw33,3000);
    var set4 =setTimeout(draw44,4000);
    var set5 =setTimeout(draw55,4200);
    var set5 =setTimeout(draw66,4300);
    var set5 =setTimeout(draw77,4400);
    var set5 =setTimeout(draw88,4500);
    var set5 =setTimeout(draw99,4700);
    var set5 =setTimeout(draw100,4900);
    var set5 =setTimeout(draw101,5100);
    var set5 =setTimeout(draw102,5300);
    var set5 =setTimeout(draw103,5500);
    var set5 =setTimeout(draw104,5700);
    var set5 =setTimeout(draw105,5900);
    var set5 =setTimeout(draw106,6200);
    var set5 =setTimeout(draw107,6400);
    var set5 =setTimeout(draw108,6600);
    var set5 =setTimeout(draw109,6800);
    var set5 =setTimeout(draw110,7000);
    var set5 =setTimeout(draw111,7200);
    var set5 =setTimeout(draw112,7400);
    var set5 =setTimeout(draw113,7600);
    var set5 =setTimeout(draw114,7800);
    
ctx1.clearRect(0, 0, canvas.width, canvas.height);
}

interva1();
// dx1 = setInterval(interva1,7000)


///////////////////////////////////////////////////////////////////////////////////////


var canvas2 = document.getElementById("myCanvas2");

var ctx2 = canvas2.getContext("2d");
canvas2.addEventListener('mousemove',function(event){
    var mouseX = event.clientX - 130 - canvas2.offsetLeft;
    var mouseY = event.clientY -5- canvas2.offsetTop;
    console.log(mouseX, mouseY)
});

function draw31() {
    ctx2.beginPath();

    ctx2.moveTo(209,140);
    ctx2.lineTo(213,138);

    ctx2.lineTo(225, 120);
    ctx2.lineTo(222, 118);

    ctx2.lineTo(190, 110);

    ctx2.lineTo(186, 112);
    ctx2.lineTo(173, 130);
    ctx2.lineTo(176, 132);
    
    ctx2.closePath(); 
    ctx2.fillStyle = "RGB(3, 42, 94)";
    ctx2.fill();   
}

function draw32() {
    ctx2.beginPath();

    ctx2.moveTo(165,128);
    ctx2.lineTo(170,126);

    ctx2.lineTo(181, 110);  // 2
    ctx2.lineTo(178, 106);  //

    ctx2.lineTo(146, 98);

    ctx2.lineTo(142, 100);
    ctx2.lineTo(129, 118);
    ctx2.lineTo(132, 120);
    
    ctx2.closePath(); 
    ctx2.fillStyle = "RGB(120, 26, 48)";
    ctx2.fill();   
}
function draw333() {
    ctx2.beginPath();

    ctx2.moveTo(121,116);
    ctx2.lineTo(126,114);

    ctx2.lineTo(137, 98);  // 2
    ctx2.lineTo(134, 94);  //

    ctx2.lineTo(102, 86);

    ctx2.lineTo(98, 88);
    ctx2.lineTo(85, 106);
    ctx2.lineTo(88, 108);
    
    
    ctx2.closePath(); 
    ctx2.fillStyle = "RGB(12, 126, 48)";
    ctx2.fill();   
}
function draw334() {
    ctx2.beginPath();

    ctx2.moveTo(77,104);
    ctx2.lineTo(82,102);

    ctx2.lineTo(93, 86);  // 2
    ctx2.lineTo(90, 82);  //

    ctx2.lineTo(58, 74);

    ctx2.lineTo(54, 76);
    ctx2.lineTo(41, 94);
    ctx2.lineTo(44, 96);

    ctx2.closePath(); 
    ctx2.fillStyle = "RGB(12, 26, 148)";
    ctx2.fill();   
}
function draw335() {
    ctx2.beginPath();

    ctx2.moveTo(96,80);
    ctx2.lineTo(101,78);

    ctx2.lineTo(112, 62);  // 2
    ctx2.lineTo(109, 58);  //

    ctx2.lineTo(77, 50);

    ctx2.lineTo(73, 52);
    ctx2.lineTo(60, 70);
    ctx2.lineTo(63, 72);

    ctx2.closePath(); 
    ctx2.fillStyle = "RGB(192, 26, 0)";
    ctx2.fill();   
}

function draw336() {
    ctx2.beginPath();

    ctx2.moveTo(140,92);
    ctx2.lineTo(145,90);

    ctx2.lineTo(156, 74);  // 2
    ctx2.lineTo(153, 70);  //

    ctx2.lineTo(121, 62);

    ctx2.lineTo(117, 64);
    ctx2.lineTo(104, 82);
    ctx2.lineTo(107, 84);
    
    
    ctx2.closePath(); 
    ctx2.fillStyle = "RGB(120, 126, 48)";
    ctx2.fill();   
}
function draw337() {
    ctx2.beginPath();

    ctx2.moveTo(184,104);
    ctx2.lineTo(189,102);

    ctx2.lineTo(200, 86);  // 2
    ctx2.lineTo(197, 82);  //

    ctx2.lineTo(165, 74);

    ctx2.lineTo(161, 76);
    ctx2.lineTo(148, 94);
    ctx2.lineTo(151, 96);
    
    ctx2.closePath(); 
    ctx2.fillStyle = "RGB(120, 26, 48)";
    ctx2.fill();   
}
function draw338() {
    ctx2.beginPath();

    ctx2.moveTo(228,116);
    ctx2.lineTo(232,114);

    ctx2.lineTo(244, 96);
    ctx2.lineTo(241, 94);

    ctx2.lineTo(209, 86);

    ctx2.lineTo(205, 88);
    ctx2.lineTo(192, 106);
    ctx2.lineTo(195, 108);
    
    ctx2.closePath(); 
    ctx2.fillStyle = "RGB(12, 26, 48)";
    ctx2.fill();   
}
function draw339() {
    ctx2.beginPath();

    ctx2.moveTo(247,92);
    ctx2.lineTo(251,90);

    ctx2.lineTo(263, 72);
    ctx2.lineTo(260, 70);

    ctx2.lineTo(228, 62);

    ctx2.lineTo(224, 64);
    ctx2.lineTo(211, 82);
    ctx2.lineTo(214, 84);
    
    ctx2.closePath(); 
    ctx2.fillStyle = "RGB(12, 26, 48)";
    ctx2.fill();   
}
function draw340() {
    ctx2.beginPath();

    ctx2.moveTo(203,80);
    ctx2.lineTo(208,78);

    ctx2.lineTo(219, 62);  // 2
    ctx2.lineTo(216, 59);  //

    ctx2.lineTo(184, 51);

    ctx2.lineTo(180, 52);
    ctx2.lineTo(167, 70);
    ctx2.lineTo(170, 72);
    
    ctx2.closePath(); 
    ctx2.fillStyle = "RGB(120, 26, 48)";
    ctx2.fill();   
}
function draw341() {
    ctx2.beginPath();

    ctx2.moveTo(159,68);
    ctx2.lineTo(164,66);

    ctx2.lineTo(175, 50);  // 2
    ctx2.lineTo(172, 46);  //

    ctx2.lineTo(140, 38);

    ctx2.lineTo(136, 40);
    ctx2.lineTo(123, 58);
    ctx2.lineTo(126, 60);
    
    
    ctx2.closePath(); 
    ctx2.fillStyle = "RGB(120, 206, 8)";
    ctx2.fill();   
}
function draw342() {
    ctx2.beginPath();

    ctx2.moveTo(115,56);
    ctx2.lineTo(120,54);

    ctx2.lineTo(131, 38);  // 2
    ctx2.lineTo(128, 34);  //

    ctx2.lineTo(96, 26);

    ctx2.lineTo(92, 28);
    ctx2.lineTo(79, 46);
    ctx2.lineTo(82, 48);

    ctx2.closePath(); 
    ctx2.fillStyle = "RGB(92, 26, 0)";
    ctx2.fill();   
}
//////////////////////////////////////
function draw343() {
    ctx2.beginPath();

    ctx2.moveTo(32,98);
    ctx2.lineTo(214,146);

    ctx2.lineTo(272, 68);  
    ctx2.lineTo(91,20);  

    ctx2.closePath(); 
    ctx2.stroke();
    // ctx2.fillStyle = "RGB(0, 26, 0)";
    // ctx2.fill();   
}
function draw344() {
    ctx2.beginPath();

    ctx2.moveTo(32,100);
    ctx2.lineTo(216,149.5);

    ctx2.lineTo(277, 68);  
    ctx2.lineTo(91,20);  

    ctx2.closePath(); 
    ctx2.stroke();

    ctx2.lineTo(214,146);
    ctx2.lineTo(216,149.5);
    ctx2.stroke();
    // ctx2.fillStyle = "RGB(0, 26, 0)";
    // ctx2.fill();   
}

function draw345() {
    ctx2.beginPath();

    ctx2.moveTo(258,68);
    ctx2.lineTo(205,139);
    ctx2.lineWidth = 1;
    ctx2.strokeStyle = "RGB(192, 192, 192)";
    ctx2.stroke(); 
}
function draw346() {
    ctx2.beginPath();

    ctx2.moveTo(248,67);
    ctx2.lineTo(195,136);
    ctx2.lineWidth = 1;
    ctx2.strokeStyle = "RGB(192, 192, 192)";
    ctx2.stroke(); 
}
function draw347() {
    ctx2.beginPath();

    ctx2.moveTo(238,65);
    ctx2.lineTo(185,135);
    ctx2.lineWidth = 1;
    ctx2.strokeStyle = "RGB(192, 192, 192)";
    ctx2.stroke(); 
}
function draw348() {
    ctx2.beginPath();

    ctx2.moveTo(231,62);
    ctx2.lineTo(179,131.5);
    ctx2.lineWidth = 1;
    ctx2.strokeStyle = "RGB(192, 192, 192)";
    ctx2.stroke(); 
}

function draw349() {
    ctx2.beginPath();

    ctx2.moveTo(213,58);
    ctx2.lineTo(160,127);
    ctx2.lineWidth = 1;
    ctx2.strokeStyle = "RGB(192, 192, 192)";
    ctx2.stroke(); 
}
function draw350() {
    ctx2.beginPath();

    ctx2.moveTo(204,55);
    ctx2.lineTo(152,123.5);
    ctx2.lineWidth = 1;
    ctx2.strokeStyle = "RGB(192, 192, 192)";
    ctx2.stroke(); 
}
function draw351() {
    ctx2.beginPath();

    ctx2.moveTo(194,53);
    ctx2.lineTo(144,122);
    ctx2.lineWidth = 1;
    ctx2.strokeStyle = "RGB(192, 192, 192)";
    ctx2.stroke(); 
}
function draw352() {
    ctx2.beginPath();

    ctx2.moveTo(186,52);
    ctx2.lineTo(136,121);
    ctx2.lineWidth = 1;
    ctx2.strokeStyle = "RGB(192, 192, 192)";
    ctx2.stroke(); 
}
function draw353() {
    ctx2.beginPath();

    ctx2.moveTo(165,50);
    ctx2.lineTo(116,116);
    ctx2.lineWidth = 1;
    ctx2.strokeStyle = "RGB(192, 192, 192)";
    ctx2.stroke(); 
}
function draw354() {
    ctx2.beginPath();

    ctx2.moveTo(156,48);
    ctx2.lineTo(108,114);
    ctx2.lineWidth = 1;
    ctx2.strokeStyle = "RGB(192, 192, 192)";
    ctx2.stroke(); 
}
function draw355() {
    ctx2.beginPath();

    ctx2.moveTo(147,47);
    ctx2.lineTo(99,113);
    ctx2.lineWidth = 1;
    ctx2.strokeStyle = "RGB(192, 192, 192)";
    ctx2.stroke(); 
}
function draw356() {
    ctx2.beginPath();

    ctx2.moveTo(138,45);
    ctx2.lineTo(91,110);
    ctx2.lineWidth = 1;
    ctx2.strokeStyle = "RGB(192, 192, 192)";
    ctx2.stroke(); 
}
function draw357() {
    ctx2.beginPath();

    ctx2.moveTo(125,32);
    ctx2.lineTo(72,104);
    ctx2.lineWidth = 1;
    ctx2.strokeStyle = "RGB(192, 192, 192)";
    ctx2.stroke(); 
}
function draw358() {
    ctx2.beginPath();

    ctx2.moveTo(118,30);
    ctx2.lineTo(65,102);
    ctx2.lineWidth = 1;
    ctx2.strokeStyle = "RGB(192, 192, 192)";
    ctx2.stroke(); 
}
function draw359() {
    ctx2.beginPath();

    ctx2.moveTo(110,29);
    ctx2.lineTo(56,100);
    ctx2.lineWidth = 1;
    ctx2.strokeStyle = "RGB(192, 192, 192)";
    ctx2.stroke(); 
}
function draw360() {
    ctx2.beginPath();

    ctx2.moveTo(102,28);
    ctx2.lineTo(48,98);
    ctx2.lineWidth = 1;
    ctx2.strokeStyle = "RGB(192, 192, 192)";
    ctx2.stroke(); 
}
function interva2(){
    
    var set1 =setTimeout(draw31,2000);
    var set2 =setTimeout(draw32,2300);
    var set3 =setTimeout(draw333,2600);
    var set4 =setTimeout(draw334,2900);
    var set4 =setTimeout(draw335,3100);
    var set4 =setTimeout(draw336,3400);
    var set4 =setTimeout(draw337,3700);
    var set4 =setTimeout(draw338,4000);
    var set4 =setTimeout(draw339,4300);
    var set4 =setTimeout(draw340,4600);
    var set4 =setTimeout(draw341,4900);
    var set4 =setTimeout(draw342,5200);

    var set4 =setTimeout(draw343,4400);
    var set4 =setTimeout(draw344,4500);
    var set4 =setTimeout(draw345,4600);
    var set4 =setTimeout(draw346,4700);
    var set4 =setTimeout(draw347,4800);
    var set4 =setTimeout(draw348,4900);
    var set4 =setTimeout(draw349,5000);
    var set4 =setTimeout(draw350,5100);
    var set4 =setTimeout(draw351,5200);
    var set4 =setTimeout(draw352,5300);
    var set4 =setTimeout(draw353,5400);
    var set4 =setTimeout(draw354,5500);
    var set4 =setTimeout(draw355,5600);
    var set4 =setTimeout(draw356,5700);
    var set4 =setTimeout(draw357,5800);
    var set4 =setTimeout(draw358,5900);
    var set4 =setTimeout(draw359,6000);
    var set4 =setTimeout(draw360,6100);
    
    // var set5 =setTimeout(draw555,5000);
    
ctx2.clearRect(0, 0, canvas.width, canvas.height);
}
interva2()
// dx2 = setInterval(interva2,7000) 