//16 towers 4x4
//can send soldiers in 8 directions
//there is no check for boundries or a disabled tower
//each tower can be owned by player 0-3
//a towner with owner 5 is disabled; i.e. black hole/obstacle
//a towner with owner 4 is neutral; ready for conquering
//a tower has a height and a strength (1-4)
//a tower less than 20 floors can send 1 soldier, of the towers preset strength, every x cycles
//a tower of 20-39 floors can send 2 soldiers, of the towers preset strength, in every 2*x/3 cycles
//a tower of 40->64 floors can send 3 soldiers, of the towers preset strength, in every x/2 cycles
//a tower grows by 1 floor every 10*x cycles
//a tower grows by every friendly soldier sent to it from another tower
//a tower decrease by 1 from every enemy soldier that walks in the front door
//soldiers from opposite players that collide in the open will fight
//each soldier that fight in a cycle will have their strength decreased by 1
//soldier can walk on if enemy soldier is dead
//if soldiers arrive at the fight, they will continue till its over
//soldiers that fight at a crossroad will recieve soldiers from other directsions
//when its over surviving soldier(s) will continue on to its destination
//soldiers with a strength of 0 die

//if the simulation reach y cycles the game is over
//when all the non disabled towers are owned by 1 player the game is over

//genetic algorithm, machine learning

let towerdiameter = 40;
let start_x = 50;
let start_y = 50;
let step = 150;
let gamecolors = [];
let towers=[];
let soldiers=[];
let p=null;

let NEUTRAL_TOWER = 4;
let BLACKHOLE_TOWER = 5;
let MAX_STRENGTH = 64;

function setup() {
  gamecolors = [
    color(0, 0, 0),
    color(175, 122, 197),
    color(231, 76, 60),
    color(241, 196, 15),
    color(255, 0, 0),
    color(180, 180, 180),
    color(0, 0, 0),
  ];

  //p=new Particle();
  //p.velocity=createVector(1,1);

  createCanvas(550, 550);

  let t=new Tower();
  t.position=createVector(400,400);
  t.setOwner(5);
  towers.push(t);

  t=new Tower();
  t.position=createVector(100,400);
  towers.push(t);

  t=new Tower();
  t.position=createVector(400,100);
  t.setOwner(5);
  towers.push(t);

  t=new Tower();
  t.position=createVector(100,100);
  t.setOwner(5);
  towers.push(t);
}

function draw() {
  background(220);

  for(let i=0; i<towers.length; i++){
    towers[i].draw();
  }

  //p.updatePosition();
  //p.draw();

  noLoop();
  towers[1].sendSoldier(90);
}
/*
//there is no check for boundries or a disabled tower
//each tower can be owned by player 0-3
//a towner with owner 5 is disabled; i.e. black hole/obstacle
//a towner with owner 4 is neutral; ready for conquering
//a tower has a height and a strength (1-4)
//a tower less than 20 floors can send 1 soldier, of the towers preset strength, every x cycles
//a tower of 20-39 floors can send 2 soldiers, of the towers preset strength, in every 2*x/3 cycles
//a tower of 40->64 floors can send 3 soldiers, of the towers preset strength, in every x/2 cycles
//a tower grows by 1 floor every 10*x cycles
//a tower grows by every friendly soldier sent to it from another tower
//a tower decrease by 1 from every enemy soldier that walks in the front door
//soldiers from opposite players that collide in the open will fight
//each soldier that fight in a cycle will have their strength decreased by 1
//soldier can walk on if enemy soldier is dead
//if soldiers arrive at the fight, they will continue till its over
//soldiers that fight at a crossroad will recieve soldiers from other directsions
//when its over surviving soldier(s) will continue on to its destination
//soldiers with a strength of 0 die

//if the simulation reach y cycles the game is over
//when all the non disabled towers are owned by 1 player the game is over

//genetic algorithm, machine learning

let towerdiameter = 50;
let start_x = 50;
let start_y = 50;
let step = 150;
let gamecolors = [];
let towers = [];
let soldiers = [];

let NEUTRAL_TOWER = 4;
let BLACKHOLE_TOWER = 5;
let MAX_STRENGTH = 60;
let counter = 0;
let MAX_COUNTER = 100;

let CANVAS_WIDTH = 500;
let CANVAS_HEIGHT = 500;

function setup() {
  gamecolors = [
    color(0, 255, 0),
    color(175, 122, 197),
    color(231, 76, 60),
    color(241, 196, 15),
    color(180, 180, 180),
    color(0, 0, 0),
  ];

  createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);

  let t = new Tower();
  t.setPosition(100, 100);
  t.setOwner(0);
  t.setIndex(0);
  towers.push(t);

  t = new Tower();
  t.setPosition(100, 400);
  t.setIndex(1);
  t.setOwner(1);
  towers.push(t);

  t = new Tower();
  t.setPosition(400, 100);
  t.setOwner(0);
  t.setIndex(2);
  towers.push(t);

  t = new Tower();
  t.setPosition(400, 400);
  t.setIndex(3);
  towers.push(t);

  t = new Tower();
  t.setPosition(250, 250);
  t.setIndex(4);
  towers.push(t);
}

function draw() {
  background(220);

  for (let i = soldiers.length - 1; i >= 0; i--) {
    soldiers[i].updatePosition();
    if (soldiers[i].oob()) {
      soldiers.splice(i, 1);
    }
  }

  for (let i = 0; i < towers.length; i++) {
    for (let j = soldiers.length - 1; j >= 0; j--) {
      if (towers[i].checkenteredtower(soldiers[j])) {
        towers[i].hit(soldiers[j]);
        soldiers.splice(j, 1);
      }
    }
  }

  //noLoop();

  counter++;
  if (counter == MAX_COUNTER) {
    for (let i = 0; i < towers.length; i++) {
      for (let j = 0; j < towers.length; j++) {
        if (i != j) {
          towers[i].sendSoldierTarget(towers[j]);
        }
      }
    }
    counter = 1;
  }

  for (let i = 0; i < soldiers.length - 2; i++) {
    for (let j = i + 1; j < soldiers.length - 1; j++) {
      if (
        soldiers[i].checkcollision(soldiers[j]) &&
        soldiers[i].owner != soldiers[j].owner
      ) {
        soldiers[i].deltaLevel(-1);
        soldiers[j].deltaLevel(-1);
      }
    }
  }

  for (let j = soldiers.length - 1; j >= 0; j--) {
    if (soldiers[j].level == 0) {
      soldiers.splice(j, 1);
    }
  }

  let ownerfirstindex = -1;

  for (let j = 0; j < towers.length; j++) {
    if (towers[j].owner < NEUTRAL_TOWER) {
      ownerfirstindex = j;
      break;
    }
  }

  let finished = true;

  for (let j = ownerfirstindex + 1; j < towers.length; j++) {
    if (towers[ownerfirstindex].owner != towers[j].owner) {
      finished = false;
      break;
    }
  }

  for (let i = 0; i < soldiers.length; i++) {
    soldiers[i].draw();
  }

  for (let i = 0; i < towers.length; i++) {
    towers[i].draw();
  }

  if (finished) {
    console.log("finished");
    noLoop();
  }
}


//16 towers 4x4
//can send soldiers in 8 directions
//there is no check for boundries or a disabled tower
//each tower can be owned by player 0-3
//a towner with owner 6 is disabled; i.e. black hole
//a towner with owner 5 is non existent tower(blank space); soldier will continue on
//a towner with owner 4 is neutral; ready for conquering
//a tower has a height and a strength (1-4)
//a tower less than 20 floors can send 1 soldier, of the towers preset strength, every x cycles
//a tower of 20-39 floors can send 2 soldiers, of the towers preset strength, in every 2*x/3 cycles
//a tower of 40->64 floors can send 3 soldiers, of the towers preset strength, in every x/2 cycles
//a tower grows by 1 floor every 10*x cycles
//a tower grows by every friendly soldier sent to it from another tower
//a tower decrease by 1 from every enemy soldier that walks in the front door
//soldiers from opposite players that collide in the open will fight
//each soldier that fight in a cycle will have their strength decreased by 1
//soldier can walk on if enemy soldier is dead
//if soldiers arrive at the fight, they will continue till its over
//soldiers that fight at a crossroad will recieve soldiers from other directsions
//when its over surviving soldier(s) will continue on to its destination
//soldiers with a strength of 0 die

//if the simulation reach y cycles the game is over
//when all the non disabled towers are owned by 1 player the game is over

//genetic algorithm, machine learning

let towerdiameter = 40;
let start_x = 50;
let start_y = 50;
let step = 150;
let towers = {};
let numtowers = 16;
let gamecolors = [];
let pathways = {};

let p=null;

let NEUTRAL_TOWER = 4;
let BLANK_TOWER = 5;
let BLACKHOLE_TOWER = 6;
let MAX_STRENGTH = 64;

function setup() {
  gamecolors = [
    color(175, 122, 197),
    color(231, 76, 60),
    color(241, 196, 15),
    color(255, 0, 0),
    color(180, 180, 180),
    color(220, 220, 220),
    color(0, 0, 0),
  ];

  createCanvas(550, 550);
  p=new Particle(50, 50);
  *for (let i = 0; i < numtowers; i++) {
    towers[str(i)] = new Tower(i);
  }

  towers["0"].setOwner(0);
  towers["1"].setOwner(NEUTRAL_TOWER);

  towers["0"].setStrength(1);
  towers["1"].setStrength(4);

  for (let i = 0; i < 3; i++) {
    //horizontal
    pathways[str(i) + str(i + 1)] = new Pathway(i, i + 1);
    pathways[str(i + 4) + str(i + 5)] = new Pathway(i + 4, i + 5);
    pathways[str(i + 8) + str(i + 9)] = new Pathway(i + 8, i + 9);
    pathways[str(i + 12) + str(i + 13)] = new Pathway(i + 12, i + 13);

    //nw-se
    pathways[str(i) + str(i + 5)] = new Pathway(i, i + 5);
    pathways[str(i + 4) + str(i + 9)] = new Pathway(i + 4, i + 9);
    pathways[str(i + 8) + str(i + 13)] = new Pathway(i + 8, i + 13);

    //ne-sw
    pathways[str(i + 1) + str(i + 4)] = new Pathway(i + 1, i + 4);
    pathways[str(i + 5) + str(i + 8)] = new Pathway(i + 5, i + 8);
    pathways[str(i + 9) + str(i + 12)] = new Pathway(i + 9, i + 12);
  }

  //vertical
  for (let i = 0; i < 12; i++) {
    pathways[str(i) + str(i + 4)] = new Pathway(i, i + 4);
  }*
}

function draw() {
  background(220);

  p.draw();
  *for (const [key, value] of Object.entries(pathways)) {
    value.draw();
  }

  for (const [key, value] of Object.entries(towers)) {
    value.draw();
  }

  console.log(checkFinished());*

  noLoop();
}
*
function checkFinished() {
  let firstOwner = 0;
  let secondOwner = 0;

  for (const [key, value] of Object.entries(towers)) {
    firstOwner = value.getOwner();
    if (firstOwner < BLANK_TOWER) {
      break;
    }
  }

  for (const [key, value] of Object.entries(towers)) {
    secondOwner = value.getOwner();
    if (secondOwner < BLANK_TOWER && secondOwner != firstOwner) {
      return false;
    }
  }

  return true;
}
*
*/