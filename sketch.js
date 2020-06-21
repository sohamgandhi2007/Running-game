var soham;
var boyImage;

function preload() {
boyImage=loadImage("images/boy.png")  
}

function setup() {
  createCanvas(800,500);
  soham=createSprite(400,400,50,50);
  soham.addImage(boyImage)
  soham.scale=0.2
}

function draw() {
  
  if(keyDown("Up_Arrow")){
    soham.velocityY=-5
  }

if(keyDown("Down_Arrow")){
  soham.velocityY=5
}

if(keyDown("left_Arrow")){
soham.velocityX=-5
}

if(keyDown("right_Arrow")){
soham.velocityX=5
}

  background(0);  
  drawSprites();
}