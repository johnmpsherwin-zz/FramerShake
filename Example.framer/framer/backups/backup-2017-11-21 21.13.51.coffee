# Config
Canvas.backgroundColor = "#F6F4FF"
shake = require("shake").shakeLayer
document.body.style.cursor = "auto"











box = new Layer
	borderRadius: 10
	point: Align.center
	size: 100
	backgroundColor: '#4728D6'

box.onClick ->
	shake {
		layer: this
		repeat: 1
		direction: 'vertical'
		time: .04
		curve: 'spring(800, 30, 0)' }