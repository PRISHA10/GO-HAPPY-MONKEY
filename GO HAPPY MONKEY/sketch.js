
var monkey , monkey_running
var banana ,bananaImage, obstacle, stoneImage
var FoodGroup, obstacleGroup
var score
var invisibleGround


function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  stoneImage = loadImage("obstacle.png");
 
}



function setup() {
    createCanvas(500,500);
  monkey=createSprite(80,315,20,20)
monkey.addAnimation("moving",monkey_running)  
monkey.scale=0.1

 ground=createSprite(400,350,900,10) 
ground.velocityX=-4;
ground.x=ground.width/2
console.log(ground.x);
ground.shapeColor="brown"  

   invisibleGround = createSprite(400,350,900,10);
  invisibleGround.visible = false;
  
  
  monkey.setCollider("rectangle",0,0,monkey.width,monkey.height);
  monkey.debug = true
  
  score = 0;
}


function draw() {
background("white");
stroke("black")
textSize(15)  
fill("black")  
text("SURVIVALTIME: "+ 12, 320,50);
  
  if(ground.x<0){
    ground.x=ground.width/2
  }
 
  if(keyDown("space")&& monkey.y >= 100) {
        monkey.velocityY = -12;
  }

 monkey.velocityY = monkey.velocityY + 0.8
 monkey.collide(invisibleGround);
   obstacleGroup();
   FoodGroup()
  drawSprites()
  
function obstacleGroup(){
  if (frameCount % 200 === 0){
  var  obstacle = createSprite(400,330,10,40);
    obstacle.addImage(stoneImage)
    obstacle.scale=0.1
    obstacle.velocityX=-2
}
}
   function FoodGroup(){
  if (frameCount% 100 === 0){
    var banana = createSprite(400,165,10,30)
    banana.addImage(bananaImage)
    banana.velocityX=-2
    banana.scale=0.1
  }  
  }
}
