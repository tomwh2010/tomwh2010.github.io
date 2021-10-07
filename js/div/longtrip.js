var grid;
var counter;

function setup() {
  createCanvas(500, 500);
  
  grid = [];
  counter=0;

  for (let i = 0; i < 64; i++) {
    let el = [-1, -1];
    grid.push(el);
  }

  //puzzle
  //1
  grid[1] = [-1, 2];
  //2
  grid[2] = [1, 3];
  //3
  grid[3] = [2, 4];
  //4
  grid[4] = [3, -1];
  //10
  grid[10] = [-1, 18];
  //16
  grid[16] = [-1, 24];
  //18
  grid[18] = [10, -1];
  //20
  grid[20] = [-1, 21];
  //21
  grid[21] = [20, 29];
  //22
  grid[22] = [-1, 23];
  //23
  grid[23] = [22, -1];
  //24
  grid[24] = [16, 32];
  //27
  grid[27] = [-1, 35];
  //29
  grid[29] = [21, 30];
  //30
  grid[30] = [29, 38];
  //32
  grid[32] = [24, -1];
  //34
  grid[34] = [-1, 35];
  //35
  grid[35] = [27, 34];
  //38
  grid[38] = [-1, 30];
  //39
  grid[39] = [-1, 47];
  //41
  grid[41] = [-1, 42];
  //42
  grid[42] = [41, -1];
  //44
  grid[44] = [-1, 45];
  //45
  grid[45] = [44, -1];
  //46
  grid[46] = [-1, 54];
  //47
  grid[47] = [-1, 39];
  //52
  grid[52] = [-1, 53];
  //53
  grid[53] = [52, -1];
  //54
  grid[54] = [-1, 46];
  //57
  grid[57] = [-1, 58];
  //58
  grid[58] = [57, 59];
  //59
  grid[59] = [58, 60];
  //60
  grid[60] = [59, -1];
  //61
  grid[61] = [-1, 62];
  //62
  grid[62] = [61, -1];
}

function draw() {
  background(220);
  let gap = 40;

  translate(50, 50);
  for (let i = 0; i < 64; i++) {
    let y = gap * int(i / 8);
    let x = gap * (i % 8);
    ellipse(x, y, 3, 3);

    if (grid[i][0] > -1) {
      let y2 = gap * int(grid[i][0] / 8);
      let x2 = gap * (grid[i][0] % 8);
      line(x, y, x2, y2);
    }

    if (grid[i][1] > -1) {
      let y2 = gap * int(grid[i][1] / 8);
      let x2 = gap * (grid[i][1] % 8);
      line(x, y, x2, y2);
    }
  }
}