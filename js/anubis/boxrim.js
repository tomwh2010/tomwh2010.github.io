class BoxRim {
  constructor() {
    this.position = createVector(0, 0);
    this.leftshift=0;
    this.topshift=0;
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



  boxrim(heading) {
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




  //draw a red circle at the the edge of the screen in
  //the heading of the docking station
  drawboxcircle() {
    var vect = createVector(0, 0);
    var heading = this.pos.heading();
    var tanheading = tan(heading);

    if (this.pos.heading() < 3 * PI / 4 && this.pos.heading() >= PI / 4) {
      vect.y = this.centerheight;
      vect.x = vect.y / tanheading;
    }

    if (this.pos.heading() < PI / 4 && this.pos.heading() >= -PI / 4) {
      vect.x = this.centerwidth;
      vect.y = vect.x * tanheading;
    }

    if (this.pos.heading() < -PI / 4 && heading >= -3 * PI / 4) {
      vect.y = -this.centerheight;
      vect.x = vect.y / tanheading;
    }

    if (heading >= 3 * PI / 4 || heading < -3 * PI / 4) {
      vect.x = -this.centerwidth
      vect.y = vect.x * tanheading;
    }

  

    push();
    translate(this.centerwidth, this.centerheight);
    translate(vect.x, vect.y);
    fill(255, 0, 0);
    ellipse(0, 0, 15, 15);
    pop();
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
