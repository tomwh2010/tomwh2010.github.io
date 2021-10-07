
// A simple Star class
let Star = function() {
  this.position = createVector(random(-2000,2000), random(-2000,2000));
  this.color=200;
};

/*Star.prototype.run = function() {
  this.update();
  this.display();
};

// Method to update position
Star.prototype.update = function(){
  
};*/

// Method to display
Star.prototype.display = function() {  
  stroke(this.color);
  strokeWeight(2);
  fill(this.color);
  
  ellipse(this.position.x, this.position.y, 2, 2);
};
