
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;
var dustbinObj, paperObject,groundObject	
var world;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	paperObject= new paper(200,250,70);
	groundObject= new ground(width/2,670,width,20);
	dustbinObj= new dustbin(1200,650);
	chain = new chain(paperObject.body, {x: 100, y:400});


	var render = Render.create({
	  element: document.body,
	  engine: engine,
	  options: {
	    width: 1600,
	    height: 700,
	    wireframes: false
	  }
	});

	Engine.run(engine);
	Render.run(render);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
 
  
  paperObject.display();
  groundObject.display();
  dustbinObj.display();
  chain.display();

  
  
 
  
  
 
}
function mouseDragged(){
    Matter.Body.setPosition(paperObject.body,{x: mouseX, y: mouseY});
}

function mouseReleased() {
	chain.fly();
}





