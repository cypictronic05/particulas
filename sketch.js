

let particleA;
let particleB;
let particleC;

function setup() {
  createCanvas(400, 200);
  particleA = new Particle(120, 60);
  particleB = new Particle(120, 200);
  particleC = new Particle(50, 50);
  particleD = new Particle(50, 50);
}


function draw() {
  background(0);

  particleA.collide(particleB);
  particleA.collide(particleC);
  particleB.collide(particleC);
  particleB.collide(particleD);
  particleA.collide(particleD);

  particleA.update();
  particleB.update();
  particleC.update();

  particleA.edges();
  particleB.edges();
  particleC.edges();
  particleD.edges();

  particleA.show();
  particleB.show();
  particleC.show();
  particleD.show();


}

