const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
canvas.width = 800;
canvas.height = 600;

// Load girl image
const girlImage = new Image();
girlImage.src = 'girl.png';

// Girl player
let player = {
  x: 100,
  y: 100,
  width: 48,
  height: 48,
  speed: 3,
};

// Red square object
let redSquare = {
  x: 400,
  y: 300,
  width: 32,
  height: 32,
  color: 'red'
};

let keys = {};

document.addEventListener('keydown', (e) => {
  keys[e.key.toLowerCase()] = true;
});
document.addEventListener('keyup', (e) => {
  keys[e.key.toLowerCase()] = false;
});

function movePlayer() {
  if (keys['w']) player.y -= player.speed;
  if (keys['s']) player.y += player.speed;
  if (keys['a']) player.x -= player.speed;
  if (keys['d']) player.x += player.speed;
}

function drawPlayer() {
  ctx.drawImage(girlImage, player.x, player.y, player.width, player.height);
}

function drawRedSquare() {
  ctx.fillStyle = redSquare.color;
  ctx.fillRect(redSquare.x, redSquare.y, redSquare.width, redSquare.height);
}

function clearCanvas() {
  ctx.fillStyle = 'lightblue';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function gameLoop() {
  clearCanvas();
  movePlayer();
  drawPlayer();
  drawRedSquare();
  requestAnimationFrame(gameLoop);
}

girlImage.onload = gameLoop;
