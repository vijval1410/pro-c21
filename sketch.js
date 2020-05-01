var wall,thickness;
var bullet,speed,weight;
fill("white");

function setup(){
  createCanvas (1600,400);
  thickness = random(22,83);
  wall = createSprite(1200,200,thickness,height/2);
  fill(80,80,80);
  bulletSpeed = random(223,321);
  bulletWeight = random(30,52);


  
function draw(){
  

  
  if(hasCollided(bullet,wall)){
    bullet.velocityX = 0;
    var  damage = 0.5 * bulletWeight * bulletSpeed * bulletSpeed/ (thickness * thickness * thickness );
if(damage>10){

  wall.shapeColor = color (255,0,0);

}
if (damage<10){

  wall.shapeColor = color(0,255,0);

}
  }
}
}
function hasCollided(bullet,wall){
  bulletRightEdge = bullet.x + bullet.width;
  WallLeftEdge = wall.x;
  if(bulletRightEdge>=WallLeftEdge)
  {
return true;
  }
  return false;
}
