function setup() {
  createCanvas(800, 800);
  background(255);

  int x = 0;
  while (x < 800) {
    randomRectangle();
    x++;
  }
}

function randomRectangle() {
  //for random colors and sizes
  fill(random(256), random(256), random(256));
  rect(random(800), random(800), random(150), random(150));
  
//remnants of the code of my failed attempt to det the set color rectangles
//  while ( = 0) {
//    fill(255);
//    rect(random(800), random(800), random(150), random(150));
//  }
//  while (y = 1) {
//    fill(0);
//    rect(random(800), random(800), random(150), random(150));
//  }
//  while (y = 2) {
//   fill(255, 0, 0);
//    rect(random(800), random(800), random(150), random(150));
//  }
//  while (y = 3) {
//    fill(0, 255, 0);
//    rect(random(800), random(800), random(150), random(150));
//  }
//  while (y = 4) {
//    fill(0, 0, 255);
//    rect(random(800), random(800), random(150), random(150));
//  }
}








/*let DIRT = 0;
let FIRE = 1;
let BURNT = 2;
let TREE = 3;




//land plots[];

function setup() {
  // put setup code here
createCanvas(500, 300);
  setupLand(20, 50);
 frameRate(1);
}

function draw() {
  // put drawing code here
    drawLands();
  liveFire();
}

function setupLand(numPlots, fertility) {
  let plotSize = width/numPlots;
  let plots = new Land(numPlots);
  for (int i = 0; i < plots.length; i++) {
    let type;
    if (int( random(100)) < fertility) {
      type = TREE;
    } else {
      type = DIRT;
    } 
    plots[i] = new Land(i * plotSize, 0, plotSize, type);

    if (plots[i].x == 0) {
      plots[i].state = FIRE;
    }
  }
}

function liveFire() {
  plots[0].updateState(DIRT);
  for (int i = 1; i < plots.length; i++) {
    plots[i].updateState(plots[i-1].state);
    plots[i].changeState();
  }
}

 function drawLands() {
  for (int i = 0; i < plots.length; i++) {
    plots[i].display();
  }
}

//---------------------------------------------------------------------------------------------------------------------

class Land { 

  constructor( lx, ly, size, lstate) {
    this.x = lx;
    this.y = ly;
    this.size = size;
    this.state = lstate;
  }

  display() {
    let c = color(255);
    if (this.state == DIRT) {
      c = color('#311A0A');
    } else if (this.state == FIRE) {
      c = color('#FF0000');
    } else if (this.state == BURNT) {
      c = color('#B92727');
    } else if (this.state == TREE) {
      c = color('#12DE21');
    }
    stroke(0);
    //stroke(c);
    fill(c);
    square(x, y, size);
    stroke(255);
    fill(255);
  }

  updateState(neighborState) {
    if (neighborState == FIRE && this.state == TREE) {
      this.nextState = FIRE;
    } else if (this.state == FIRE) {
      this.nextState = BURNT;
    } else {
     this.nextState = this.state; 
    }
  }
  
  changeState() {
   this.state = this.nextState; 
  }
  
}
*/
