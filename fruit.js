class Fruit {

  constructor(choice, dx, dy){
    this.dx = dx;
    this.dy = dy;
    this.draw();
    this.update();
  }

  draw(){
    fruit.src = this.choice;
    ctx.beginPath();
    ctx.drawImage(fruit, 0, 0, 1936, 3000, this.dx, this.dy, 1500, 2500);
  }

  update(){
    this.dx += 6;
  }
}
