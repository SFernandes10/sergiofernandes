
var x, y, t, v;
// t - tamanho v- Velocidade
function setup() 
{
  createCanvas (windowWidth, windowHeight);
  x = width/2;
  y = height/2;
  t = 100;
  vX = 7;
  vY = vX;

}


function draw()
{
  background(255, 50); //background + Transparência


  if(x+t/2 > width || x-t/2 < 0)
  {
   //vX = vX*-1;
 vX*=-1
 fill (random (255), random(255), random(255));
  }
 // if (x<0) {vY = vY*-1} 
 if(y+t/2 > height || y-t/2 < 0)
 {
  //v = v*-1;
vY*=-1
fill (random (255), random (255), random (255));
 }
 //x = x + v

x+=vX;

y+=vY;
 ellipse(x, y, t, t);
}


function windowResized() 
{
  resizeCanvas (windowWidth, windowHeight);
}
