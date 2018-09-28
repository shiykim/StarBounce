class Players {

  constructor(ctx){
    this.draw(player1X,player1Y);
    this.draw(player2X,player2Y);
    this.handleKey();
    this.seesaw();
  }

  draw(playerX, playerY){
    ctx.drawImage(player2, 0, 0, 1600, 3000, playerX, playerY, 520, 700);
  }

  handleKey(){
    if (rightPressed && (player1X > 0) && (player2X < 550)){
      player1X += 7;
      player2X += 7;
    } else if (leftPressed && (player1X > 0) && (player2X > 410)){
      player1X -= 7;
      player2X -= 7;
    } else if (jump) {
      if (player1Y > 500){
        jump = false;
        if (player1Y < 500 && player2Y < 510) {
          player1Y += 6;
          player2Y -= 6;
          // ctx.drawImage(player2, 0, 0, 1600, 3000, player1X, player1Y, 520, 700);
          // ctx.drawImage(player2, 0, 0, 1600, 3000, player2X, player2Y, 520, 700);
        }
      }
    } else if (up){
        if (player2Y > 495){
          up = false;
        }
        if (player1Y > 70 && player2Y < 500){
          player1Y -= 6;
          player2Y += 6;
          // ctx.drawImage(player2, 0, 0, 1600, 3000, player1X, player1Y, 520, 700);
          // ctx.drawImage(player2, 0, 0, 1600, 3000, player2X, player2Y, 520, 700);
        }
    }
  }

  seesaw(){
    if (player1Y > 500){
      ctx.save();
      ctx.beginPath();
      ctx.rotate(-8*Math.PI/180);
      ctx.rect(-20,600,540,30);
      ctx.fillStyle = "peru";
      ctx.fill();
      ctx.restore();
    } else {
      ctx.save();
      ctx.beginPath();
      ctx.rotate(10*Math.PI/180);
      ctx.rect(160,470,540,30);
      ctx.fillStyle = "peru";
      ctx.fill();
      ctx.restore();
    }
  }

}
