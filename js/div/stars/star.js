
// A simple Star class
let Star = function() {
  this.diminishing=0.02;
  this.size=int(random(1,4));
  this.position = createVector(random(-2000,2000), random(-2000,2000));
};

Star.prototype.run = function() {
  this.update();
  this.display();
};

// Method to update position
Star.prototype.update = function(){
  
};

// Method to display
Star.prototype.display = function() {
  var prob=random();
  var co=255;
  if(prob<this.diminishin){
    co=77;
  }
  stroke(co);
  strokeWeight(2);
  fill(co);
  ellipse(this.position.x, this.position.y, this.size, this.size);
};
