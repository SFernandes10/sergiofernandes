
var x, y, t, v;

// t - tamanho v- Velocidade
function setup() 
{
  createCanvas (windowWidth, windowHeight);

}


function draw()
{ background(255);
  
 
  if (mouseX>x/2 && mouseX<y)
  {
    Fill(0);
  }
  else
  {
    noFill();
  }
  stroke(255, 0, 0);
  line(width/2, 0, width/2, height);

}


function windowResized() 
{
  resizeCanvas (windowWidth, windowHeight);
}
