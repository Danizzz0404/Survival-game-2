const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
canvas.width = 800;
canvas.height = 600;

let player = {
  x: 100,
  y: 100,
  width: 32,
  height: 32,
  color: 'green',
  speed: 3,
};
// Your existing player
let player = {
  x: 100,
  y: 100,
  width: 32,
  height: 32,
  color: 'green',
  speed: 3,
};

// NEW: A red square (enemy or object)
let redSquare = {
  x: 400,
  y: 300,
  width: 32,
  height: 32,
  color: 'red'
};

function drawRedSquare() {
  ctx.fillStyle = redSquare.color;
  ctx.fillRect(redSquare.x, redSquare.y, redSquare.width, redSquare.height);
}

// Update gameLoop to draw both
function gameLoop() {
  clearCanvas();
  movePlayer();
  drawPlayer();
  drawRedSquare(); // draw red square
  requestAnimationFrame(gameLoop);
}
let keys = {};

document.addEventListener('keydown', (e) => {
  keys[e.key] = true;
});

document.addEventListener('keyup', (e) => {
  keys[e.key] = false;
});

function movePlayer() {
  if (keys['w']) player.y -= player.speed;
  if (keys['s']) player.y += player.speed;
  if (keys['a']) player.x -= player.speed;
  if (keys['d']) player.x += player.speed;
}

function drawPlayer() {
  ctx.fillStyle = player.color;
  ctx.fillRect(player.x, player.y, player.width, player.height);
}

function clearCanvas() {
  ctx.fillStyle = 'lightblue';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function gameLoop() {
  clearCanvas();
  movePlayer();
  drawPlayer();
  requestAnimationFrame(gameLoop);
}

gameLoop();
