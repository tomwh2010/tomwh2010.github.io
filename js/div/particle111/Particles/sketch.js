var ps;

function setup() {
  createCanvas(500, 500);
  ps = new ParticleSystem(200);
}

function draw() {
  background(255);
  ps.display();
}
