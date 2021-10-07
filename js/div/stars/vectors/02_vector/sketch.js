var ball1;
var ball2;
var ball3;
var ball4;
var ball5;

class Ball {
  constructor(x, y, xspeed, yspeed){ 
    this.position=createVector(x, y);
    this.velocity=createVector(xspeed, yspeed);
    this.size=48;
  }

  move(){
    this.position.add(this.velocity);
    
    if((this.position.x>(width-this.size/2)) || (this.position.x<this.size/2)){
      this.velocity.x*=-1;
    }
    if((this.position.y>(height-this.size/2)) || (this.position.y<this.size/2)){
      this.velocity.y*=-1;
    }
  }

  draw(){
    stroke(0);
    strokeWeight(2);
    fill(127);
    ellipse(this.position.x, this.position.y, this.size, this.size);
  }
}

function setup() {
  createCanvas(500, 500);

  x=Math.floor(Math.random() * width);
  y=Math.floor(Math.random() * height);
  xspeed=Math.floor(Math.random() * 4)-2;
  yspeed=Math.floor(Math.random() * 4)-2;
  ball1 = new Ball(x, y, xspeed, yspeed);
  
  x=Math.floor(Math.random() * width);
  y=Math.floor(Math.random() * height);
  xspeed=Math.floor(Math.random() * 4)-2;
  yspeed=Math.floor(Math.random() * 4)-2;
  ball2 = new Ball(x, y, xspeed, yspeed);
  
  x=Math.floor(Math.random() * width);
  y=Math.floor(Math.random() * height);
  xspeed=Math.floor(Math.random() * 4)-2;
  yspeed=Math.floor(Math.random() * 4)-2;
  ball3 = new Ball(x, y, xspeed, yspeed);
  
  x=Math.floor(Math.random() * width);
  y=Math.floor(Math.random() * height);
  xspeed=Math.floor(Math.random() * 4)-2;
  yspeed=Math.floor(Math.random() * 4)-2;
  ball4 = new Ball(x, y, xspeed, yspeed);
  
  x=Math.floor(Math.random() * width);
  y=Math.floor(Math.random() * height);
  xspeed=Math.floor(Math.random() * 6)-3;
  yspeed=Math.floor(Math.random() * 6)-3;
  ball5 = new Ball(x, y, xspeed, yspeed);
}

function draw() {
  background(220);
  ball1.move();
  ball1.draw();
  
  ball2.move();
  ball2.draw();
  
  ball3.move();
  ball3.draw();
  
  ball4.move();
  ball4.draw();
  
  ball5.move();
  ball5.draw();
}