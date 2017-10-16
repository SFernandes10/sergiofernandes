
var frase;
// t - tamanho v- Velocidade
function setup() 
{
  createCanvas (windowWidth, windowHeight);
 frase = "Olá mundo!!!!";
}


function draw()
{
  background(255);
  textStyle(ITALIC);
  textAlign(CENTER, CENTER);
  textFont("Modak");
  textSize(100);
  textLeading(200);
 text(frase, width/2, height/2, 50);
}


function windowResized() 
{
  resizeCanvas (windowWidth, windowHeight);
}
