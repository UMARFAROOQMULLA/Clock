var canvas = document.querySelector("Canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext("2d");

// c.fillStyle = "red";
// c.border;
// c.fillRect(100, 100, 100, 100);
// console.log(canvas);

// c.beginPath();
// c.moveTo(200, 300);
// c.lineTo(600, 300);
// c.strokeStyle = "white";
// c.stroke();

// for (var i = 0; i < 25; i++) {
//   var x = Math.random() * window.innerWidth;
//   var y = Math.random() * window.innerHeight;
//   // // window.alert("Entered for loop");

//   c.beginPath();
//   for (var j = 0; j < 6; j++) {
//     c.strokeStyle = "greenyellow";
//     c.arc(x, y, 30, 0, Math.PI * 2, false);
//     c.arc(x, y, 30, 0, Math.PI * 2, false);
//     c.arc(x, y, 30, 0, Math.PI * 2, false);
//     c.arc(x, y, 30, 0, Math.PI * 2, false);
//     c.arc(x, y, 30, 0, Math.PI * 2, false);
//     c.arc(x, y, 30, 0, Math.PI * 2, false);
//     c.stroke();
//   }
// }

// function animate(){
//     requestAnimationFrame(animate);
//     console.log("abcd");
// }
// animate();

// c.beginPath();
// c.arc(300,300,30,0,Math.PI * 2, false);
// c.strokeStyle = "lime";
// c.stroke();
// console.log("abcd");
var x = innerWidth - 30; //abu=x..far=y...usma=dy...uma=dx...aliy=r...ali=s
var r = 30;
var y = 300;
var s = y - 150;

var dx = 10;
var dy = 10;
function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, innerWidth, innerHeight);
  c.beginPath(); //right circle
  c.arc(x, y, 30, 0, Math.PI * 2, false);
  c.arc(x, y, 30, 0, Math.PI * 2, false);
  c.arc(x, y, 30, 0, Math.PI * 2, false);
  c.strokeStyle = "red";

  c.stroke();
  c.beginPath(); //Left circle
  c.arc(r, s, 30, 0, Math.PI * 2, false);
  c.arc(r, s, 30, 0, Math.PI * 2, false);
  c.arc(r, s, 30, 0, Math.PI * 2, false);
  c.strokeStyle = "blue";

  c.stroke();
  x -= dx;
  y += dy;
  r += dx;
  s -= dy;

  if (
    x + 30 > innerWidth ||
    x - 30 < 0 ||
    r + 300 + 30 > innerWidth ||
    r + 300 - 30 < 0
  ) {
    dx = -dx;
  }
  if (
    y + 30 > innerHeight ||
    y - 30 < 0 ||
    s + 30 > innerHeight ||
    s - 30 < 0
  ) {
    dy = -dy;
  }
}
animate();

addEventListener("mousemove" ,
function (event){
  console.log(event);
}

)

// c.beginPath(); //Left circle
// c.arc(r + 300, s+400, 30, 0, Math.PI * 2, false);
// c.arc(r + 300, s+400, 30, 0, Math.PI * 2, false);
// c.arc(r + 300, s+400, 30, 0, Math.PI * 2, false);
// c.strokeStyle = "lime";

// c.stroke();
