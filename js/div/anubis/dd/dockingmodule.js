function keyGame(command){
   if (time > 0) {
    //q=>accelarate
    if (command == 81) {
      startop -= 10;
      if (startop < 0) {
        startop = 0;
      }
    }

    //a=>deaccelerate
    if (command == 65) {
      starleft -= 10;
      if (starleft < 0) {
        starleft = 0;
      }
    }

    //w=>pan up
    if (command == 87) {
      starleft += 10;
      if (starleft > starmaxx) {
        starleft = starmaxx;
      }
    }

    //s=>pan down
    if (command == 83) {
      startop += 10;
      if (startop > starmaxy) {
        startop = starmaxy;
      }
    }

    //e=>pan left
    if (command == 69) {
      startop += 10;
      if (startop > starmaxy) {
        startop = starmaxy;
      }
    }

    //d=>pan right
    if (command == 68) {
      startop += 10;
      if (startop > starmaxy) {
        startop = starmaxy;
      }
    }

    //r=>pitch up
    if (command == 82) {
      startop += 10;
      if (startop > starmaxy) {
        startop = starmaxy;
      }
    }

    //f=>pitch down
    if (command == 70) {
      startop += 10;
      if (startop > starmaxy) {
        startop = starmaxy;
      }
    }

    //t=>roll left
    if (command == 84) {
      startop += 10;
      if (startop > starmaxy) {
        startop = starmaxy;
      }
    }

    //g=>roll down
    if (command == 71) {
      startop += 10;
      if (startop > starmaxy) {
        startop = starmaxy;
      }
    }

    //y=>yaw left
    if (command == 89) {
      startop += 10;
      if (startop > starmaxy) {
        startop = starmaxy;
      }
    }

    //h=>yaw right
    if (command == 72) {
      startop += 10;
      if (startop > starmaxy) {
        startop = starmaxy;
      }
    }
  }
}

class DockingModule {
  constructor() {
    this.centerwidth = width / 2;
    this.centerheight = height / 2;

    this.pos = createVector(500, 100, 100);
    this.vel = createVector(0, 0, 0);
    this.acc = createVector(0, 0, 0);

    this.fuel = 1000;
    this.vel_threshold = -4;
    this.acc_change = 2;
    this.gravity = 1;

    this.crosshair_radius = 20;

    this.angle = 165;
    this.heightoffset = 1.0;
  }

  forward() {
    if (this.vel.z < this.vel_threshold) {
      this.acc.z = this.acc_change;
    }
    this.fuel--;
  }

  move() {
    if (this.acc.z > -1) {
      this.acc.z--;
    } else {
      this.acc.z *= this.gravity;
    }
    this.vel.add(this.acc);
    this.pos.add(this.vel);

    if (this.pos.z < 0) {
      this.pos.z = 0;
      this.acc.z = 0;
    }
  }

  map_distance() {
    var map_pos = createVector(this.pos.x, this.pos.y);
    return map_pos.mag();
  }

  drawcrosshair() {
    push();
    noFill();
    translate(this.centerwidth, this.centerheight);
    let c = color(0, 255, 0);
    stroke(c);
    circle(0, 0, this.crosshair_radius * 2);
    stroke(255);
    line(-this.crosshair_radius, 0, this.crosshair_radius, 0);
    line(0, -this.crosshair_radius, 0, this.crosshair_radius);
    pop();
  }

  drawdocker() {
    if (this.pos.x >= -this.centerwidth && this.pos.x <= this.centerwidth && this.pos.y >= -this.centerheight && this.pos.y <= this.centerheight) {
      this.drawellipse();
    } else {
      this.drawboxcircle();
    }
  }

  drawellipse() {
    push();
    stroke(255, 0, 0);
    fill(0);
    //double translate to get to the correct position
    translate(this.centerwidth, this.centerheight);
    translate(this.pos.x, this.pos.y);
    rotate(radians(this.angle));
    let ellipsesize = map(this.pos.z, 0, 1000, 200, 2);

    if (this.heightoffset < 1) {
      ellipse(0, 0, ellipsesize / this.heightoffset, ellipsesize);
      let xoffset = ellipsesize / this.heightoffset / 2;
      line(xoffset - 2, 0, xoffset + 2, 0);
    }
    if (this.heightoffset > 1) {
      ellipse(0, 0, ellipsesize, ellipsesize * this.heightoffset);
      let yoffset = ellipsesize * this.heightoffset / 2;
      line(0, yoffset - 2, 0, yoffset + 2);
    }
    if (this.heightoffset == 1) {
      ellipse(0, 0, ellipsesize, ellipsesize);
    }

    circle(0, 0, 4);
    pop();
  }

  tilt(value) {
    this.heightoffset += value;
    this.fuel--;
  }

  cpu() {
    if (this.vel.z < -4.5) {
      this.ascend();
    } else if (this.heightoffset > 1.05) {
      this.tilt(-0.05);
    } else if (this.heightoffset < 0.95) {
      this.tilt(0.05);
    }
  }

  //draw a red circle at the the edge of the screen in
  //the heading of the docking station
  drawboxcircle() {
    var vect = createVector(0, 0);
    var heading = this.pos.heading();
    var tanheading = tan(heading);

    if (this.pos.heading() < 3 * PI / 4 && this.pos.heading() >= PI / 4) {
      vect.y = this.centerheight;
      vect.x = vect.y / tanheading;
    }

    if (this.pos.heading() < PI / 4 && this.pos.heading() >= -PI / 4) {
      vect.x = this.centerwidth;
      vect.y = vect.x * tanheading;
    }

    if (this.pos.heading() < -PI / 4 && heading >= -3 * PI / 4) {
      vect.y = -this.centerheight;
      vect.x = vect.y / tanheading;
    }

    if (heading >= 3 * PI / 4 || heading < -3 * PI / 4) {
      vect.x = -this.centerwidth
      vect.y = vect.x * tanheading;
    }

    push();
    translate(this.centerwidth, this.centerheight);
    translate(vect.x, vect.y);
    fill(255, 0, 0);
    ellipse(0, 0, 15, 15);
    pop();
  }

  roll(delta) {
    push();
    translate(this.centerwidth, this.centerheight);
    var rollValue = 0.01;
    if (delta < 0) {
      rollValue = -rollValue;
    }

    this.pos.rotate(rollValue);
    //change angle
    pop();
  }

  yaw(delta) {
    push();
    translate(this.centerwidth, this.centerheight);
    this.pos.z+=triangleAngleToDelta(this.pos.z, delta);
    //change angle; heightoffset
    pop();
  }

  pitch(delta) {
    push();
    translate(this.centerwidth, this.centerheight);
    this.pos.x+=triangleAngleToDelta(this.pos.z, delta);
    //change angle; heightoffset
    pop();
  }
}