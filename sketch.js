function setup() {
  createCanvas(800,400);
 mrect= createSprite(100, 200, 50, 50);
 mrect.shapeColor="red"
 frect=createSprite(700, 200, 50, 50);
 frect.shapeColor="red"
}

function draw() {
  background(255,255,255);
  mrect.x=World.mouseX;
  mrect.y=World.mouseY;  
  if(mrect.x-frect.x<mrect.width/2+frect.width/2 &&
    frect.x-mrect.x<mrect.width/2+frect.width/2 &&
    mrect.y-frect.y<mrect.height/2+frect.height/2 &&
    frect.y-mrect.y<mrect.height/2+frect.height/2 )
  {
    mrect.shapeColor="green"
    frect.shapeColor="green"
  }
  else {
    mrect.shapeColor="red"
    frect.shapeColor="red"
  }
  drawSprites();
}