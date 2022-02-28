class Particle {
  constructor() {
    this.position = createVector(0, 0);
    this.acceleration = createVector(0, 0);
    this.velocity = createVector(0, 0);
    this.size = 10;
    this.fillcolor = color(255, 255, 255);
    this.bordersize = 1;
    this.bordercolor = color(0, 0, 0);
  }

  updatePosition() {
    this.velocity = p5.Vector.add(this.velocity, this.acceleration);
    this.position = p5.Vector.add(this.position, this.velocity);
  }
  
  oob() {
    if (
      this.position.x < 0 ||
      this.position.y < 0 ||
      this.position.x > CANVAS_WIDTH ||
      this.position.y > CANVAS_HEIGHT
    ) {
      return true;
    }
    return false;
  }

  draw() {
    push();
    strokeWeight(this.bordersize);
    stroke(this.bordercolor);
    fill(this.fillcolor);
    ellipse(this.position.x, this.position.y, this.size);
    pop();
  }
}
