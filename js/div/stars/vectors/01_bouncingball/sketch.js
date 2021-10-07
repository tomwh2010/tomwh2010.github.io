var x;
var y;
var xspeed;
var yspeed;
var size;

function setup() {
  createCanvas(500, 500);
  x=width/2;
  y=height/2;
  xspeed=1;
  yspeed=2;
  size=48;
}

function draw() {
  background(220);
  x+=xspeed;
  y+=yspeed;

  if((x>(width-size/2)) || (x<size/2)){
    xspeed*=-1;
  }
  if((y>(height-size/2)) || (y<size/2)){
    yspeed*=-1;
  }

  stroke(0);
  strokeWeight(2);
  fill(127);
  ellipse(x, y, size, size);
}