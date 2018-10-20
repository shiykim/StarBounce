import Player from './player.js';
import Fruit from './fruits.js';

export default class Game {

  constructor(ctx){
    this.ctx = ctx;
    this.background = new Image();
    this.leftB = new Image();
    this.rightB = new Image();
    this.background.src = './assets/images/background.jpg';
    this.leftB.src = './assets/images/branch-left.png';
    this.rightB.src = './assets/images/branch-right.png';
    this.players = new Player(this.ctx);
    this.fruitsArray = [];
    this.time = 6000;
    this.score = 0;
  }

  play(){
    this.animate(this.ctx);
    this.fruitsInterval = setInterval(this.createFruit.bind(this), 800);
  }

  foreground() {
    this.ctx.drawImage(this.background, 0, 0, 1300, 2000, 0, 0, 739, 1830);
    this.ctx.drawImage(this.leftB, 0, 0, 1936, 3000, 0, 70, 520, 700);
    this.ctx.drawImage(this.rightB, 0, 0, 1600, 3000, 350, 70, 520, 700);
    this.ctx.beginPath();
    this.ctx.font = "20px Arial";
    this.ctx.save();
    this.ctx.beginPath();
    this.ctx.moveTo(290, 630);
    this.ctx.lineTo(370, 630);
    this.ctx.lineTo(330, 570);
    this.ctx.closePath();
    this.ctx.fillStyle = '#804000';
    this.ctx.fill();
    this.ctx.restore();
  }

  createFruit() {
    if (this.fruitsArray.length < 15){
      let newFruit = new Fruit(this.ctx);
      this.fruitsArray.push(newFruit);
    } else {
      this.fruitsArray.shift();
    }
  }

  activateFruits(){
    this.fruitsArray.map((fruit) => {
      fruit.draw();
      fruit.collision(this.players);
    });
  }

  animate(){
    requestAnimationFrame(this.animate.bind(this));
    this.ctx.clearRect(0, 0, canvas.width, canvas.height);
    this.foreground(this.ctx);
    this.ctx.fillText("Score", 310, 100);
    this.ctx.fillText(`${window.score}`, 323, 120);
    this.ctx.fillText("Timer", 310, 150);
    this.ctx.fillText(`${Math.floor(window.time/100)}`, 323, 170);
    window.time--;
    this.players.draw();
    this.activateFruits();
    this.ctx.fillText("Score", 310, 100);
    this.ctx.fillText("Timer", 310, 150);
    if (window.time <= 0){
      window.time = 0;
      clearInterval(this.fruitsInterval);
      if (window.score > 100){
        $('.win').show();
      } else {
        $('.lose').show();
      }
    }
  }

}
