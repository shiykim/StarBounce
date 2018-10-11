const background = new Image();
const leftB = new Image();
const rightB = new Image();
background.src = './assets/images/background.jpg';
leftB.src = './assets/images/branch-left.png';
rightB.src = './assets/images/branch-right.png';

export default function foreground() {

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
  ctx.fillStyle = '#804000';
  ctx.fill();
  ctx.restore();
}
