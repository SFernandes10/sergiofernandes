

function setup() 
{
  createCanvas (windowWidth, windowHeight);
  colorMode(HSB, [360], [100], [100], [100]);
  background( 0, 0, 100);
}


function draw()
{
//background(0);
// map serve para dividir a tela fazendo com que esta fique dividida de igal forma)
stroke(map (mouseX, 0, width, 0, 360 ), 100, 100 ) ;
strokeWeight(abs(mouseX-pmouseX) + abs(mouseY-pmouseY));
line (mouseX, mouseY, pmouseX, pmouseY);
}
//mouseX e MouseY serve para defenir as cores e os movimentos que queremos inserir no movientos do rato.


function windowResized() 
{
  resizeCanvas (windowWidth, windowHeight);
}
