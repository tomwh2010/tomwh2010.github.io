class Particle {
  constructor() {
    this.position = createVector(0, 0);
    this.acceleration = createVector(0, 0);
    this.velocity = createVector(0, 0);
    this.radius = 10;
    this.fillcolor = color(255, 255, 255);
    this.borderthickness = 1;
    this.bordercolor = color(0, 0, 0);

    this.setLeftAndTopShift(0, 0);
  }

  setLeftAndTopShift(left, top){ 
    this.leftedge=-left;
    this.rightedge=width-left;
    this.topedge=-top;
    this.bottomedge=height-top;

    this.leftedgewithradius=(this.leftedge+this.radius);
    this.rightedgewithradius=(this.rightedge-this.radius);
    this.topedgewithradius=(this.topedge+this.radius);
    this.bottomedgewithradius=(this.bottomedge-this.radius);

    this.leftedgeoutside=(this.leftedge-this.radius);
    this.rightedgewoutside=(this.rightedge+this.radius);
    this.topedgeoutside=(this.topedge-this.radius);
    this.bottomedgeoutside=(this.bottomedge+this.radius);
  }

  oob() {
    if (
      this.position.x < this.leftedgeoutside ||
      this.position.y < this.topedgeoutside ||
      this.position.x > this.rightedgewoutside ||
      this.position.y > this.bottomedgeoutside
    ) {
      return true;
    }
    return false;
  }

  reflectedges() {
    if (this.position.x < this.leftedgewithradius || this.position.x > this.rightedgewithradius){
      //bounce horizontal
      this.velocity.x*=-1;
      this.acceleration.x*=-1;
    }

    if (this.position.y < this.topedgewithradius || this.position.y > this.bottomedgewithradius){
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

  setSize(radius) {
    this.radius = radius;
  }

  setFillColor(fillcolor) {
    this.fillcolor = fillcolor;
  }

  setBorderThickness(borderthickness) {
    this.borderthickness = borderthickness;
  }

  setBorderColor(bordercolor) {
    this.bordercolor = bordercolor;
  }

  touching(particle) {
    let d = dist(this.position.x, this.position.y, particle.position.x, particle.position.y);
    
    //touching each other
    if (d == (this.radius + particle.radius) / 2) {
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

    if (d < (this.radius + particle.radius) / 2) {
      return true;
    }
    
    return false;
  }

  //NB! inter
  contained(particle) {
    let d = dist(this.position.x, this.position.y, particle.position.x, particle.position.y);

    //one is fully within the other
    if (d <= abs((this.radius - particle.radius) / 2)) {
      return true;
    }

    return false;
  }

  draw() {
    push();
    strokeWeight(this.borderthickness);
    stroke(this.bordercolor);
    fill(this.fillcolor);
    translate(-this.leftedge, -this.topedge);
    ellipse(this.position.x, this.position.y, this.radius*2);
    pop();
  }
}
