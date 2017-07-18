function setup() {
    createCanvas(1000, 1000);
    background(100);
    
    s = "Please type the sentence below";
    fill(1000);
    text(s, 500, 50, 50, 800);

}

var value = 0;
function draw() {
  fill(value);
  rect(25, 25, 50, 50);
}
function keyTyped() {
  if (key === 'a') {
    value = 255;
  } else if (key === 'b') {
    value = 0;
  }
  
}