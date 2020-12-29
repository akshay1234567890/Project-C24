
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var dustbin1,dustbin2,dustbin3
var paper
var ground


function preload()
{

}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;	

	ground = new DustbinClass(790,700,10,10)


	Engine.run(engine);
  
}

	
function draw() {
  rectMode(CENTER);
  background(100);
  ground.display();
  
  drawSprites();
 
}		

	

