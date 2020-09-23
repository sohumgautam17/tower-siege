const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var platform, box1, box2, box3, box4, box5, box6, box7, box8, box9, box10, box11, box12, box13, box14, box15;
var polygon, slingshot;

var gameState = "onSling"

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
 
  platform = new Ground(350, 300, 180, 20);

  box1 = new Box(350, 275 , 30, 30);
  box2 = new Box(380, 275 , 30, 30);
  box3 = new Box(320, 275 , 30, 30);
  box4 = new Box(410, 275 , 30, 30);
  box5 = new Box(290, 275 , 30, 30);

  box6 = new Box(365, 245 , 30, 30);
  box7 = new Box(335, 245 , 30, 30);
  box8 = new Box(395, 245 , 30, 30);
  box9 = new Box(305, 245 , 30, 30);

  box10 = new Box(350, 215 , 30, 30);
  box11 = new Box(380, 215 , 30, 30);
  box12 = new Box(320, 215 , 30, 30);

  box13 = new Box(365, 185 , 30, 30);
  box14 = new Box(335, 185 , 30, 30);

  box15 = new Box(350, 155 , 30, 30);

  polygon = new Polygon(25, 50, 40, 100);

  slingshot = new SlingShot(polygon.body,{x:50, y:100});


}

function draw() {
  background("grey");  
  drawSprites();
  platform.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();

  box6.display();
  box7.display();
  box8.display();
  box9.display();

  box10.display();
  box11.display();
  box12.display();

  box13.display();
  box14.display();

  box15.display();

  polygon.display();

  slingshot.display();

}

function mouseDragged(){
    
  if(gameState !== "launched"){
      Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
  }
}


function mouseReleased(){
  slingshot.fly();
  gameState = "launched";
}

function keyPressed(){
  if(keyCode === 32){
      slingshot.attach(polygon.body);
  }
}