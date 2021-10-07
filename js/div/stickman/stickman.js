/*
0: head
1: neck 
2: left shoulder
3: right shoulder
4: torso line
5: upper left
6: lower left
7: left hand
8: upper right arm
9: lower right arm
10: right hand
11: left pelvis
12: right pelvis
13: upper left leg
14: lower left leg
15: left foot
16: upper right leg
17: lower right leg
18: right foot
*/

class Stickman {
  constructor(x, y) {
    this.x = x;
    this.y = y;

    this.body = [];

    var part;

    //head
    part = new Part(20, 0, "circle", 0);
    this.body.push(part);
    part= new Part(20, PI / 2, "line", "red");
    this.body.push(part);
    
    //shoulders
    part= new Part(20, PI, "line", "yellow");
    this.body.push(part);
    part= new Part(20, 0, "line", "yellow");
    this.body.push(part);
    
    //left arm
    part= new Part(20, PI/2, "line", "green");
    this.body.push(part);
    part= new Part(20, PI/2, "line", "blue");
    this.body.push(part);
    part= new Part(5, PI/2, "line", "red");
    this.body.push(part);
    /*
    this.leftupperarm = new Part(this.leftshoulder.x2, this.leftshoulder.y2, 20, PI / 2, "line", "yellow");
    this.leftlowerarm = new Part(this.leftupperarm.x2, this.leftupperarm.y2, 20, PI / 2, "line", "red");
    this.lefthand = new Part(this.leftlowerarm.x2, this.leftlowerarm.y2, 5, PI / 2, "line", "green");
    */
  }

  draw() {
    translate(this.x, this.y);
    //head
    this.body[0].draw();
    //neck
    this.body[1].draw();
    
    //translate(this.body[1].x2, this.body[1].y2);
    //left shoulder
    this.body[2].draw();
    
    //translate(this.body[2].x2, this.body[2].y2);
    //left upper arm
    //this.body[3].draw();
    
    //translate(this.body[3].x2, this.body[3].y2);
    //left lower arm
    //this.body[4].draw();
    
    //translate(this.body[4].x2, this.body[4].y2);
    //left hand
    //this.body[5].draw();
    
    //resetMatrix();
    //translate(this.body[1].x2, this.body[1].y2);
    //right shoulder
    this.body[3].draw();
  }
}