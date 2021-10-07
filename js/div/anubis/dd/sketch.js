/*
TODO:
-get menu working
-get simple starmap working; adjust for height-2*boxsize
-get movement working
-get autopilot working
-add problems the pilot has to deal with
--engine - fuel leak
--crew bunks
--storage - items shift, only applicable in planet fall
--kitchen - fire

Anubis

Your job is to pilot the spacecraft Anubis between the space station, the lunar site and the planet spaceport, ferrying cargo and/or people.

Each carry it own set of problems:
-spacestation - no gravity, friction or drag, so Newtons laws apply in full
-lunar site - low gravity but still no friction or drag
-planet spaceport - full gravity, friction and drag

Sometimes its smooth "sailing", other times the problems keep on coming.

Ellipse show altitude and angle of docker in respect to spacestation.

The larger the ellipse the closer are you. If you see a halfcircle on one side then you don't have a visual on the spacestation.

Docker has to be level. If you see a circle then you are perfectly level. If it has a tick and you see an ellipse then you have to correct the angle.

press key to fire correct retro thruster 

|key|explanation    |
---------------------
|q  |accelarate     |
---------------------
|a  |deaccelerate   |
---------------------
|w  |pan up         |
---------------------
|s  |pan down       |
---------------------
|e  |pan left       |
---------------------
|d  |pan right      |
---------------------
|r  |pitch up       |
---------------------
|f  |pitch down     |
---------------------
|t  |roll left      |
---------------------
|g  |roll right     |
---------------------
|y  |yaw left       |
---------------------
|h  |yaw right      |
---------------------

dock to hard->you die (docker.vel.z>3 at docker.pos.z==0)

accelerate to hard(any direction)->you die (docker.acc.?>6 || docker.acc.?<-6)

dock at angle->you die (docker.heightoffset>1.05 || docker.heightoffset<0.95)

miss the docking site->you die (docker.pos.z<0)

stray to far from spacestation->you die distance>1100

run out of time->you die

each time you fire any thruster->you deplete the fuel reserve

no more fuel->miss the docking site?->you may die

remember: newtons first law of motion applies. no drag or friction in space

yaw, pitch, roll affects both starmap and docker.pos
forward, backward, pan left/right/up/down affect only docker in relation to spacestation. This is because stars have an infinite z
(debatable?)

yaw inc/dec star.x and dec/inc docker.x + rotate docker.angle
pitch inc/dec star.y and dec/inc docker.y
roll rotate +/- star.heading and docker.heading + docker.angle

forward/backward inc/dec docker.z
pan left/right inc/dec docker.x
pan up/down inc/dec docker.y

yaw and pitch in regard to spacestation:

x+=sign*sqrt(2*z^2*(1-cos(angle)))
*/

var menuboxsize;
var gamestate;
var docker;
var id1;
var id2;
var time;
let system;

function setup() {
  createCanvas(600, 500);
  menuboxsize = 40;
  gamestate = 0;

  frameRate(1);
  id1 = createDiv("info");
  id2 = createDiv("");
  docker = new DockingModule();

  time = 5000;

  system = new StarSystem();
  system.populate();
}

function draw() {
  drawgui();
  drawwarning("Fuel leak in engine room");
/*
  if (gamestate == "1/2/3") {
    if (docker.pos.z > 0) {
      if (time > 1) {
        time--;
      }
    } else {

      let buffer = "";

      if (time == 0) {
        buffer = "Used too much time.<br/>";
      }
      if (docker.vel.z < -5) {
        buffer += " Tried to dock too hard.<br/>";
      }
      if (docker.heightoffset > 1.1 || docker.heightoffset < 0.9) {
        buffer += " Too much tilt.<br/>";
      }
      if (docker.map_distance() > 20) {
        buffer += " Tried to dock at the wrong place.<br/>";
      }
      if (buffer == "") {
        buffer = "You docked safely!<br/>"
      } else {
        buffer += "YOU DIE!";
      }

      id2.html(buffer);
    }

    docker.drawdocker();
    docker.drawcrosshair();
    system.display();
    //docker.move();
  }
  */
}

function keyPressed() {  
  if (keyCode >= 49 && keyCode<=57) {
    keyGui(keyCode);
  }

  if(gamestate=="1/2/3"){
    keyGame(keyCode);
  } 
}

function mouseClicked() {
  if (gamestate == "0") {
    gamestate = "1";
  }
}