let system;

function setup() {
  frameRate(39);
  createCanvas(500, 500);
  system = new StarSystem();
  system.populate();
}

function draw() {
  background(51);
  //system.pitch(1);
  //system.yaw(-1);
  system.roll(1);
  system.run();
}