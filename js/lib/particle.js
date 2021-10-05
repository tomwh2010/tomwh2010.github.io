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

  reflectedges() {
    if (this.position.x < this.size/2 || this.position.x > (CANVAS_WIDTH-this.size/2)){
      //bounce horizontal
      this.velocity.x*=-1;
      this.acceleration.x*=-1;
    }

    if (this.position.y < this.size/2 || this.position.y > (CANVAS_HEIGHT-this.size/2)){
      //bounce vertical
      this.velocity.y*=-1;
      this.acceleration.y*=-1;
    }
  }

  update() {
    this.velocity = p5.Vector.add(this.velocity, this.acceleration);
    this.position = p5.Vector.add(this.position, this.velocity);
  }

  setPosition(x, y) {
    this.position.x = x;
    this.position.y = y;
  }

  getPosition() {
    return this.position;
  }

  setSize(size) {
    this.size = size;
  }

  setFillColor(fillcolor) {
    this.fillcolor = fillcolor;
  }

  setBorderSize(bordersize) {
    this.bordersize = bordersize;
  }

  setBorderColor(bordercolor) {
    this.bordercolor = bordercolor;
  }

  touching(particle) {
    let d = dist(this.position.x, this.position.y, particle.position.x, particle.position.y);
    
    //touching each other
    if (d == (this.size + particle.size) / 2) {
      return true;
    }
    
    return false;
  }

  intersecting(particle) {
    let d = dist(this.position.x, this.position.y, particle.position.x, particle.position.y);

    //return false if its fully contained
    if(this.contained(particle)){
      return false;
    }

    if (d < (this.size + particle.size) / 2) {
      return true;
    }
    
    return false;
  }

  //NB! inter
  contained(particle) {
    let d = dist(this.position.x, this.position.y, particle.position.x, particle.position.y);

    //one is fully within the other
    if (d <= abs((this.size - particle.size) / 2)) {
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
