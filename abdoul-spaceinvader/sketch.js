function setup() {
    createCanvas(1000, 1000);
    
}
 
var x = 180;
var y = 180;
var xDirection = 5;  

function draw(){

background(30,144,255);
ellipse(x,y,80,80)


if(x>=1000-40){
        xDirection = -xDirection;
    }else if(x<=0+40){
        y = y + 100
        xDirection = -xDirection;
    }
    
    else if (x>=800){
    x = 800
 }
 x+=xDirection;

ellipse(x-100,y,80,80)

if(x>=1000-40){
        xDirection = -xDirection;
    }else if(x<=0+40){
        y = y + 100
        xDirection = -xDirection;
    }
    x+=xDirection;

}