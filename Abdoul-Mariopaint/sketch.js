function setup() {
    createCanvas(1000,1000);
    background(100)
}
function mouseDragged() {
  var c = color(Math.random()*400,Math.random()*400,Math.random()*400);
    fill(c);
    noStroke();
  ellipse(floor(mouseX), mouseY, Math.random()*50,Math.random()*50);
  return false;
}
function mouseDragged(){
    var c = color(Math.random()*400,Math.random()*400,Math.random()*400);
    fill(c);
    noStroke();
    rect(mouseX, mouseY, Math.random()*25, Math.random()*25);
    return false;
}