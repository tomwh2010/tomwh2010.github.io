
let StarSystem = function() {
  this.origin = createVector(width/2, height/2);
  this.Stars = [];
  this.numstars=2000;
};

StarSystem.prototype.populate = function() {
  for(let i=0; i<this.numstars; i++){
    this.addStar();
  }
};

StarSystem.prototype.addStar = function() {
  this.Stars.push(new Star());
};

StarSystem.prototype.run = function() {
  push();
  translate(this.origin.x, this.origin.y);
  for (let i = this.numstars-1; i >= 0; i--) {
    this.Stars[i].run();
  }
  pop();
};

StarSystem.prototype.roll = function(delta) {
  var rollValue=0.001;
  if(delta<0){
    rollValue=-rollValue;
  }
  for (let i = this.numstars-1; i >= 0; i--) {
    this.Stars[i].position.rotate(rollValue);
  }
};

StarSystem.prototype.yaw = function(delta) {
  var xValue=1;
  if(delta<0){
    xValue=-xValue;
  }
  for (let i = this.numstars-1; i >= 0; i--) {
    this.Stars[i].position.x+=xValue;
  }
};

StarSystem.prototype.pitch = function(delta) {
  var yValue=1;
  if(delta<0){
    yValue=-yValue;
  }
  for (let i = this.numstars-1; i >= 0; i--) {
    this.Stars[i].position.y+=yValue;
  }
};
