import Game from './game.js';

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext("2d");
canvas.width = 650;
canvas.height = 640;

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

window.rightPressed = false;
window.leftPressed = false;
window.jump = false;
window.direction = 'down';
window.time = 6000;
window.score = 0;

let myAudio = new Audio();
let audioStatus = true;

$( ".modal" ).click(function() {
  $('.modal').hide();
  $('.info').show();
  let game = new Game(ctx);
  game.play();
  myAudio.src = './assets/sounds/fall.mp3';
  myAudio.play();
  myAudio.addEventListener('ended', function() {
    this.currentTime = 0;
    this.play();
  }, false);
});

$( ".button" ).click(function() {
  document.location.reload();
});

$( "#play-image" ).click(function() {
  const playImage = document.getElementById('play-image');
  if(audioStatus){
    myAudio.pause();
    playImage.src = './assets/images/volume.png';
    audioStatus = false;
  } else {
    myAudio.play();
    playImage.src = './assets/images/mute.png';
    audioStatus = true;
  }
});

// handle keys
function keyDownHandler(e) {
  if(e.keyCode === 68) {
    window.rightPressed = true;
  } else if (e.keyCode === 83) {
    window.jump = true;
  } else if (e.keyCode === 65) {
    window.leftPressed = true;
  }
}


function keyUpHandler(e) {
  if(e.keyCode === 68) {
    rightPressed = false;
  } else if(e.keyCode === 65) {
    leftPressed = false;
  }
}
