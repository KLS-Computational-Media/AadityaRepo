//This is a multicolored interactive ellipse generator which produces ellipses with different colors and dimensions.


function setup() {
  createCanvas(500, 500);
}

function draw() {
  if(mouseIsPressed){
    fill(0);
  } else {
    fill(random(0,256),random(0,256),random(0,256))
  }
  ellipse(mouseX, mouseY, 20, random(0,500));
if(mouseX >500 || mouseY > 500){
  background(random(0,256),random(0,256),random(0,256));
}
 
  
  
}
