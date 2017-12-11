require "shake"

box = new Layer
	borderRadius: 10
	point: Align.center
	size: 100
	backgroundColor: '#4728D6'

box.onClick ->
	@shake
		repeat: 2
		distance: 30
		direction: 'horizontal'
		time: .05
		curve: 'spring(800, 30, 0)'
