
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
//const Body = Matter.Body;

let engine;
let world;
var ground1,ground2,ground3,groud4;
var b1,b2;
var ball;
function setup()
{
  createCanvas(400,400);
engine=Engine.create();
world=engine.world;

var balloptions={
  restitution:1.0
}
ball=Bodies.circle(200,10,30,balloptions);
World.add(world,ball);
ground1=new Ground(200,390,400,20);
ground2=new Ground(390,200,20,400);
ground3=new Ground(10,200,20,400);
ground4=new Ground(200,10,400,20);
b1=createImg("cloud.png")
b1.position(220,30)
b1.size(60,60);
b1.mouseClicked(vforce);
b2=createImg("cloud.png")
b2.position(20,30)
b2.size(60,60);
b2.mouseClicked(hforce);
}

function draw() 
{
  background(51);
 Engine.update(engine);
 ellipseMode(RADIUS);
 ellipse(ball.position.x,ball.position.y,30,30);
 ground1.display();
 ground2.display();
 ground3.display();
 ground4.display();
}
function vforce(){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.02})
}
function hforce(){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0.02,y:0})
}
