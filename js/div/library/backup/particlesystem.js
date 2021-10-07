class ParticleSystem {
  constructor(numParticles) {
    this.numParticles = numParticles;
    this.particles = [];
    for (let i = 0; i < this.numParticles; i++) {
      let p = new Particle();
      this.particles.push(p);
    }
  }

  display() {
    translate(width/2,50);
    for (let i = 0; i < this.numParticles; i++) {
      this.particles[i].run();
    }
  }
}