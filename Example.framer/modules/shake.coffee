Events.ShakeEnd = "ShakeEnd"

exports.shakeLayer = (options) ->

	# Pass options for layer
	layer = options.layer
	repeat = options.repeat
	distance = options.distance
	direction = options.direction
	time = options.time
	curve = options.curve

	# Error handling and set default values
	if layer is undefined
 		throw Error "Shake needs a layer. Pass a layer in as an argument -> shake.shakeLayer(layerName). 🐢"

	if repeat is undefined
 		repeat = 1

 	if distance is undefined
 		distance = 30

 	if direction is undefined
 		direction = 'vertical'

 	if time is undefined
 		time = .08

 	if curve is undefined
 		curve = 'spring(300, 25, 10)'

 	# Shake
	shake = ->

		# Store direction
		prop = undefined

		if direction == 'vertical'
			prop = 'y'
		else
			prop = 'x'

		# Store position of selected layer
		origin = undefined

		if prop == 'y'
			origin = layer.y
		else
			origin = layer.x

		# Set counter. This is compared to the 'repeat' value and is used to stop the shake animation.
		count = 0

		# Shake animation setup
		animationA = new Animation layer,
			"#{prop}": origin - distance
			options:
				time: time
		animationB = new Animation layer,
			"#{prop}": origin + distance
			options:
				time: time
		animationC = new Animation layer,
			"#{prop}": origin
			options:
				curve: curve
				time: time

		# Block events while layer is animating
		animationA.start(layer.ignoreEvents = true)

		# Set shakeX animation by chaining animations A, B & C.
		animationA.on Events.AnimationEnd, animationB.start
		animationB.on Events.AnimationEnd, animationA.start
		animationB.on Events.AnimationEnd, ->
			count += 1
			if count > repeat
				animationA.stop()
				animationC.start()

				# Emit 'ShakeEnd' event.
				@emit(Events.ShakeEnd, event)

		# Reactivate events on layer when animation ends.
		animationC.on Events.AnimationEnd, ->
		 	layer.ignoreEvents = false

	# Run the shake animation
	shake()

