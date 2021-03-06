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
  0: 0,
  1: 650
};

export default class Fruit {

  constructor(ctx){
    let rand = Math.floor(Math.random() * Math.floor(7));
    let side = Math.round(Math.random());
    this.fruit = new Image();
    this.fruit.src = FRUITCHOICES[rand];
    this.dx = RANDSIDE[side];
    this.dy = Math.floor(Math.random() * 350) + 200;
    this.width = 10;
    this.height = 10;
    this.idx = rand;
    this.fruitSide = side;
    this.ctx = ctx;
  }

  draw(){
    this.ctx.drawImage(this.fruit, 0, 0, 1936, 3000, this.dx, this.dy, 1500, 2500);
    this.update();
  }

  update(){
    if (this.fruitSide === 0){
      this.dx += 8;
    } else {
      this.dx -= 8;
    }
  }

  collision(players){
    if ((this.dx < players.player1X + players.playerWidth &&
       this.dx + this.width > players.player1X &&
  	   this.dy < players.player1Y + players.playerHeight &&
  	   this.dy + this.height > players.player1Y) ||
       (this.dx < players.player2X + players.playerWidth &&
          this.dx + this.width > players.player2X &&
     	    this.dy < players.player2Y + players.playerHeight &&
     	     this.dy + this.height > players.player2Y))
         {
      if (this.fruitSide === 0){
        this.dx = 700;
      } else {
        this.dx = -100;
      }
      if (this.idx < 5){
        window.score += 10;
      } else {
        window.time -= 1000;
      }
    }
  }

}
