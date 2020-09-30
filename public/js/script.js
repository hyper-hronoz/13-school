let canvas = document.querySelector("canvas")
let ctx = canvas.getContext("2d")
canvas.width = window.innerWidth
canvas.height = window.innerHeight
window.onresize = function () {
  canvas.width = window.innerWidth
  canvas.height = document.body.scrollHeight
};

function Circle(y, x, dx, dy, radius) {
  this.y = y
  this.x = x
  this.dx = dx
  this.dy = dy
  this.radius = radius

  this.draw = function () {
    ctx.beginPath()
    ctx.fillStyle = "rgba(0, 175, 245, 0.322)"
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true)
    ctx.strokeStyle = "blue"
    ctx.fill()
    ctx.stroke()
  };

  this.update = function () {
    if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
      this.dx = -this.dx
    }
    if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
      this.dy = -this.dy
    }
    this.x += this.dx
    this.y += this.dy

    this.draw()
  };
}

let circleArray = [];

for (let i = 0; i < 100; i++) {
  let radius = 10;
  let x = Math.random() * (innerWidth - radius * 2) + radius
  let y = Math.random() * (innerHeight - radius * 2) + radius
  let dx = Math.random() - 0.5
  let dy = Math.random() - 0.5
  circleArray.push(new Circle(y, x, dx, dy, radius))
}

function animate() {
  requestAnimationFrame(animate);
  ctx.clearRect(0, 0, innerWidth, innerHeight)

  for (let i = 0; i < circleArray.length; i++) {
    circleArray[i].update()
  }
}
animate()
