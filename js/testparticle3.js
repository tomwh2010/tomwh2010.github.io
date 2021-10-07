

let CANVAS_WIDTH = 800;
let CANVAS_HEIGHT = 400;
let particles=[];
let particles_num=25;

function setup(){
    createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
    //frameRate(10);
    let p=null;

    for(i=0; i<particles_num; i++){    
        p=new Particle();
        p.position.x=0;
        p.position.y=0;
        p.radius=random(10,50);
        p.borderthickness=random(1,5);
        p.velocity=createVector(random(5), random(5));
        p.setLeftAndTopShift(width/2, height/2);
        particles.push(p);
    }
}

function draw(){
    background(220);

    for(let i=0; i<particles.length; i++){
        particles[i].update();
        particles[i].reflectedges();
        particles[i].fillcolor = color(255, 255, 255);
    }

    for(let i=0; i<particles.length-1; i++){
        for(let j=i+1; j<particles.length; j++){      
            if(i!=j){
                if(particles[i].touching(particles[j])) {
                    particles[i].fillcolor = color(255, 0, 255);
                    particles[j].fillcolor = color(255, 0, 255);
                }      
                if(particles[i].intersecting(particles[j])) {
                    particles[i].fillcolor = color(0, 255, 255);
                    particles[j].fillcolor = color(0, 255, 255);
                }  
                if(particles[i].contained(particles[j])) {
                    particles[i].fillcolor = color(255, 255, 0);
                    particles[j].fillcolor = color(255, 255, 0);
                }            
            }                
        }
    }

    for(let i=0; i<particles.length; i++){
        particles[i].draw();
    }
}