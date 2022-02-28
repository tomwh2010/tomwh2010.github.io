class Soldier extends Particle {
  constructor() {
    super();
    this.setLevel(1);
  }

  setLevel(level) {
    if (level < 1) {
      this.strength = 0;
    }
    if (level > 3) {
      this.strength = 3;
    }

    this.level = level;
    this.bordersize = this.level * 2;
  }

  setOwner(owner) {
    if (owner < 1 || owner > BLACKHOLE_TOWER) {
      this.owner = BLANK_TOWER;
    }

    this.owner = owner;
    this.bordercolor = color(0, 0, 0);
    this.fillcolor = gamecolors[this.owner];
  }

  /*    
      
      sendSoldier(direction){
        if(direction<0 || direction>7){
          return false;
        }
        
        let newi=this.i+this.directions[direction][0];
        if(newi<0 || newi>3){
          return false;
        }
        
        let newj=this.i+this.directions[direction][1];
        if(newj<0 || newj>3){
          return false;
        }
        
        
      }
      
      
      draw(){ 
        if(this.owner!=BLANK_TOWER){
          let linex1=start_x+this.i*step;
          let liney1=start_y+this.j*step;
          let linex2=start_x+this.i*step;
          let liney2=start_y+this.j*step;
    
          fill(gamecolors[this.owner]);
          ellipse(linex1, liney1, towerdiameter);
    
          fill(0);
          textSize(16);
          text(this.strength, linex1-5, liney1+3);      
        }
      }
      */
}

/*

class Soldier extends Particle {
  constructor() {
    super();
    this.setLevel(1);
  }

  checkcollision(soldier) {
    if (soldier.hometower == this.hometower) {
      return false;
    }
    
    //check if the soldiers are close enough for fighting; i.e. the particles are overlapping eachother
    return this.overlapping(soldier);
  }
  
  setHometower(tower){
    this.hometower=tower;
  }
  
  deltaLevel(delta){
    this.level+=delta;
    if(this.level<0){
      this.level=0;
    }
    this.bordersize=this.level;
  }

  setLevel(level) {
    if (level < 1) {
      this.level = 0;
    }
    
    if (level > 3) {
      this.level = 3;
    }

    this.level = level;
    this.setBorderSize(this.level * 2);
  }

  setOwner(owner) {
    if (owner < 1 || owner > BLACKHOLE_TOWER) {
      this.owner = NEUTRAL_TOWER;
    }

    this.owner = owner;
    this.setBorderColor(color(0, 0, 0));
    this.setFillColor(gamecolors[this.owner]);
  }
  
  //draw(){ super.draw();
        //console.log(this.position.mag());}

  *    
      
      sendSoldier(direction){
        if(direction<0 || direction>7){
          return f
          return false;
        }
        
        let new
      
      draw(){ 
        if(this
          let linex1=start_x+this.i*step;
          let liney1=start_y+this.j*step;
          let linex2=start_x+this.i*step;
          let liney2=start_y+this.j*step;
    
          fill(gamecolors[this.owner]);
          ellipse(linex1, liney1, towerdiameter);
    
          fill(0);
          textSize(16);
          text(this.strength, linex1-5, liney1+3);      
        }
      }
      *
}


*/
