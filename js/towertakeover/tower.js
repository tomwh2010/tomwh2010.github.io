class Tower extends Particle{
  constructor(){
    super();
    this.size=50;
    this.setLevel(1);
    this.setStrength(1);
    this.setOwner(NEUTRAL_TOWER);
    this.text="1";
    this.textsize=24;
    this.textcolor=color(0,0,0);
  }

  setText(text){
      this.text=text;
  }

  setTextSize(textsize){
      this.textsize=textsize;
  }

  setTextColor(textcolor){
      this.textcolor=textcolor;
  }

  setStrength(strength){
    if(strength<0){
      this.strength=1;
    }
    if(strength>MAX_STRENGTH){
      this.strength=MAX_STRENGTH;
    }

    this.strength=strength;
    this.text=strength;
  }

  setLevel(level){
    if(level<1){
      this.strength=0;
    }
    if(level>3){
      this.strength=3;
    }

    this.level=level;
    this.bordersize=this.level*2;
  }

  setOwner(owner){
    if(owner<1 || owner>BLACKHOLE_TOWER){
      this.owner=BLANK_TOWER;
    }
    
    this.owner=owner;
    this.bordercolor=color(0,0,0);
    this.fillcolor=gamecolors[this.owner];
  }

  sendSoldier(angle){
    let s=new Soldier();
    s.velocity=p5.Vector.fromAngle(radians(angle));
    s.setOwner(this.owner);
    s.setLevel(this.level);
    soldiers.push(s);
  }

  draw(){
    super.draw();

    push();
    strokeWeight(1);
    fill(this.textcolor);
    textSize(this.textsize);
    text(this.text, this.position.x-7, this.position.y+6);   
    pop();
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
class Tower extends Particle {
  constructor() {
    super();
    this.setSize(towerdiameter);
    this.setLevel(1);
    this.setStrength(1);
    this.setOwner(NEUTRAL_TOWER);
    this.text = "1";
    this.textsize = 24;
    this.textcolor = color(0, 0, 0);
    this.counter = 6;
  }

  checkenteredtower(soldier) {
    if (soldier.hometower == this.index) {
      return false;
    }

    //check if the soldier has entered the tower; i.e. fully within the tower area
    return this.contained(soldier);
  }

  setIndex(index) {
    this.index = index;
  }

  setText(text) {
    this.text = text;
  }

  setTextSize(textsize) {
    this.textsize = textsize;
  }

  setTextColor(textcolor) {
    this.textcolor = textcolor;
  }

  setStrength(strength) {
    this.strength = strength;
    if (this.strength < 0) {
      this.strength = 1;
    }
    if (this.strength >= MAX_STRENGTH) {
      this.strength = MAX_STRENGTH;
    }

    this.text = strength;
  }

  setLevel(level) {
    if (level < 1) {
      this.strength = 0;
    }
    if (level > 3) {
      this.strength = 3;
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

  hit(soldier) {
    //console.log("HIT");
    if (soldier.owner == this.owner) {
      this.setStrength(this.strength + soldier.level);
    } else {
      this.setStrength(this.strength - soldier.level);
      if (this.strength < 0) {
        this.setStrength(0);
        this.setOwner(soldier.owner);
      }
    }
  }

  sendSoldierTarget(tower) {
    if (this.owner >= NEUTRAL_TOWER) {
      return;
    }

    this.counter--;

    if (this.counter < this.strength / 10) {
      let s = new Soldier();
      s.position = this.position;
      s.velocity = p5.Vector.sub(tower.position, this.position);
      s.velocity.normalize();

      s.setOwner(this.owner);
      s.setHometower(this.index);
      s.setLevel(this.level);
      soldiers.push(s);
      this.counter = 6;
    }
  }

  draw() {
    super.draw();

    push();
    strokeWeight(1);
    fill(this.textcolor);
    textSize(this.textsize);
    text(this.text, this.position.x - 7, this.position.y + 6);
    pop();
  }
}

*/