const canvas = document.getElementById('canvas');
const ctx = canvas.getContext("2d");

let rightPressed = false;
let leftPressed = false;
let jump = false;
let up = false;

let player1X = 100;
let player1Y = 70;
let player2X = 480;
let player2Y = 500;
let playerWidth = 40;
let playerHeight = 40;

let score = 0;
let time = 6000;


document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

const fruit = new Image();
const player2 = new Image();
player2.src = '../assets/images/junimo2.png';

// let myAudio = new Audio();
// myAudio.src = 'sounds/comes_alive.mp3';
// myAudio.play();
// myAudio.addEventListener('ended', function() {
//     this.currentTime = 0;
//     this.play();
// }, false);

function foreground() {
  const background = new Image();
  const leftB = new Image();
  const rightB = new Image();
  const wood = new Image();
  background.src = '../assets/images/background.jpg';
  leftB.src = '../assets/images/branch-left.png';
  rightB.src = '../assets/images/branch-right.png';
  wood.src = '../assets/images/wood3.png';

  ctx.drawImage(background, 0, 0, 1300, 2000, 0, 0, 739, 1830);
  ctx.drawImage(leftB, 0, 0, 1936, 3000, 0, 70, 520, 700);
  ctx.drawImage(rightB, 0, 0, 1600, 3000, 350, 70, 520, 700);
  ctx.beginPath();
  ctx.font = "20px Arial";
  ctx.save();
  ctx.beginPath();
  ctx.moveTo(290, 630);
  ctx.lineTo(370, 630);
  ctx.lineTo(330, 570);
  ctx.closePath();
  ctx.fillStyle = ctx.createPattern(wood, "repeat");
  ctx.fill();
  ctx.restore();
}

function keyDownHandler(e) {
    if(e.keyCode === 68) {
      rightPressed = true;
    } else if (e.keyCode === 83) {
      jump = true;
    } else if (e.keyCode === 65) {
      leftPressed = true;
    } else if (e.keyCode === 87) {
      if (player1Y !== 70){
        up = true;
      }
    }
}

function keyUpHandler(e) {
    if(e.keyCode === 68) {
        rightPressed = false;
    } else if(e.keyCode === 65) {
        leftPressed = false;
    }
}

const fruitchoices = {
  0: '../assets/images/cactus.png',
  1: '../assets/images/grape.png',
  2: '../assets/images/melon.png',
  3: '../assets/images/salmonberry.png',
  4: '../assets/images/starfruit.png',
  5: '../assets/images/trash.png',
  6: '../assets/images/newspaper.png',
  7: '../assets/images/glasses.png'
};

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
    this.dx += 5;
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

let fruitsArray = [];

function fruitsGoLeft(){
  for (var i = 0; i < 1; i++) {
    let rand = Math.floor(Math.random() * Math.floor(7));
    newFruit = new Fruit(fruitchoices[rand], rand);
    fruitsArray.push(newFruit);
    if (fruitsArray.length > 10) {
      fruitsArray.shift();
    }
  }
}


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
        player1Y += 6;
        player2Y -= 6;
      }
    } else if (up){
        if (player2Y > 495){
          up = false;
        }
        if (player1Y > 70 && player2Y < 500){
          player1Y -= 6;
          player2Y += 6;
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

function animate(){
  requestAnimationFrame(animate);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  foreground();
  ctx.fillText("Timer", 310, 140);
  ctx.fillText(`${Math.floor(time/100)}`, 325, 160);
  ctx.fillText("Score Board", 280, 100);
  ctx.fillText(`${score}`, 320, 120);
  new Players();
  time--;
  for (let i = 0; i < fruitsArray.length; i++) {
    fruitsArray[i].draw();
  }

  if (time === 0){
    // location.reload();
  }
}



animate();
// setInterval(fruitsGoLeft, 1000);
// fruitsGoLeft();
