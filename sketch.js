var backgroundImg , bg;
var sam, samImg;
var invisible_ground;
var balloons, balloonsImg;





function preload(){
 backgroundImg = loadImage("assets/BackgroundImg.jpg");
 samImg = loadImage("assets/sam.png"); 
 balloonsImg = loadImage("assets/balloons.png");
}

function setup(){
 createCanvas(1500,600);
 
 bg = createSprite(750,300 , 30,40);
 bg.addImage(backgroundImg);
 bg.scale = 1.9

 sam = createSprite(250,560,40,40);
 sam.addImage(samImg);
 sam.scale = 0.5

 invisible_ground = createSprite(500,580,600,40)
 invisible_ground.visible = false
}

function draw(){
  background(0);

  sam.y = World.mouseY;
 
  sam.velocityY = sam.velocityY +0.2
  
  sam.collide(invisible_ground);

  spawnObstacles();

  drawSprites();
  
}

function spawnObstacles(){
 
  if(frameCount % 200 ===0 ){
    balloons = createSprite(1300,460,20,20);
    balloons.addImage(balloonsImg);
    balloons.scale = 0.3 
    balloons.velocityX = -2;
    balloons.y = random(200,500);
    balloons.lifetime = 500;
  }
 

}

