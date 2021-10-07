var id1;
var ff;
var ff2;
var center_x;
var center_y;
var offset;

function setup() {
  createCanvas(350, 350);
  center_x = width / 2;
  center_y = height / 2;
  id1 = createDiv("g");
  ff = createVector(0, -150);
  background(220);
  offset=25;
}

function draw() {
  stroke(random(0,255), random(0, 255));
  translate(center_x, center_y);
  ff2 = boxrim(ff.heading());
  circle(ff.x, ff.y, 10);
  circle(ff2.x, ff2.y, 10);
  var buffer = "ff2.heading() " + round(ff2.heading()*180/PI+180)+ "<br/>";
  buffer += "ff.x ff.y " + round(ff.x) + " " + round(ff.y) + "<br/>";
  buffer += "ff.mag() " + round(ff.mag()) + "<br/>";
  buffer += "ff2.x ff2.y " + round(ff2.x) + " " + round(ff2.y) + "<br/>";
  buffer += "ff2.mag() " + round(ff2.mag()) + "<br/>";
  id1.html(buffer);
  ff.rotate(0.01);
}

function boxrim(heading) {
  var vect = createVector(0, 0);

  if (heading < 3 * PI / 4 && heading >= PI / 4) {
    vect.y = height/2-offset;
    vect.x = vect.y / tan(heading);
  }

  if (heading < PI / 4 && heading >= -PI / 4) {
    vect.x = width/2-offset;
    vect.y = vect.x * tan(heading);
  }

  if (heading < -PI / 4 && heading >= -3 * PI / 4) {
    vect.y = -height/2+offset;
    vect.x = vect.y / tan(heading);
  }

  if (heading >= 3 * PI / 4 || heading < -3 * PI / 4) {
    vect.x = -width/2+offset;
    vect.y = vect.x * tan(heading);
  }

  return vect.copy();
}