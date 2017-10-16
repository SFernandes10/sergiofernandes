

function setup() 
{
  createCanvas (windowWidth, windowHeight);

}


function draw()
{ background(255);
  

 if (mouseX>0 && mouseX<width/2 && mouseY>0 && mouseY<height/2)
     {
    fill(0);
     }
else
    {
     nofill();
    }
rect(0, 0, width/2, height/2);

if (mouseX>width/2 && mouseX<width && mouseY>0 && mouseY<height/2)
    {
      fill(0);
    }
else
    {
      nofill();
    }
rect(width/2, 0, width/2, height/2);

if (mouseX<width/2 && mouseY<height/2)
    {
      fill(0);
    }
else
    {
      nofill();
    }
rect(width/2, height/2, width/2, height/2);

if (mouseX>0 && mouseX<width/2 && mouseY<height/2)
    {
      fill(0);
    }
else
    {
      nofill();
    }

rect(0, height/2, width/2, height/2);

}

function windowResized() 
{
  resizeCanvas (windowWidth, windowHeight);
}