function setup(){
    createCanvas(2000,2000);
    background(225);
}

var x = 180;
var y = 180;
var xspeed = 9;
var yspeed = 10;


function setup() {
  createCanvas(windowWidth, windowHeight);
  background (25);
}

function draw() {

    //distance from center of the screen
    var d = dist(windowWidth/12, windowHeight/12, 1, 1);
    background(225);
      fill ("white");
      ellipse (x, y, d, d);
    

     //bouncing horizontally
      x = x + xspeed;
      
      if (x > windowWidth || x < 0)  {
         xspeed = -xspeed;
      }

     //bouncing veritcally
      y = y + yspeed;

     if (y > windowHeight || y < 0) {
           yspeed = -yspeed;
      }
   
   var rect {x:5, y:50, width:15, height:150};
   var rectz {x:1300, y:50, width:15, height:150};
   
   function keyPressed() {
        if (keyCode === UP_ARROW) {
        rect.x = rect.x + 1
        rect(rect.x,rect.y,rect.width,rect.height)
  
  }     else if (keyCode === Down _ARROW) {
        rect.x = rect.x + 1
        rect(rect.x,rect.y,rect.width,rect.height)
  }
}
   
   
   
   
}

