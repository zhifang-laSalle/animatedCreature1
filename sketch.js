let yPos = 200;
let speed = -2;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(130, 184, 182);
  
  //sun
  fill(242, 245, 66);
  strokeWeight(0);
  ellipse(200,yPos, 60);
  
  yPos = yPos + speed;
  console.log(yPos);
  
  if (yPos <=-50) 
    {
      speed = -speed;
    }
  if (yPos >= 300)
    {
      speed = -speed;
    }
  
// If statement for restarting animation
//   if ( yPos <= -20 )
//     {
//       yPos = 300;
//     }
  
  
  
  
  //ground
  fill(103, 150, 75, 90);
  strokeWeight(0);
  rect(0,300, 400, 100);
  
  //rect body
  fill(255);
  strokeWeight(4);
  stroke(219, 35, 222);
  rect(150,200, 100, 150);
  
//   push();
//   translate(200,100);
//   rotate(radians(45));
//   rect(0,0, 60, 80);
//   pop();
  
//   push();
//   translate(100,100);
//   rect(0,0,50, 80);
//   pop();
  
//   rect(10, 10, 80, 20);


}