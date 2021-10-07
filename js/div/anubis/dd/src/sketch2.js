/*

Docker

Your job is to pilot a spacecraft to dock with the space station.

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
/*
var docker;
var id1;
var id2;
var time;
let system;

function setup() {
  createCanvas(400, 400);

  frameRate(1);
  id1 = createDiv("info");
  id2 = createDiv("");
  docker = new DockingModule();

  time = 5000;

  system = new StarSystem();
  system.populate();
}

function draw() {
  background(0);

  buffer = "";
  buffer += "time " + time + " ";
  buffer += "distance " + docker.pos.mag().toFixed(1) + "<br/>";
  buffer += "heading " + degrees(docker.pos.heading()).toFixed(1) + "<br/>";
  buffer += "x y " + docker.pos.x + " " + docker.pos.y + "<br/>";
  buffer += "vel " + docker.vel.z.toFixed(2) + " ";
  buffer += "acc " + docker.acc.z.toFixed(2) + " ";
  buffer += "distance " + docker.map_distance().toFixed(2) + "<br/>";
  buffer += "fuel " + docker.fuel + " ";
  buffer += "tilt " + (docker.heightoffset - 1) + "<br/>";
  id1.html(buffer);

  //cpu controlled
  //docker.cpu();

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

function keyPressed() {
  if (time > 0) {
    //q=>accelarate
    if (keyCode == 81) {
      startop -= 10;
      if (startop < 0) {
        startop = 0;
      }
    }

    //a=>deaccelerate
    if (keyCode == 65) {
      starleft -= 10;
      if (starleft < 0) {
        starleft = 0;
      }
    }

    //w=>pan up
    if (keyCode == 87) {
      starleft += 10;
      if (starleft > starmaxx) {
        starleft = starmaxx;
      }
    }

    //s=>pan down
    if (keyCode == 83) {
      startop += 10;
      if (startop > starmaxy) {
        startop = starmaxy;
      }
    }

    //e=>pan left
    if (keyCode == 69) {
      startop += 10;
      if (startop > starmaxy) {
        startop = starmaxy;
      }
    }

    //d=>pan right
    if (keyCode == 68) {
      startop += 10;
      if (startop > starmaxy) {
        startop = starmaxy;
      }
    }

    //r=>pitch up
    if (keyCode == 82) {
      startop += 10;
      if (startop > starmaxy) {
        startop = starmaxy;
      }
    }

    //f=>pitch down
    if (keyCode == 70) {
      startop += 10;
      if (startop > starmaxy) {
        startop = starmaxy;
      }
    }

    //t=>roll left
    if (keyCode == 84) {
      startop += 10;
      if (startop > starmaxy) {
        startop = starmaxy;
      }
    }

    //g=>roll down
    if (keyCode == 71) {
      startop += 10;
      if (startop > starmaxy) {
        startop = starmaxy;
      }
    }

    //y=>yaw left
    if (keyCode == 89) {
      startop += 10;
      if (startop > starmaxy) {
        startop = starmaxy;
      }
    }

    //h=>yaw right
    if (keyCode == 72) {
      startop += 10;
      if (startop > starmaxy) {
        startop = starmaxy;
      }
    }
  }
}
*/