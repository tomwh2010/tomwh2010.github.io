var ps;
var maxforce;

function setup() {
  createCanvas(500, 500);
  ps = new ParticleSystem(100);
  //frameRate(10);
}

function draw() {
  background(0);
  stroke(220);
  fill(220);
  //ps.clampForce(maxforce);
  ps.display();
}
