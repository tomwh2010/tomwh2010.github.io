class Particle {
  constructor() {
    this.acceleration = createVector(0, 0);
    this.velocity = createVector(0, 0);
    this.position = createVector(0, 0);
    this.sizex=2;
    this.sizey=2;
    this.bounce=true;

    this.boundingbox_top=0;
    this.boundingbox_left=0;
    this.boundingbox_width=width;
    this.boundingbox_height=height;
    this.color=0;
  }

  run() {
    this.update();
    this.display();
  }

  update() {
    this.velocity.add(this.acceleration);

    if(this.bounce){
      if ((this.position.x > this.boundingbox_width) || (this.position.x < this.boundingbox_top)) {
        this.velocity.x *= -1;
      }
      if ((this.position.y > this.boundingbox_height) || (this.position.y < this.boundingbox_left)) {
        this.velocity.y *= -1;
      }
    }

    this.position.add(this.velocity);

    //if the particle is out-of-bounds: turn off velocity
    /*if( this.outofbounds==1 && ((this.position.x+this.sizex)<0 || 
                                (this.position.y+this.sizey)<0 || 
                                (this.position.x-this.sizex)>width || 
                                (this.position.y-this.sizey)>height))
    {
      this.velocity.x=0;
      this.velocity.y=0;
    }*/
  }

  applyforce(force){
    this.acceleration.add(force);
  }
  
  applyvelocity(force){
    this.velocity.add(force);
  }
  
  clampForce(force){
    if(this.velocity.x>force.x){
      this.velocity.x=force.x;
    }
    if(this.velocity.y>force.y){
      this.velocity.y=force.y;
    }
  }

  display() {
    stroke(this.color);
    fill(this.color);
    ellipse(this.position.x, this.position.y, this.sizex, this.sizey);
  }
}