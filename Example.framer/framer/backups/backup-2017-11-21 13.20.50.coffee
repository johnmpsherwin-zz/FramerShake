shake = require("shake").shakeLayer

box = new Layer
	borderRadius: 10
	point: Align.center
	size: 100
	backgroundColor: "rgba(0,124,255,1)"





box.onClick ->
	shake(@)






box.on "ShakeEnd", ->
	print "ShakeEnd"