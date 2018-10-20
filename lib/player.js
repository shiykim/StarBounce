export default class Players {

  constructor(ctx){
    this.playerImage = new Image();
    this.playerImage.src = './assets/images/junimo2.png';
    this.player1X = 100;
    this.player1Y = 70;
    this.player2X = 480;
    this.player2Y = 500;
    this.playerWidth = 60;
    this.playerHeight = 60;
    this.ctx = ctx;
  }

  draw(){
    this.ctx.drawImage(this.playerImage, 0, 0, 1600, 3000, this.player1X, this.player1Y, 520, 700);
    this.ctx.drawImage(this.playerImage, 0, 0, 1600, 3000, this.player2X, this.player2Y, 520, 700);
    this.handleKey();
    this.seesaw();
  }

  handleKey(){
    if (window.rightPressed && (this.player1X > 0) && (this.player2X < 550)){
      this.player1X += 7;
      this.player2X += 7;
    } else if (window.leftPressed && (this.player1X > 0) && (this.player2X > 410)){
      this.player1X -= 7;
      this.player2X -= 7;
    } else if (window.jump && window.direction === 'down') {
      if (this.player1Y < 500 && this.player2Y < 510) {
        this.player1Y += 6;
        this.player2Y -= 6;
        if (this.player1Y === 496) {
          window.direction = 'up';
          window.jump = false;
        }
      }
    } else if (window.jump && window.direction === 'up'){
      if (this.player1Y > 60 && this.player2Y < 500){
        this.player1Y -= 6;
        this.player2Y += 6;
        if (this.player1Y === 76) {
          window.direction = 'down';
          window.jump = false;
        }
      }
    }
  }

  seesaw(){
    if (this.player1Y > 470){
      this.ctx.save();
      this.ctx.beginPath();
      this.ctx.rotate(-8*Math.PI/180);
      this.ctx.lineJoin = "round";
      this.ctx.lineWidth = 20;
      this.ctx.strokeStyle= "#804000";
      this.ctx.strokeRect(-10, 600, 540, 5);
      this.ctx.restore();
    } else {
      this.ctx.save();
      this.ctx.beginPath();
      this.ctx.rotate(10*Math.PI/180);
      this.ctx.lineJoin = "round";
      this.ctx.lineWidth = 20;
      this.ctx.strokeStyle = '#804000';
      this.ctx.strokeRect(160, 490, 530, 5);
      this.ctx.restore();
    }
  }
}
