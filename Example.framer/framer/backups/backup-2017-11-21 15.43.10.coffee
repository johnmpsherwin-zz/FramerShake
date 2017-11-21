# Use desktop cursor
document.body.style.cursor = "auto"

# Config
Canvas.backgroundColor = "#FAF4FF"
shake = require("shake").shakeLayer
















box = new Layer
	borderRadius: 10
	point: Align.center
	size: 100
	backgroundColor: "#D067FF"

box.onClick ->
	shake(this, 1, 30, 'vertical', .08, 'spring(300, 20, 10)')