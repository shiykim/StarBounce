let canvas = document.getElementById('canvas');
let ctx = canvas.getContext("2d");
let rightPressed = false;
let leftPressed = false;
let space = false;

let background = new Image();
let leftB = new Image();
let rightB = new Image();
let fruit = new Image();

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

background.src = 'images/background3.jpg';
leftB.src = 'images/branch-left.png';
rightB.src = 'images/branch-right.png';

function foreground() {
  ctx.drawImage(background, 0, 0, 1836, 3264, 0, 0, 739, 1830);
  ctx.drawImage(leftB, 0, 0, 1936, 3000, 0, 70, 520, 700);
  ctx.drawImage(rightB, 0, 0, 1936, 3000, 350, 70, 520, 700);
}

function keyDownHandler(e) {
    if(e.keyCode == 65) {
        rightPressed = true;
    } else if(e.keyCode == 83) {
        space = true;
    } else if(e.keyCode == 68) {
        leftPressed = false;
    }
}

function keyUpHandler(e) {
    if(e.keyCode == 65) {
        rightPressed = false;
    } else if(e.keyCode == 83) {
        space = false;
    } else if(e.keyCode == 68) {
        leftPressed = false;
    }
}

let fruitchoices = ['images/cactus.png', 'images/grape.png', 'images/melon.png',
                    'images/salmonberry.png', 'images/starfruit.png','images/trash.png',
                    'images/newspaper.png', 'images/glasses.png'];



// function fruits(){
//   let rand = Math.floor(Math.random() * Math.floor(fruitchoices.length));
//   for (var i = 0; i < 3; i++) {
//     let choice = fruitchoices[rand];
//     flyingfruit(choice);
//   }
// }

function Fruit(choice,dx,dy,direction){
  this.dx = dx;
  this.dy = dy;

  this.draw = function(){
    fruit.src = choice;
    ctx.beginPath();
    ctx.drawImage(fruit, 0, 0, 1936, 3000, dx, dy, 1500, 2500);
  };

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
    let dx = (Math.floor(Math.random() * 20) + 2);
    let dy = canvas.height - (Math.floor(Math.random() * 400) + 40);
    fruitsArray.push(new Fruit(fruitchoices[rand],dx,dy, "left"));
    if (fruitsArray.length > 3) {
      fruitsArray.shift();
    }
    // console.log(fruitsArray);
  }
}
let fruitsArrayRight = [];

function fruitsGoRight(){
  for (var i = 0; i < 1; i++) {
    let rand = Math.floor(Math.random() * Math.floor(fruitchoices.length));
    let dx = canvas.width;
    let dy = canvas.height - (Math.floor(Math.random() * 400) + 40);
    fruitsArrayRight.push(new Fruit(fruitchoices[rand],dx,dy, "right"));
    if (fruitsArrayRight.length > 3) {
      fruitsArrayRight.shift();
    }
    console.log(fruitsArrayRight);
  }
}

function animate(){
  requestAnimationFrame(animate);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  foreground();

  for (let i = 0; i < fruitsArray.length; i++) {
    fruitsArray[i].update();
  }

  // for (let i = 0; i < fruitsArrayRight.length; i++) {
  //   fruitsArrayRight[i].update();
  // }

}

animate();
setInterval(fruitsGoLeft, 1500);
setInterval(fruitsGoRight, 1500);
