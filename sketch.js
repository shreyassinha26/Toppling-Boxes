const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine , world;
var launcher , hexagon;
var ground1 , ground2 , ground3;
//var box1 , box2 , box3
var box1 , box2 , box3 , box4 , box5, box6,box7,box8 , box9 , box10 , box11 , box12 , box13 , box14 , box15;
var box16, box17 , box18 , box19 , box20 , box21 , box22 , box23 , box24 , box25 , box26 , box27 , box28,box29;
var box30,box31,box32,box33,box34,box35,box36,box37,box38,box39,box40,box41,box42,box43,box44,box45,box46,box47;
var box48 , box49; 
var boxArray = {box1 , box2 , box3 , box4 , box5, box6,box7,box8 , box9 , box10 , box11 , box12 , box13 , box14 , box15 , box16, box17 , box18 , box19 , box20 , box21 , box22 , box23 , box24 , box25 , box26 , box27 , box28 , box29,box30,box31,box32,box33,box34,box35,box36,box37,box38,box39,box40,box41,box42,box43,box44,box45,box46,box47 , box48 , box49};
var index;





function setup() {
  createCanvas(1600,600);
  engine = Engine.create();
  world = engine.world;
  hexagon = new Polygon(200 , 300 ,6, 30);
  launcher = new Slingshot(hexagon.body , {x:300 , y:300});
  ground1 = new Ground(800 , 595 , 1600 , 10);
  ground2 = new Ground(1000 , 585 , 325 , 10);
  ground3 = new Ground(1400 , 405 , 125 , 10);

  index = 0;
  for(var i = 0;i<3;i++){
    for(var j = 0-i;j<=i;j++){
      boxArray[index] = new Box(1400 + (25*j) , 225 + (50*i));
      index++;
    }
  }
  for(var i = 0;i<7;i++){
    for(var j = 0-i;j<=i;j++){
      boxArray[index] = new Box(1000 + (25*j) , 250 + (50*i));
      index++;
    }
  }


}




function draw() {
  background(0 , 200 , 240); 
  Engine.update(engine); 
  angleMode(RADIANS);
  hexagon.display();
  launcher.display();
  ground1.display();
  ground2.display();
  ground3.display();
  for(var i = 0;i<index;i++){
    boxArray[i].display();
  }
  drawSprites();
}



function mouseDragged(){
  if(mouseX<280 ){
    Matter.Body.setPosition(hexagon.body , {x:mouseX , y:mouseY});

  }
}



function mouseReleased(){
  Matter.Body.setStatic(hexagon.body , false);
}
function keyPressed() {
  if(keyCode == 32){
    Matter.Body.setPosition(hexagon.body , {x:200 , y:  300});
    Matter.Body.setStatic(hexagon.body , true);
    launcher.setA(hexagon.body);
    //launcher.chain.bodyA = hexagon.Body;
    keyCode = null;
  }
}