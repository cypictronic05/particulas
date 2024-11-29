

let particleA;
let particleB;
let particleC;

function setup() {
  createCanvas(500, 500);
  particleA = new Particle(120, 60);
  particleB = new Particle(120, 200);
  particleC = new Particle(50, 50);
  particleD = new Particle(50, 50);
  particleE = new Particle(150, 150);
  particleF = new Particle(200, 100);
  particleG = new Particle(200, 400);
}


function draw() {
  background(125);

  particleA.collide(particleB);
  particleA.collide(particleC);
  particleA.collide(particleD);
  particleB.collide(particleC);
  particleB.collide(particleD);
  particleC.collide(particleD);
  particleC.collide(particleE);
  particleA.collide(particleE);
  particleB.collide(particleE);
  particleC.collide(particleE);
  particleD.collide(particleE);
  particleA.collide(particleF);
  particleB.collide(particleF);
  particleC.collide(particleF);
  particleD.collide(particleF);
  particleE.collide(particleF);
  particleA.collide(particleG);
  particleB.collide(particleG);
  particleC.collide(particleG);
  particleD.collide(particleG);
  particleE.collide(particleG);
  particleF.collide(particleG);

  particleA.update();
  particleB.update();
  particleC.update();
  particleD.update();
  particleE.update();
  particleF.update();
  particleG.update();

  particleA.edges();
  particleB.edges();
  particleC.edges();
  particleD.edges();
  particleE.edges();
  particleF.edges();
  particleG.edges();

  particleA.show();
  particleB.show();
  particleC.show();
  particleD.show();
  particleE.show();
  particleF.show();
  particleG.show();


}

