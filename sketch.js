int DIRT = 0;
int FIRE = 1;
int BURNT = 2;
int TREE = 3;

Land plots[];

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

function setupLand(int numPlots, float fertility) {
  int plotSize = width/numPlots;
  plots = new Land[numPlots];
  for (int i = 0; i < plots.length; i++) {
    int type;
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
  int x, y;
  int size;
  int state;
  int nextState;

  Land(int lx, int ly, int lsize, int lstate) {
    x = lx;
    y = ly;
    size =lsize;
    state = lstate;
  }

  function display() {
    color c = color(255);
    if (state == DIRT) {
      c = color(#311A0A);
    } else if (state == FIRE) {
      c = color(#FF0000);
    } else if (state == BURNT) {
      c = color(#B92727);
    } else if (state == TREE) {
      c = color(#12DE21);
    }
    stroke(0);
    //stroke(c);
    fill(c);
    square(x, y, size);
    stroke(255);
    fill(255);
  }

  void updateState(int neighborState) {
    if (neighborState == FIRE && this.state == TREE) {
      this.nextState = FIRE;
    } else if (this.state == FIRE) {
      this.nextState = BURNT;
    } else {
     nextState = state; 
    }
  }
  
  void changeState() {
   state = nextState; 
  }
  
}
