class ParticleSystem {
  constructor(numParticles) {
    this.numParticles = numParticles;
    this.particles = [];
    for (let i = 0; i < this.numParticles; i++) {
      let p = new Particle();
      p.boundingbox_top=0;
      p.boundingbox_left=0;
      p.boundingbox_width=width;
      p.boundingbox_height=height;
      p.position.x=random(p.boundingbox_top, p.boundingbox_width);  
      p.position.y=random(p.boundingbox_left, p.boundingbox_height);  
      //var force=createVector(random(-.1, .1), random(-.1, .1));
      //p.applyforce(force);
      //p.applyvelocity(force);
      p.color=220;
      this.particles.push(p);
    }
  }

  display() {
    for (let i = 0; i < this.numParticles; i++) {
      this.particles[i].run();
      console.log(this.particles[i].velocity.x, this.particles[i].velocity.y)
    }
  }
}