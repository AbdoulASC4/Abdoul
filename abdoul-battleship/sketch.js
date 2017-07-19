var circles = [];
var x = 100;
var y = 100;
for(i = 0; i < 2; i++) {
    circles[i] = {
        drawGrid: function() {
            for (var x = 100; x <= 1000; x += 100) {
                for (var y = 100; y <=1000; y += 100) {
                    fill(0);
                    ellipse(x,y,20,20);
                }
            }
        }
    }
}

function setup() {
    createCanvas(485,485);
    background(color(0, 0, 255));
}

function draw() {
    for(i = 0; i < 2; i++) {
        circles[i].drawGrid();
    }

   // if (mouseIsPressed)
   
  //else if(){

  //}

  //else{

  //}
    

  
  
  //print(mouseIsPressed);
}
