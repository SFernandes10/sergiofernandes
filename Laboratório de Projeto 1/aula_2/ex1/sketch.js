

function setup() 
{
  createCanvas (windowWidth, windowHeight); 

   colorMode (HSB, 360, 100, 100, 100); 
}


function draw() 
{

  print (frameRate (2) );

  background ( random(0, 255), random(0, 255), random(0, 255) );


  fill (255);
  stroke (255, 0, 0);
  strokeWeight (8);
  rectMode (CENTER);
  noFill ();
  rect (width/2, height/2, 250, 250);

  fill (0, 250, 0);
  noFill ();
  ellipseMode (CORNER);
  ellipse  (width/2, height/2, 200, 200);

  line (width/2, 0, width/2,  height);
  
  strokeWeight (50);
  point (400, 400);

}

function windowResized() 
{
  resizeCanvas (windowWidth, windowHeight);
}
