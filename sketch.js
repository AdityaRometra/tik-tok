var hr,min,sec;
var hrAngle,minAngle,secAngle;

function setup() {
  createCanvas(800,400);

  angleMode(DEGREES);
  
}

function draw() {
  background(0,0,0);  
  hr=hour();
  min=minute();
  sec=second();

  secAngle=map(sec,0,60,0,360);
  minAngle=map(min,0,60,0,360);
  hrAngle=map(hr,0,60,0,360);

  translate(400,200);
  rotate(-90);
  push();  
  rotate(secAngle);
  stroke("yellow");
  strokeWeight(7);
  line(0,0,125,0);
  pop();
  push();
  rotate(minAngle);
  stroke("red");
  strokeWeight(7);
  line(0,0,100,0);
  pop();

  push();
  rotate(hrAngle);
  stroke("purple");
  strokeWeight(7);
  line(0,0,50,0);
  pop();

  strokeWeight(10);
  noFill();
  stroke("yellow");
  arc(0,0,320,320,0,secAngle);

  strokeWeight(10);
  noFill();
  stroke("red");
  arc(0,0,350,350,0,minAngle);

  strokeWeight(10);
  noFill();
  stroke("purple");
  arc(0,0,380,380,0,hrAngle);
 
}