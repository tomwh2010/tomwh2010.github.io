function keyGui(command){  
  console.log(command);
  console.log(gamestate);
  if (command === 49) {
    if (gamestate == "2") {
      gamestate = "2/1";
    }
    if (gamestate == "1") {
      gamestate = "2";
    }
  }
  if (command === 50) {
    if (gamestate == "1") {
      gamestate  = "3";
    }
  }
  if (command === 51) {
    if (gamestate == "1") {
      gamestate = "4";
    }
  }
  if (command === 52) {
    if (gamestate == "1") {
      gamestate = "5";
    }
  }
  if (command === 53) {
    if (gamestate == "1") {
      gamestate = "6";
    }
  }
  if (command === 57) {
    if (gamestate.length == 1) {
      gamestate = "1";
    }
    else{
      gamestate=gamestate.slice(0, gamestate.length-2);
    }
  }
}

function drawgui() {

  var buffertop = "";
  var bufferbottom = "";
  var buffer1 = "Click on screen to begin";
  var buffer2 = "";
  var buffer3 = "";
  var buffer4 = "";
  var buffer5 = "";

  if (gamestate == "1") {
    buffertop += "Anubis - Main menu";
    bufferbottom = "";
    buffer1 = "1 Cockpit";
    buffer2 = "2 Kitchen";
    buffer3 = "3 Engine";
    buffer4 = "4 Crew bunks";
    buffer5 = "5 Storage";
  }

  if (gamestate == "2") {
    buffertop += "Anubis - Cockpit";
    bufferbottom = "";
    buffer1 = "1 Starmap";
    buffer2 = "";
    buffer3 = "";
    buffer4 = "";
    buffer5 = "";
  }

  if (gamestate == "2/1") {
    buffertop += "Anubis - Starmap";
    bufferbottom = "";
    buffer1 = "";
    buffer2 = "";
    buffer3 = "";
    buffer4 = "";
    buffer5 = "";
  }

  if (gamestate == "3") {
    buffertop += "Anubis - Kitchen";
    bufferbottom = "";
    buffer1 = "";
    buffer2 = "";
    buffer3 = "";
    buffer4 = "";
    buffer5 = "";
  }

  if (gamestate == "4") {
    buffertop += "Anubis - Engine";
    bufferbottom = "";
    buffer1 = "";
    buffer2 = "";
    buffer3 = "";
    buffer4 = "";
    buffer5 = "";
  }

  if (gamestate == "5") {
    buffertop += "Anubis - Crew bunks";
    bufferbottom = "";
    buffer1 = "";
    buffer2 = "";
    buffer3 = "";
    buffer4 = "";
    buffer5 = "";
  }

  if (gamestate == "6") {
    buffertop += "Anubis - Storage";
    bufferbottom = "";
    buffer1 = "dsfsdf";
    buffer2 = "sdfdfd";
    buffer3 = "dfghsf";
    buffer4 = "sdes";
    buffer5 = "sfgsdf";
  }

  push();
  background(0);
  fill(0, 170, 0);
  textSize(16);
  stroke(0, 170, 0);
  line(0, menuboxsize, width, menuboxsize);
  line(0, height - menuboxsize, width, height - menuboxsize);

  if (gamestate != "0") {
    buffertop += " (Press 9 to go back)";
  }
  
  text(buffertop, 20, 30);
  text(buffer1, 20, 70);
  text(buffer2, 20, 100);
  text(buffer3, 20, 130);
  text(buffer4, 20, 160);
  text(buffer5, 20, 190);
  text(bufferbottom, 20, height - 10);

  if(gamestate=="6"){    
    drawwarning("Fuel leak in engine room");
  }
  pop();
}

function drawwarning(buffer){
  push();
  background(0);
  textSize(16);
  stroke(0, 170, 0);
  translate(width/2, height/2);  
  fill(0, 170, 0);
  //TODO centeralign
  text(buffer, -10, -10);
  text("Press 9 to go back", -10, -20);
  noFill();
  rect(-width/2+50, -100, width-100, 200);  

  pop();
}