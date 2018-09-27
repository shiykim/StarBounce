let canvas = document.getElementById('canvas');
let ctx = canvas.getContext("2d");

let rightPressed = false;
let leftPressed = false;
let down = false;
let up = false;
// let rightPressedRight = false;
// let leftPressedRight = false;
// let downRight = false;

let player1X = 100;
let player1Y = 70;
// let player1Width = 120;
let player2X = 480;
let player2Y = 480;
// let player2Width = 120;

let score = 0;
let time = 60;

let background = new Image();
let leftB = new Image();
let rightB = new Image();
let fruit = new Image();
let player1 = new Image();
let player2 = new Image();

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

background.src = 'images/background.jpg';
leftB.src = 'images/branch-left.png';
rightB.src = 'images/branch-right.png';
player1.src = 'images/junimo1.png';
player2.src = 'images/junimo2.png';

// let myAudio = new Audio();
// myAudio.src = 'sounds/comes_alive.mp3';
// myAudio.play();
// myAudio.addEventListener('ended', function() {
//     this.currentTime = 0;
//     this.play();
// }, false);

function foreground() {
  ctx.drawImage(background, 0, 0, 1300, 2000, 0, 0, 739, 1830);
  ctx.drawImage(leftB, 0, 0, 1936, 3000, 0, 70, 520, 700);
  ctx.drawImage(rightB, 0, 0, 1600, 3000, 350, 70, 520, 700);
  ctx.beginPath();
  ctx.font = "20px Arial";
  ctx.fillText("Score Board", 280, 100);

  ctx.save();
  ctx.beginPath();
  // ctx.rotate(10*Math.PI/180);
  ctx.rotate(-8*Math.PI/180);
  ctx.rect(-20,600,540,30);
  // ctx.rect(160,490,540,30);
  ctx.fillStyle = "brown";
  ctx.fill();
  ctx.restore();
}

function keyDownHandler(e) {
    if(e.keyCode === 68) {
      rightPressed = true;
    } else if (e.keyCode === 83) {
      down = true;
    } else if (e.keyCode === 87) {
      up = true;
    } else if (e.keyCode === 65) {
      leftPressed = true;
    } // } else if (e.keyCode === 76) {
    //   rightPressedRight = true;
    // } else if (e.keyCode === 75) {
    //   downRight = true;
    // } else if (e.keyCode === 74) {
    //   leftPressedRight = true;
    // }
}

function keyUpHandler(e) {
    if(e.keyCode === 68) {
        rightPressed = false;
    } else if(e.keyCode === 83) {
        down = false;
    } else if (e.keyCode === 87) {
        up = false;
    } else if(e.keyCode === 65) {
        leftPressed = false;
    } // } else if (e.keyCode === 76) {
    //   rightPressedRight = false;
    // } else if (e.keyCode === 75) {
    //   downRight = false;
    // } else if (e.keyCode === 74) {
    //   leftPressedRight = false;
    // }
}

let fruitchoices = ['images/cactus.png', 'images/grape.png', 'images/melon.png',
                    'images/salmonberry.png', 'images/starfruit.png','images/trash.png',
                    'images/newspaper.png', 'images/glasses.png'];


function Fruit(choice,dx,dy,direction){
  this.dx = dx;
  this.dy = dy;

  this.draw = function(){
    fruit.src = choice;
    ctx.beginPath();
    ctx.drawImage(fruit, 0, 0, 1936, 3000, dx, dy, 1500, 2500);
  };

  time--;

  this.update = function(){
    if (direction === 'left'){
      dx += 5;
    } else {
      dx -= 5;
    }
    this.draw();
  };
  this.update();

}

let fruitsArray = [];

function fruitsGoLeft(){
  for (var i = 0; i < 1; i++) {
    let rand = Math.floor(Math.random() * Math.floor(fruitchoices.length));
    let dx = 0;
    let dy = canvas.height - (Math.floor(Math.random() * 400) + 40);
    fruitsArray.push(new Fruit(fruitchoices[rand],dx,dy, "left"));
    if (fruitsArray.length > 10) {
      fruitsArray.shift();
    }
  }
}

function players(){
  ctx.drawImage(player2, 0, 0, 1600, 3000, player1X, player1Y, 520, 700);
  ctx.drawImage(player2, 0, 0, 1600, 3000, player2X, player2Y, 520, 700);

  if (rightPressed && (player1X < 180) && (player2X < 540)) {
      player1X += 7;
      player2X += 7;
  } else if (leftPressed && (player1X > 0) && (player2X > 400)) {
     player1X -= 7;
     player2X -= 7;
  } else if (down && player1Y < 480){
      while (player1Y < 480){
        player1Y += 10;
        player2Y -= 10;
        // setInterval((ctx.drawImage(player2, 0, 0, 1600, 3000, player1X, player1Y, 520, 700)));
      }
  } else if (up && player1Y >= 70){
    while (player1Y >= 70){
      player1Y -= 10;
      player2Y += 10;
      // setInterval((ctx.drawImage(player2, 0, 0, 1600, 3000, player1X, player1Y, 520, 700)));
    }
  }


    // } else if (down && player1Y == 500){
    //   while (player1Y > 70){
    //     player1Y -= 10;
    //     player2Y += 10;
    //     // setInterval((ctx.drawImage(player2, 0, 0, 1600, 3000, player1X, player1Y, 520, 700)));
    //   }
  }
//
// function fallingPlayer(){
//   this.update = function(){
//     dx += 5;
//     this.draw();
//   };
//   while player1Y <
//   this.update();
// }


  // two player logic -> clogs up the handle events
  //  } else if (rightPressedRight && player2X < 560 ) {
  //     player2X += 7;
  //     console.log(player2X)
  //   } else if (leftPressedRight && player2X > 450 ) {
  //     player2X -= 7;
  // }


// let fruitsArrayRight = [];
//
// function fruitsGoRight(){
//   for (var i = 0; i < 1; i++) {
//     let rand = Math.floor(Math.random() * Math.floor(fruitchoices.length));
//     let dx = canvas.width;
//     let dy = canvas.height - (Math.floor(Math.random() * 400) + 40);
//     fruitsArrayRight.push(new Fruit(fruitchoices[rand],dx,dy, "right"));
//     if (fruitsArrayRight.length > 10) {
//       fruitsArrayRight.shift();
//     }
//     console.log(fruitsArrayRight);
//   }
// }

function animate(){
  requestAnimationFrame(animate);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  foreground();
  ctx.fillText("Timer", 310, 140);
  ctx.fillText(`${time}`, 325, 160);
  players();
  for (let i = 0; i < fruitsArray.length; i++) {
    fruitsArray[i].update();
  }
  // for (let i = 0; i < fruitsArrayRight.length; i++) {
  //   fruitsArrayRight[i].update();
  // }

}

animate();
// setInterval(fruitsGoLeft, 1200);
// setInterval(fruitsGoRight, 1200);
