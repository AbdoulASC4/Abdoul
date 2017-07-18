function setup(){
    createCanvas(1000,1000);

}

var x = Math.random()*700
var y = Math.random()*700

function draw() { 
    background(225);
    ellipse(x, y, 55, 55); 
    while (x<699) {
        x++;
    }
    while (y<699) {
        y-1+;
    }
    
   

