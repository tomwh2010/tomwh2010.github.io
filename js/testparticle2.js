

let CANVAS_WIDTH = 800;
let CANVAS_HEIGHT = 400;
let p=null;

function setup(){
    createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
    p=new Particle();
    p.position.x=100;
    p.position.y=100;
    p.velocity=createVector(1, 2);
}

function draw(){
    background(220);
    p.update();
    p.reflectedges();
    p.draw();
}