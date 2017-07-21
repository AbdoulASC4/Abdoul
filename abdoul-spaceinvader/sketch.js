var x = 0;
var y = 250;
var xspeed = 9;
var yspeed = 10;

function setup() {
    createCanvas(1000, 1000);
    
}
    
function draw(){
//distance from center of the screen
    background(0,191,255);
      ellipse (x, y, 55, 55);
    

    //bouncing horizontally
      x = x + xspeed;
      
     if (x > 1000 || x < 0)  {
         xspeed = -xspeed;
      }

    //bouncing veritcally
      y = y + yspeed;

    if (y > 800 || y < 0) {
           yspeed = -yspeed;
      }
   
}