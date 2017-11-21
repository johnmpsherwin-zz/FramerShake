# Config
Canvas.backgroundColor = "#F6F4FF"
shake = require("shake").shakeLayer
document.body.style.cursor = "auto"
















box = new Layer
	borderRadius: 10
	point: Align.center
	size: 100
	backgroundColor: '#D067FF'

box.onClick ->
	shake
		layer: @
		repeat: 1
		direction: 'vertical'
		time: .08
		curve: 'spring(300, 20, 0)'

box.onClick ->
	shake
		layer: @
		repeat: 2
		direction: 'horizontal'
		time: .04
		curve: 'spring(500, 20, 0)'