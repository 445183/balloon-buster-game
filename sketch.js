var Play=1;
var End=0;

var ground,groundImage;
var bow,bowImage;
var redBalloon1,redBalloon2,redBalloon3,redBalloon3,redBalloon4,redBalloon5,redBalloon6,redBalloon7,redBalloon8,redBalloon_image;
var blueBalloon1,blueBalloon2,blueBalloon3,blueBalloon4,blueBalloon5,blueBalloon6,blueBalloon_image;
var pinkBalloon1,pinkBalloon2,pinkBalloon3,pinkBalloon4,pinkBalloon_image;
var greenBalloon1,greenBalloon2,greenBalloon_image;
var arrow,arrowImage;
var playerscore=0;

function preload(){
 arrowImage=loadAnimation("arrow0.png");
  groundImage=loadAnimation("background0.png");
 bowImage=loadAnimation("bow0.png");
 redBalloon_image=loadAnimation("red_balloon0.png");
 blueBalloon_image=loadAnimation("blue_balloon0.png")  ;
 pinkBalloon_image=loadAnimation("pink_balloon0.png")  ;
 greenBalloon_image=loadAnimation("green_balloon0.png"); 
}

function setup() {
  createCanvas(400,400);
  
  if(playerscore<20){
  ground = createSprite(200,200,400,400);
  ground.addAnimation("ground",groundImage);
  ground.scale=1.5;  
    
  redBalloon1 = createSprite(57,90,7.5,7.5);
  redBalloon1.addAnimation("redBalloon",redBalloon_image);
  redBalloon1.scale=0.05;
  redBalloon1.velocityX=1;  
  redBalloon2 = createSprite(-54,90*2,7.5,7.5);
  redBalloon2.addAnimation("redBalloon",redBalloon_image);
  redBalloon2.scale=0.05;
    redBalloon2.velocityX=0.78;
  redBalloon3 = createSprite(82,90*3,7.5,7.5);
  redBalloon3.addAnimation("redBalloon",redBalloon_image);
  redBalloon3.scale=0.05;
    redBalloon3.velocityX=0.87;
  redBalloon4 = createSprite(-17.97,90*4,7.5,7.5);
  redBalloon4.addAnimation("redBalloon",redBalloon_image);
  redBalloon4.scale=0.05;
    redBalloon4.velocityX=1.27;
   
  bow = createSprite(350,180,7.5,7.5);
  bow.addAnimation("bow",bowImage);
  
  arrow = createSprite(350,185,2.5,2.5);
  arrow.addAnimation("arrow",arrowImage);
  arrow.scale=0.2;
  
  blueBalloon1 = createSprite(-180,90*2,7.5,7.5);
  blueBalloon1.addAnimation("blueBalloon",blueBalloon_image)
  blueBalloon1.scale=0.05;
    blueBalloon1.velocityX=0.97;
  blueBalloon2 = createSprite(16,90*3,7.5,7.5);
  blueBalloon2.addAnimation("blueBalloon",blueBalloon_image)
  blueBalloon2.scale=0.05;
    blueBalloon2.velocityX=0.79;
  blueBalloon3 = createSprite(-100,90*4,7.5,7.5);
  blueBalloon3.addAnimation("blueBalloon",blueBalloon_image)
  blueBalloon3.scale=0.05;
    blueBalloon3.velocityX=0.7;
    
  pinkBalloon1 = createSprite(-290,90*3,7.5,7.5);
  pinkBalloon1.addAnimation("pinkBalloon",pinkBalloon_image);
  pinkBalloon1.scale=0.6;
    pinkBalloon1.velocityX=0.75;
  pinkBalloon2 = createSprite(60,90*4,7.5,7.5);
  pinkBalloon2.addAnimation("pinkBalloon",pinkBalloon_image);
  pinkBalloon2.scale=0.6;
    pinkBalloon2.velocityX=0.58;
  pinkBalloon3 = createSprite(-300,90*2,7.5,7.5);
  pinkBalloon3.addAnimation("pinkBalloon",pinkBalloon_image);
  pinkBalloon3.scale=0.6;
    pinkBalloon3.velocityX=0.96;
  
  greenBalloon1=createSprite(-390,90*2,7.5,7.5);
  greenBalloon1.addAnimation("greenBalloon",greenBalloon_image);
  greenBalloon1.scale=0.045;
    greenBalloon1.velocityX=0.69;
  greenBalloon2=createSprite(20,90*4,7.5,7.5);
  greenBalloon2.addAnimation("greenBalloon",greenBalloon_image);
  greenBalloon2.scale=0.045;
    greenBalloon2.velocityX=0.95;
  balloonGroup=createGroup(redBalloon1,redBalloon2,redBalloon3,redBalloon4,blueBalloon1,blueBalloon2,blueBalloon3,pinkBalloon1,pinkBalloon2,pinkBalloon3,greenBalloon1,greenBalloon2);  
}
}
function draw() {
  if(playerscore<12){
    gameState=Play;
  }
  if(playerscore===12){
    gameState=End;
  }
  ground.velocityX=-1.5;
  
  if(ground.x<165){
    ground.x=200;
  }
  if(keyDown("enter")){
    arrow.velocityX=-5;
  }
  if(arrow.isTouching(redBalloon1)){
    redBalloon1.destroy();
    arrow.x=350;
    arrow.velocityX=0;
    playerscore=playerscore+1;
  }
  if(arrow.isTouching(redBalloon2)){
    redBalloon2.destroy();
    arrow.x=350;
    arrow.velocityX=0;
    playerscore=playerscore+1;
  }
  if(arrow.isTouching(redBalloon3)){
    redBalloon3.destroy();
    arrow.x=350;
    arrow.velocityX=0;
    playerscore=playerscore+1;
  }
  if(arrow.isTouching(redBalloon4)){
    redBalloon4.destroy();
    arrow.x=350;
    arrow.velocityX=0;
    playerscore=playerscore+1;
  }
    
  if(arrow.isTouching(blueBalloon1)){
    blueBalloon1.destroy();
    arrow.x=350;
    arrow.velocityX=0;
    playerscore=playerscore+1;
  }
  if(arrow.isTouching(blueBalloon2)){
    blueBalloon2.destroy();
    arrow.x=350;
    arrow.velocityX=0;
    playerscore=playerscore+1;
  }
  if(arrow.isTouching(blueBalloon3)){
    blueBalloon3.destroy();
    arrow.x=350;
    arrow.velocityX=0;
    playerscore=playerscore+1;
  }
  if(arrow.isTouching(pinkBalloon1)){
    pinkBalloon1.destroy();
    arrow.x=350;
    arrow.velocityX=0;
    playerscore=playerscore+1;
  }
  if(arrow.isTouching(pinkBalloon2)){
    pinkBalloon2.destroy();
    arrow.x=350;
    arrow.velocityX=0;
    playerscore=playerscore+1;
  }
  if(arrow.isTouching(pinkBalloon3)){
    pinkBalloon3.destroy();
    arrow.x=350;
    arrow.velocityX=0;
    playerscore=playerscore+1;
  }
  if(arrow.isTouching(greenBalloon1)){
    greenBalloon1.destroy();
    arrow.x=350;
    arrow.velocityX=0;
    playerscore=playerscore+1;
  }
  if(arrow.isTouching(greenBalloon2)){
    greenBalloon2.destroy();
    arrow.x=350;
    arrow.velocityX=0;
    playerscore=playerscore+1;
  }
  bow.y=mouseY; 
  
  arrow.y=bow.y+5;
  
  drawSprites();
  
  if(playerscore<50){
   fill("red");
   textSize(20);
   
  }
  if(gameState===Play){
    fill("red");
    textSize(20);
    text("Score: "+playerscore,167.5,377.5); 
  } 
  if(gameState===End){
    fill("black");
    textSize(30);
    text("You Win !",135,180);
  }
  
  balloonGroup.setLifetimeEach(100);
}

