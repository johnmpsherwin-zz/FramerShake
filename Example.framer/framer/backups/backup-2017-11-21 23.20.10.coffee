# Config
Canvas.backgroundColor = "#F6F4FF"
shake = require("shake").shakeLayer


box = new Layer
	borderRadius: 10
	point: Align.center
	size: 100
	backgroundColor: '#4728D6'

box.onClick ->
	shake {
		layer: this }