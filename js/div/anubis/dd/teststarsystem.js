let starsystem;

function setup() {
  createCanvas(600, 500);
  starsystem = new StarSystem();
  starsystem.populate();
}

function draw() {
  background(0);
  starsystem.display();
}