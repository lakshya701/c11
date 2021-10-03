
var trex ,trex_running;
var ground,groundimage
function preload(){
  trex_running=loadAnimation("trex1.png","trex3.png","trex4.png")
groundimage=loadImage("ground2.png")

}

function setup(){
  createCanvas(600,200)
  
  //create a trex sprite
  trex=createSprite(50,160,20,20);
  trex.addAnimation("running",trex_running)
  trex.scale=0.5
ground=createSprite(300,190,600,20)
ground.addImage("ground",groundimage)
}

function draw(){
  background("white")

  if(keyDown("space")){
    trex.velocityY=-14
  }
  trex.velocityY+=0.5
  trex.collide(ground)
  
   drawSprites()
}
