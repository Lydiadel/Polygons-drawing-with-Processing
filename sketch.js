// Challenge 4 - Polygons drawing with Processing js
// Lydia Delgado Uriarte

function setup() {
  createCanvas(400, 400);
  
  r = random(255); 
  g = random(100,200); 
  b = random(100); 
  a = random(200,255);
  fill(r,g,b,a)
}

let puntos = 5

function draw() {
  
  background(220);
  
  polygon(width/2, height/2, 100, puntos);
}


function mouseClicked(){
  
  r = random(255); 
  g = random(100,200); 
  b = random(100); 
  a = random(200,255); 
  fill(r, g, b, a);
  if (puntos == 12) {
    puntos = 5
  } 
  else {
    puntos = puntos + 1;
  }
  
}
function polygon(x, y, radius, npoints, transform, ...params){
  let angle = TWO_PI / npoints;
  
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle){
    let sx = x + cos(a) * radius;
    let sy = y + sin(a) * radius;
    if (transform != null){
      [sx , sy ] = transform(sx, sy, ... params);
    }
    vertex(sx, sy);
  }
  endShape(CLOSE);
}

