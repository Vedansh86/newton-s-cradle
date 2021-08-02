const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;

var roof;
var bob1,bob2,bob3,bob4,bob5;
var rope1,rope2,rope3,rope4,rope5;
//Create multiple bobs, mulitple ropes varibale here


function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	var roof_options={
		isStatic:true			
	}

	roof = Bodies.rectangle(400,100,230,20,roof_options);
    World.add(world,roof);

	bobDiameter=40;
	startBobPositionX=width/2;
	startBobPositionY=height/4+500;
	bob1=new bob(startBobPositionX-bobDiameter*2,startBobPositionY,bobDiameter);
	bob2=new bob(startBobPositionX-bobDiameter,startBobPositionY,bobDiameter);
	bob3=new bob(startBobPositionX,startBobPositionY,bobDiameter);
	bob4=new bob(startBobPositionX+bobDiameter,startBobPositionY,bobDiameter);
	bob5=new bob(startBobPositionX+bobDiameter*2,startBobPositionY,bobDiameter);

	rope1=new rope(bob1.body,roof.body,-bobDiameter*2, 0)
	rope2=new rope(bob2.body,roof.body,-bobDiameter*1, 0)
	rope3=new rope(bob3.body,roof.body,0, 0)
	rope4=new rope(bob4.body,roof.body,bobDiameter*1, 0)
	rope5=new rope(bob5.body,roof.body,bobDiameter*2, 0)

	Engine.run(engine);
	
  
}

function draw() {
  rectMode(CENTER);
  background("#99004d");

  rect(roof.position.x,roof.position.y,230,20);

  //call display() to show ropes here
  rope1.display()
  rope2.display()
  rope3.display()
  rope4.display()
  rope5.display()	
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  
  //create ellipse shape for multiple bobs here

 
}

//Write keyPressed function and apply force on pressing up_arrow key on the first bob.
function keyPressed() {
	if (keyCode ===  UP_ARROW) {
	  Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-50,y:-45});
	}
}