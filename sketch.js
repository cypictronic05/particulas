

let particleA;
let particleB;
let particleC;

function setup() {
  createCanvas(400, 200);
  particleA = new Particle(120, 60);
  particleB = new Particle(120, 200);
  particleC = new Particle(50, 50);
}


function draw() {
  background(0);

  particleA.collide(particleB);
  particleA.collide(particleC);
  particleB.collide(particleC);

  particleA.update();
  particleB.update();
  particleC.update();

  particleA.edges();
  particleB.edges();
  particleC.edges();

  particleA.show();
  particleB.show();
  particleC.show();


}

