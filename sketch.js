//h.w - load images
var ruler,ground,bg; 
var rulerImg,bgImg;


function preload(){
  rulerImg= loadImage("ruler.png");
  bgImg= loadImage("bg.jpg");
}


function setup() {
  createCanvas(900,670);
  ruler = createSprite(400, 580, 50, 50);
  ruler.addImage("ruler",rulerImg);
  ruler.scale = 0.31;
  ground = createSprite(450,660,970,20);
  ground.shapeColor="brown";
 
}


function draw() {
  background(0);  
  
  if(keyDown(RIGHT_ARROW)){
    ruler.x = ruler.x+5;
  }

  if(keyDown(LEFT_ARROW)){
    ruler.x = ruler.x-5;
  }

  if(keyDown(UP_ARROW)){
    ruler.y = ruler.y-5;
  }

  if(keyDown(DOWN_ARROW)){
    ruler.y = ruler.y+5;
  }

  ruler.collide(ground);

spawnEnemy();
spawnPlaces();
  drawSprites();
}

function spawnEnemy(){
  if(frameCount % 80 === 0){
   var enemy = createSprite(900,510,50,50);
    enemy.shapeColor = "red";
    enemy.velocityX = -6;
  
  }
}

function spawnPlaces(){
  if(frameCount % 100 === 0){
    var places = createSprite(Math.round(random(100,900)),Math.round(random(300,600)),30,30);
    places.shapeColor = "green";
    places.velocityX = -7;
  }
}