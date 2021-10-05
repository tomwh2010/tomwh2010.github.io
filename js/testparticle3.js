

let CANVAS_WIDTH = 500;
let CANVAS_HEIGHT = 500;
let particles=[];

function setup(){
    createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
    //frameRate(10);
    let p=null;

    for(i=0; i<10; i++){    
        p=new Particle();
        p.position.x=random(0,CANVAS_WIDTH);
        p.position.y=random(0,CANVAS_HEIGHT);
        p.size=random(10,50);
        p.velocity=createVector(random(5), random(5));
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