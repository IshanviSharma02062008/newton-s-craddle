var Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function setup() {
	var canvas = createCanvas(800, 700);

	engine = Engine.create();
  world = engine.world;
  
	Roof = new roof(400,300,500,20);

  bobObj1 = new Bob(300,600,25);
  bobObj2 = new Bob(350,600,25);
  bobObj3 = new Bob(400,600,25);
  bobObj4 = new Bob(450,600,25);
  bobObj5 = new Bob(450,600,25);
  bobObj5 = new Bob(500,600,25);




  rope1 = new rope(bobObj1.body, Roof.body, -50*2,0);
  rope2 = new rope(bobObj2.body, Roof.body, -25*2,0);
  rope3 = new rope(bobObj3.body, Roof.body, 0*2,0);
  rope4 = new rope(bobObj4.body, Roof.body, 25*2,0);
  rope5 = new rope(bobObj5.body, Roof.body, 50*2,0);
   

	Engine.run(engine);
}

function draw() {

	
  rectMode(CENTER);
  background(255);

    //ellipseMode(RADIUS);
   //ellipse(bobObj1.body.position.x,bobObj1.body.position.y+25,25,25);
  //ellipse(bobObj2.body.position.x,bobObj2.body.position.y+25,25,25);
 //ellipse(bobObj3.body.position.x,bobObj3.body.position.y+25,25,25);
//ellipse(bobObj4.body.position.x,bobObj4.body.position.y+25,25,25);
//ellipse(bobObj5.body.position.x,bobObj5.body.position.y+25,25,25);
  
  Roof.display();

  bobObj1.display();
  bobObj2.display();
  bobObj3.display();
  bobObj4.display();
  bobObj5.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

   drawSprites();
}

function keyPressed() {
  if (keyCode === UP_ARROW) {

    Body.applyForce(bobObj1.body,bobObj1.body.position,{x:-100, y:-100});

  }
}



