var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

var c2 = document.getElementById("myCanvas");
var ctx2 = c2.getContext("2d");

var img = new Image();
img.scr = "happy";
img.onload = function() {
	ctx2.drawImage(img, 200, 200, 180, 180);
};

var WIDTH = 1280;
var HEIGHT = 720;

var x;
var y;
var mx;
var my;

function animate() {
	x = 300;
	y = 300;
	mx = 3;
	my = 5;
	return setInterval(draw, 10);
}

function circle(x,y,r) {
	ctx.beginPath();
	ctx.arc(x, y, r, 0, 6.28);
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
	circle(x, y, 25);

	if (x + mx < 0 || x + mx > WIDTH) {
		mx = -mx;
	}
	if (y + my < 0 || y + my > HEIGHT) {
		my = -my;

	}
	x += mx;
	y += my;
}

animate();