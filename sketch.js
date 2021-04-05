var car, wall;
var speed,weight;

function setup() {
  createCanvas(1600,400);
  speed=random(50,70);
  weight=random(400,1500);
  car=createSprite(50, 200, 50, 50);
  car.velocityX=speed;
  car.shapeColor="white";

  wall=createSprite(1400,200,20,400);
  wall.shapeColor="white";
}

function draw() {
  background(0);  
  var deformation=0.5*weight*speed*speed/22500;
  console.log(deformation);
  car.collide(wall);
  if(deformation>180){
    car.shapeColor=('red');
  }
  if(deformation<180  && deformation>100){
    car.shapeColor=('yellow');
  }
  if(deformation<100){
    car.shapeColor=('green');
  }
  drawSprites();
}
