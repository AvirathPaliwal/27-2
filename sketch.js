
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var roof;
var bob,bob2,bob3,bob4,bob5;
var rope;
function preload()
{
	
}

function setup() {
	createCanvas(1000, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
   roof=new Roof(450,50,600,50);

   bob = new Bob (400,500,50);
   bob2 = new Bob (450,500,50);
   bob3 = new Bob (500,500,50);
   bob4 = new Bob (550,500,50);
   bob5 = new Bob (600,500,50);
   rope = new Rope(bob.body,roof.body,);
}



function draw() {
  rectMode(CENTER);
  background(155);
  rope.display();
  bob.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  roof.display();
  
  drawSprites();
  
}
function keyPressed() {
	if (keyCode === UP_ARROW) {
	Matter.Body.applyForce(bob.body, bob.body.position , { x : -50 , y : -50 } ) ;
   
   }
   }


