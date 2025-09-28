// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Form submit alert
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("✅ Thanks! I'll reply to you soon.");
});

// Sparkle effect using canvas
const canvas = document.createElement("canvas");
canvas.id = "sparkles";
document.body.appendChild(canvas);
const ctx = canvas.getContext("2d");

let w, h, sparkles;
function init() {
  w = canvas.width = window.innerWidth;
  h = canvas.height = window.innerHeight;
  sparkles = Array.from({length: 80}).map(() => ({
    x: Math.random() * w,
    y: Math.random() * h,
    r: Math.random() * 2 + 1,
    dx: (Math.random() - 0.5) * 0.5,
    dy: (Math.random() - 0.5) * 0.5
  }));
}
function draw() {
  ctx.clearRect(0,0,w,h);
  sparkles.forEach(s => {
    ctx.beginPath();
    ctx.arc(s.x,s.y,s.r,0,Math.PI*2);
    ctx.fillStyle = "rgba(255,255,255,0.8)";
    ctx.fill();
    s.x += s.dx;
    s.y += s.dy;
    if (s.x < 0 || s.x > w) s.dx *= -1;
    if (s.y < 0 || s.y > h) s.dy *= -1;
  });
  requestAnimationFrame(draw);
}
window.addEventListener("resize", init);
init();
draw();
