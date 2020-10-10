
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var chain1,chain2,chain3,chain4,chain5;
var ball1,ball2,ball3,ball4,ball5;
var world, engine, constraint;
var Chainbase;
var ground;


function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);

	engine = Engine.create();
	world = engine.world;

	

	//Create the Bodies Here.
	ball1 = new Ball(720,400,20);
	ball2 = new Ball(760,400,20);
	ball3 = new Ball(800,400,20);
	ball4 = new Ball(840,400,20);
	ball5 = new Ball(880,400,20);

	Chainbase = new ChainBase(800,200,250,20);
	
	chain1 = new Chain(ball1.body,Chainbase.body,-ball1.radius*4,0);
	chain2 = new Chain(ball2.body,Chainbase.body,-ball2.radius*2,0);
	chain3 = new Chain(ball3.body,Chainbase.body,0,0);
	chain4 = new Chain(ball4.body,Chainbase.body,-ball4.radius*-2,0);
	chain5 = new Chain(ball5.body,Chainbase.body,-ball5.radius*-4,0);



	Engine.run(engine);
  
}


function draw() {
Engine.update(engine);
  rectMode(CENTER);
  background(225);

  Chainbase.display();
  chain1.display();
  chain2.display();
  chain3.display();
  chain4.display();
  chain5.display();
  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();


  
  drawSprites();
 
}


function keyPressed(){

	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball1.body,ball1.body.position,{x:-90,y:90});
	}
}




