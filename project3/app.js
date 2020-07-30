var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

var WIDTH = 1280;
var HEIGHT = 720;

var x = 300;
var y = 300;
var s = 50;
var mx = 0;
var my = 0;


var circleX;
var circleY;
var circleS = 50;
var circleCollision = false;
function animate() {
	circleX = Math.floor(Math.random() * WIDTH);
	circleY = Math.floor(Math.random() * HEIGHT);
	window.onkeydown = keydownControl;
	return setInterval(draw, 10);
}
function keyControl(e) {
	if (e.keyCode == 37) {
		mx = -4;
		my = 0;
	}
	if (e.keyCode == 38) {
		mx = -4;
		my = 0;
	}
	if (e.keyCode == 39) {
		mx = -4;
		my = 0;
	}
	if (e.keyCode == 40) {
		mx = -4;
		my = 0;
	}
}

function drawPlayer() {
	var img = new Image();
	img.src = "happy.png";
	ctx.drawImage(img, x, y, s, s);
}

function drawCircle() {
	ctx.beginPath();
	ctx.arc(circleX, circleY, circleS, 0, 6.28);
	ctx.closePath();
	ctx.stroke();
	ctx.fillStyle = "white";
	ctx.fill();
}

function clear() {
	ctx.clearRect(0 , 0, WIDTH, HEIGHT);
}

function draw() {
	clear();
	drawCircle();
	drawPlayer();

	if (x + mx < 0 || x + mx > WIDTH) {
		mx = -mx;
	}
	if (y + my < 0 || y + my > HEIGHT) {
		my = -my;

	}
	x += mx;
	y += my;

	collisionCheck();
	collisionHanle();
	
	function collisionCheck(){
	if ((x + s > circleX) && (y + s > circleY) && (x < circleX + circleS) && (y < circleY + circleS) ) {
		circleCollision = true;
	} else{
		circleCollision = false;
	}

function collisionHanle(){
	if (collisionCheck) {
		circleX = Math.floor(Math.random() * WIDTH);
		circleY = Math.floor(Math.random() * HEIGHT);
	}
}

animate();