function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  var sm = new Stickman(width / 2, 50, 1);
  sm.draw();

}