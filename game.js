
document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("gameCanvas");
  const ctx = canvas.getContext("2d");

  ctx.fillStyle = "skyblue";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "green";
  ctx.fillRect(0, canvas.height - 100, canvas.width, 100);

  ctx.fillStyle = "black";
  ctx.font = "30px Arial";
  ctx.fillText("Welcome to Survival Game!", 200, 300);
});
