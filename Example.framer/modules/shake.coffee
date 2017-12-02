Events.ShakeEnd = "ShakeEnd"

Layer.prototype.shake = (options) ->

	# Error handling and set default values
	throw Error "Shake needs a layer. Pass a layer in as an argument -> shake.shakeLayer(layerName). 🐢" if !options.layer?

	# Default values
	options.repeat ?= 1
	options.distance ?= 30
	options.direction ?= 'vertical'
	options.time ?= .08
	options.curve ?= 'spring(300, 25, 10)'

	# Direction
	propertyName = if options.direction is 'vertical' then 'y' else 'x'

	# Position of selected layer
	origin = options.layer["#{propertyName}"]

	# Shake animation setup
	animationA = new Animation options.layer,
		"#{propertyName}": origin - options.distance
		options: time: options.time

	animationB = new Animation options.layer,
		"#{propertyName}": origin + options.distance
		options: time: options.time

	animationC = new Animation options.layer,
		"#{propertyName}": origin
		options: time: options.time, curve: options.curve

	# Block events while layer is animating
	animationA.start options.layer.ignoreEvents = true

	# Set counter. This is compared to the 'repeat' value and is used to stop the shake animation.
	count = options.repeat

	# Set shakeX animation by chaining animations A, B & C.
	animationA.on Events.AnimationEnd, animationB.start
	animationB.on Events.AnimationEnd, animationA.start
	animationB.on Events.AnimationEnd, ->
		count -= 1
		if count is 0
			animationA.stop()
			animationC.start()

			# Emit 'ShakeEnd' event.
			@emit Events.ShakeEnd, event

	# Reactivate events on layer when animation ends.
	animationC.on Events.AnimationEnd, -> options.layer.ignoreEvents = false
