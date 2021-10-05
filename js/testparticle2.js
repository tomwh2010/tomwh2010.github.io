

let CANVAS_WIDTH = 500;
let CANVAS_HEIGHT = 500;
let p=null;

function setup(){
    createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
    p=new Particle();
    p.position.x=100;
    p.position.y=100;
    p.velocity=createVector(1, 2)
}

function draw(){
    background(220);
    p.update();
    p.reflectedges();
    p.draw();
}