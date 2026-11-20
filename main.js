// backgroundAlpha: 0 makes the canvas see-through, so the background picture (pic.jpg) can be seen.
const app = new PIXI.Application();
await app.init({ resizeTo: window, backgroundAlpha: 0 });
document.body.appendChild(app.canvas);

// A list where all the circles are on the screen
const circles = [];

// When the user clicks make a new circle at that spot
window.addEventListener("pointerdown", (e) => {
  const circle = new PIXI.Graphics();
  circle.circle(0, 0, 30);                        
  circle.fill(Math.random() * 0xffffff);          
  circle.x = e.clientX;                           
  circle.y = e.clientY;
  app.stage.addChild(circle);                     
  circles.push(circle);                          
});

// This runs about 60 times every second
app.ticker.add(() => {
  // Go through all the circles
  for (let i = circles.length - 1; i >= 0; i--) {
    const circle = circles[i];
    circle.scale.x += 0.03;   // grow bigger
    circle.scale.y += 0.03;
    circle.alpha -= 0.015;    // slowly fade away

    // When the circle is invisible, remove it
    if (circle.alpha <= 0) {
      app.stage.removeChild(circle);
      circles.splice(i, 1);
    }
  }
});

