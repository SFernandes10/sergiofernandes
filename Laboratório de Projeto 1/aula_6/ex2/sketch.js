
var t, n, numLinhas, numColunas, escolheForma; //Numero de objectos
function setup() 
{
  createCanvas (windowWidth, windowHeight);
 
 n = 50;
 frameRate(1);
  

 
}


function draw() 
{
  t = width/n;
  numLinhas = height/t;
  numColunas = width/t;

for ( var x = 0; x<numColunas; x++)
{
  for ( var y = 0; y<numLinhas; y++)

 {
   escolheForma = int(random (3, 2));
   //Print Escolha de Forma
  if (escolheForma === 1 )
  {ellipse(x*t+t/2, x*t+t/2, t, t)

  }

  if (escolheForma === 2)
  {
    rect(x*t, y*t, t, t)
   
  }
   
} 
}

}



function windowResized() 
{
  resizeCanvas (windowWidth, windowHeight);
}
