var fixedRect,movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 200, 100, 100);
  movingRect = createSprite(400, 200, 50, 50);

  gameObject1 = createSprite(100,100,100,100);
  gameObject2 = createSprite(200,200,100,100);
  gameObject2 = createSprite(300,300,100,100);
  gameObject2 = createSprite(400,400,100,100);
}

function draw() {
  background(255,255,255);  

  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  
  if(isTouching(movingRect,gameObject1)){
    gameObject1.shapeColor = "blue";
    movingRect.shapeColor = "blue";

  }
  else{
    gameObject1.shapeColor = "green";
    movingRect.shapeColor = "green";
  }
  
  drawSprites();
}

function bounceOff(){
 
  function isTouching(object1,object2){
    if(object1.x - object2.x < object2.width/2 + object1.width/2
      && object2.x - object1.x < object2.width/2 + object1.width/2
      && object1.y - object2.y < object2.height/2 + object1.height/2
      &&object2.y - object1.y < object2.height/2 + object1.height/2){
        return true;
  }
  else{
    return false;
  }
  }




}