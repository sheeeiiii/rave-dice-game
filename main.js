// Start Pixi and add the canvas to the page.
// backgroundAlpha: 0 makes the canvas see-through,
// so the background picture can be seen.
const app = new PIXI.Application();
await app.init({ resizeTo: window, backgroundAlpha: 0 });
document.body.appendChild(app.canvas);

// When the user clicks, draw a circle where they clicked
window.addEventListener("pointerdown", (e) => {
  const circle = new PIXI.Graphics();
  circle.circle(e.clientX, e.clientY, 30);
  circle.fill(Math.random() * 0xffffff); // random colour
  app.stage.addChild(circle);
});

