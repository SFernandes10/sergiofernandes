
var x1, y1, x2, y2, t, espacamentoHorizontal, numLinhas, linhaActual;
function setup() 
{
  createCanvas (windowWidth, windowHeight);

  
  t = 20;
  numLinhas = 5;
 
}


function draw() 
{

  //linhaActual = 0;
  espacamentoHorizontal = width/numLinhas;
  /*
  for (var i = 0; i<numLinhas; i++)
  //while (linhaActual<numLinhas)
  {
    y1 = height/2 - t/2;
    y2 = height/2 + t/2;

    x1 = espacamentoHorizontal*i;
    x2 = x1;
  
  
    strokeWeight(3);
    line(x1, y1, x2, y2);

    //linhaActual++;
  }
  */
    //x1 = 0;
    for (var x1 = 0; x1<width; x1 +=10)
  {
    y1 = height/2 - t/2;
    y2 = height/2 + t/2;

    //x1 += 10;
    x2 = x1;

    line(x1, y1, x2, y2);
}
}

function windowResized() 
{
  resizeCanvas (windowWidth, windowHeight);
}
