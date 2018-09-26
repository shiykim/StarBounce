let canvas = document.getElementById('canvas');
let ctx = canvas.getContext("2d");
let rightPressed = false;
let leftPressed = false;
let space = false;

let background = new Image();
let leftB = new Image();
let rightB = new Image();
let fruit = new Image();
var x = canvas.width / 40;
var y = canvas.height - 200;

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



function fruits(){
  let rand = Math.floor(Math.random() * Math.floor(fruitchoices.length));
  for (var i = 0; i < 3; i++) {
    let choice = fruitchoices[rand];
    flyingfruit(choice);
  }
}

// function flyingfruit(choice) {
//   fruit.src = choice;
// }

function Fruit(choice,x,y){
  this.x = x;
  this.y = y;

  this.draw = function(){
      fruit.src = choice;
      ctx.beginPath();
      ctx.drawImage(fruit, 0, 0, 1936, 3000, x, y, 1500, 2500);
  };

  this.update = function(){
    x += 5;
    this.draw();
  };
  this.update();

}

let fruitsArray = [];

for (var i = 0; i < 5; i++) {
  let rand = Math.floor(Math.random() * Math.floor(fruitchoices.length));
  // let x =
  // let y =
  fruitsArray.push(new Fruit(fruitchoices[rand],x,y));
}


function animate(){
  requestAnimationFrame(animate);
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  foreground();

  fruits();
}

animate();

// setInterval(draw, 10);
