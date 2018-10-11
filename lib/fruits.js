class Fruit {

  constructor(choice,idx){
    this.choice = choice;
    this.dx = 0;
    this.dy = Math.floor(Math.random() * 350) + 200;
    this.width = 10;
    this.height = 10;
    this.idx = idx;
  }

  draw(){
    fruit.src = this.choice;
    ctx.drawImage(fruit, 0, 0, 1936, 3000, this.dx, this.dy, 1500, 2500);
    this.update();
  }

  update(){
    this.dx += 7;
    this.collision();
  }

  collision(){
    if ((this.dx < player1X + playerWidth &&
       this.dx + this.width > player1X &&
  	   this.dy < player1Y + playerHeight &&
  	   this.dy + this.height > player1Y) ||
       (this.dx < player2X + playerWidth &&
          this.dx + this.width > player2X &&
     	    this.dy < player2Y + playerHeight &&
     	     this.dy + this.height > player2Y))
         {
      this.dx = 700;
      if (this.idx < 5){
        score += 10;
      } else {
        time -= 1000;
      }
    }
  }

}
