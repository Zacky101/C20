
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var ball;
var ground;
var rock;
var box;

function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  
  var box_options = {
    restitution: 0.25,
    frictionAir: 0.15
  }

  var rock_options = {
    restitution: 0.1,
    frictionAir: 0

  }

   var ball_options = {
    restitution: 0.95,
    frictionAir:0.1
  }
   
   var ground_options ={
     isStatic: true
   };
  

  ground = Bodies.rectangle(200,390,400,20,ground_options);
  World.add(world,ground);

  ball = Bodies.circle(100,70,20,ball_options);
  World.add(world,ball);
  
  rock = Bodies.circle(300,10,20,rock_options);
  World.add(world,rock);

  box = Bodies.rectangle(200,10,50,50,box_options);
  World.add(world,box)

  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  Engine.update(engine);
  
  fill("brown")
  rect(box.position.x,box.position.y,50,50)
  fill("grey")
  ellipse(rock.position.x,rock.position.y,20)
  fill("blue")
  ellipse(ball.position.x,ball.position.y,20);
  fill("white")
  rect(ground.position.x,ground.position.y,400,20);
 
}

