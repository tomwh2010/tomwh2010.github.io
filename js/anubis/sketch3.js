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
  //drawwarning("Fuel leak in engine room");
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
