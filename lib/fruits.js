const FRUITCHOICES = {
  0: './assets/images/cactus.png',
  1: './assets/images/grape.png',
  2: './assets/images/melon.png',
  3: './assets/images/salmonberry.png',
  4: './assets/images/starfruit.png',
  5: './assets/images/trash.png',
  6: './assets/images/newspaper.png',
  7: './assets/images/glasses.png'
};

const RANDSIDE = {

}

export default class Fruit {

  constructor(ctx){
    let rand = Math.floor(Math.random() * Math.floor(7));
    let randSide = Math.floor(Math.random());
    this.fruit = new Image();
    this.fruit.src = FRUITCHOICES[rand];
    this.dx = 0;
    this.dy = Math.floor(Math.random() * 350) + 200;
    this.width = 10;
    this.height = 10;
    this.idx = rand;
    this.ctx = ctx;
  }

  draw(){
    this.ctx.drawImage(this.fruit, 0, 0, 1936, 3000, this.dx, this.dy, 1500, 2500);
    this.update();
  }

  update(){
    this.dx += 8;
    // this.collision();
  }

}
