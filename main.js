// Start Pixi and add the canvas to the page
const app = new PIXI.Application();
await app.init({ resizeTo: window, background: "#ffccf7" });
document.body.appendChild(app.canvas);

// When the user clicks, draw a circle at that spot
window.addEventListener("pointerdown", (e) => {
  const circle = new PIXI.Graphics();
  circle.circle(e.clientX, e.clientY, 30);
  circle.fill(Math.random() * 0xffffff);
  app.stage.addChild(circle);
});

