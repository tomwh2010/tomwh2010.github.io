var menuboxsize;
var gamestate;
function setup(){
  createCanvas(1000,650);
  menuboxsize = 40;
  gamestate = 0;
  id1 = createDiv("info");
  id2 = createDiv("");
  time = 5000;
}

function draw(){
  drawgui();
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