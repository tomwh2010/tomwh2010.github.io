

let CANVAS_WIDTH = 800;
let CANVAS_HEIGHT = 400;
let p=null;

function setup(){
    createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
    p=new Particle();
    p.position.x=0;
    p.position.y=0;
    p.acceleration=createVector(0.0001, 0.0002);
}

function draw(){
    background(220);
    p.update();
    p.draw();
}