var grid = 50;
var width = 1366;
var carGroup1,logGroup1,grassGroup;
var grassHeight = 100;
var gameState = "play";
var carAnimation, logAnimation, playerAnimation;
var school;
var grass,road,gron;
var player;
var group;
var playerI,car1I,car2I,log1I;log2I;
function preload()
{
  car1I=loadImage("car1.png");
  car2I=loadImage("car2.png");
  log1I=loadImage("log1.png");
  log2I=loadImage("log2.png");
  playerI=loadImage("play.png");
}

function setup() {
  createCanvas(displayWidth,700);
  carGroup1 = new Group();
  logGroup1 = new Group();
  grassGroup=new Group();
  group=new Group();
   for(var i=0;i<6;i++){
    grass=createSprite(683,height-50-(i*400),width,grassHeight)
   grass.shapeColor="green";
   grassGroup.add(grass)
   
    if(i%2===0){
     road=createSprite(683,height-150-(i*400)-grassHeight,width,300)
     road.shapeColor="black";
     
    }
    if(i%2===1&&i<4){
      gron=createSprite(683,height-150-(i*400)-grassHeight,width,300)
      gron.shapeColor="blue";
    }
  }
  for(var i=0;i<40;i++){
    car=new Car(2);
    carGroup1.add(car.spt)
  }
  for(var i=0;i<40;i++){
    log=new Log(-2);
    logGroup1.add(log.spt)
  
  }
  player= new Player(width/2,-height-925);
}
function draw() {
  background("skyblue");
  player.movement();
    translate(+85,-(player.spt.y-height/2))
 
 
  
  for(i=1;i<logGroup1.length;i++){
    if(logGroup1[i].x<0){
      logGroup1[i].x=width;
    }
  }
  for(i=1;i<carGroup1.length;i++){
    if(carGroup1[i].x<0){
      carGroup1[i].x=width;
    }
  }
  if(carGroup1.isTouching(player.spt)){
    player.spt.x=width/2;
    player.spt.y=-height-925;
  }
  if(logGroup1.isTouching(player.spt)){
    player.spt.x=player.spt.x-0.01;
  }
  else if((player.spt.y>height-1550&&player.spt.y<height-1300)||(player.spt.y>height-850&&player.spt.y<height-500)||player.spt.y>height||player.spt.x<0||player.spt.x>width)
  {player.spt.x=width/2;
    player.spt.y=-height-925;}
  drawSprites();
}

 
  


