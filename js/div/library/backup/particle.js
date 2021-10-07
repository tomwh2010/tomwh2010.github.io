class Particle {
  constructor() {
    this.acceleration = createVector(0, 0.05);
    this.velocity = createVector(random(-1, 1), random(-2, 0));
    this.location = createVector(0, 0);
    this.lifespan = random(250, 500);
    this.orglocation = this.location.copy();
    this.orgacceleration = this.acceleration.copy();
    this.orgvelocity = this.velocity.copy();
    this.angle=1;
    this.angleoffset=0.7;
    this.size=16;
  }

  run() {
    this.update();
    this.display();
  }

  update() {
    if (this.lifespan < 250) {
      this.velocity.add(this.acceleration);
      this.location.add(this.velocity);
    }
    this.lifespan -= 2.0;
    this.isDead();
  }

  display() {
    stroke(0, this.lifespan);
    fill(0, this.lifespan);
    ellipse(this.location.x, this.location.y, this.angleoffset*this.size, this.size);
  }

  isDead() {
    if (this.lifespan < 0.0) {
      this.lifespan = 255.0;
      this.reset();
    }
  }

  reset() {
    this.location = this.orglocation.copy();
    this.velocity = this.orgvelocity.copy();
    this.acceleration = this.orgacceleration.copy();
  }
  
  yaw(){
    
  }
  
  pitch(){
    
  }
  
  roll(){
    
  }
  
  panleft(){
    
  }
  
  panright(){
    
  }
  
  panup(){
    
  }
  
  pandown(){
    
  }
  
  //only with z-axis
  forward(){
    
  }
  
  //only with z-axis
  backward(){
    
  }
}