
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var rect1,rect2,rect3
function preload()
{
	
}

function setup() {
	createCanvas(800, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground=new Ground(400,390,800,20)
rect1=new Ground(600,372,100,20)
rect2=new Ground(540,330,20,100)
rect3=new Ground(660,330,20,100)
ball=new Ball(50,200,20)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
  rect1.display();
  rect2.display();
  rect3.display();
  ball.display();
  drawSprites();
 
}
function keyPressed(){
	if(keyCode ===UP_ARROW){
		Matter.Body.applyForce(ball.body,ball.body.position,{x:50,y:-60})
	}
}



