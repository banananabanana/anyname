var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d")

ctx.moveTo(5,5);
ctx.lineTo(125,125);
ctx.strokeStyle = "blue";
ctx.lineWidth = 5;
ctx.stroke();

ctx.fillStyle = "red";
ctx.fillRect(100,100, 150, 100)

ctx.strokeStyle = "green;"
ctx.strokeRect (150, 150, 75, 150)

ctx.beginPath();
ctx.moveTo(150, 25);
ctx.lineTo(225, 150);

ctx.moveTo(225, 150);
ctx.lineTo(75, 150);
ctx.closePath();
ctx.stroke();
ctx.fillStyle = "green";
ctx.fill();

ctx.beginPath();
ctx.arc(150, 150, 50, 0, 6.28);
ctx.closePath();
ctx.stroke();
ctx.fillStyle = "red";
ctx.fill();