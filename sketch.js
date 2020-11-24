var car, wall;
var speed,weight;

function setup() {
  createCanvas(1600,400);
  speed = random(55,90);
  weight = random(400,1500);
  car = createSprite(50,200,50,50);
  car.shapeColor = "cyan";
  car.velocityX = speed;
  wall = createSprite(1200,200,60,height/2);
  wall.shapeColor = "white";
}

function draw() {
  background(0);  
  console.log(wall.x-car.x)
  if(wall.x-car.x < car.width/2 + wall.width/2) {
    car.velocityX = 0;
    var deformation = 0.5*weight*speed*speed/22500;
    if (deformation>180){
      car.shapecolor = "red";
    }
    if (deformation<180 && deformation>100){
      car.shapeColor = "yellow";
    }
    if (deformation<100){
      car.shapeColor = "green";
    }
  }

  drawSprites();
}
