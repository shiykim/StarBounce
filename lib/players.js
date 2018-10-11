class Players {

  constructor(){
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
      }
      if (player1Y < 500 && player2Y < 510) {
        player1Y += 7;
        player2Y -= 7;
      }
    } else if (up){
        if (player2Y > 495){
          up = false;
        }
        if (player1Y > 60 && player2Y < 500){
          player1Y -= 7;
          player2Y += 7;
        }
    }
  }

  seesaw(){
    if (player1Y > 500){
      ctx.save();
      ctx.beginPath();
      ctx.rotate(-8*Math.PI/180);
      ctx.lineJoin = "round";
      ctx.lineWidth = 20;
      ctx.strokeStyle= "#804000";
      ctx.strokeRect(-10, 600, 540, 5);
      ctx.restore();
    } else {
      ctx.save();
      ctx.beginPath();
      ctx.rotate(10*Math.PI/180);
      ctx.lineJoin = "round";
      ctx.lineWidth = 20;
      ctx.strokeStyle = '#804000';
      ctx.strokeRect(160, 490, 530, 5);
      ctx.restore();
    }
  }
}
