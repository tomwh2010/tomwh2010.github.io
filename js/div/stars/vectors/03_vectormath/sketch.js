function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(220);

  let mouse=createVector(mouseX, mouseY);
  let center=createVector(width/2, height/2);

  translate(center);

  mouse.sub(center);
  //mouse.mult(5);

  strokeWeight(2);
  stroke(0);
  noFill();
  ellipse(0,0,2,2);
  line(0,0, mouse.x, mouse.y);

}