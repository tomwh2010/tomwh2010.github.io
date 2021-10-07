class Part {
  constructor(r, a, t, c) {
    this.r = r;
    this.a = a;
    this.t = t;
    this.c = c;
  }

  draw() {
    stroke(this.c);
    if (this.t == "circle") {
      ellipse(0, 0, this.r, this.r);
    }
    if (this.t == "line") {
      this.x2 = this.r * cos(this.a);
      this.y2 = this.r * sin(this.a);
      line(0, 0, this.x2, this.y2);
    }
  }
}