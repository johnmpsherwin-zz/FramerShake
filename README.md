# Framer Shake Module
![](icon_header.png)

## Installation
To install, just download the `shake.coffee` file and put it in the `/modules` folder in your Framer project. 

## Usage
In Framer Studio, write:
```javascript
shake = require("shake").shakeLayer
```

Now with the module imported, you can shake layers in your prototype. By default, the shake animation has a list of properties that can be modified. They are as follows:

| Property | Value | Type
| ------------- | ------------- | ------------- |
| layer | undefined | Object |
| repeat | 1 | Number |
| distance | 30 | Number |
| direction | ‘vertical’ | String |
| time | .08 | Number |
| curve | 'spring(300, 25, 10)' | String |

The only required property is layer, as the function inside the module needs something to shake. Here’s a simple example:

```javascript
shake = require("shake").shakeLayer

box = new Layer
	borderRadius: 10
	point: Align.center
	size: 100
	backgroundColor: '#4728D6'

box.onClick ->
	shake {
		layer: this }
```

This will shake the `box` when it’s clicked with the default properties applied.
To customize the shake animation you can add more properties and change the values:

```javascript
box = new Layer
	borderRadius: 10
	point: Align.center
	size: 100
	backgroundColor: '#4728D6'

box.onClick ->
	shake {
		layer: this
		repeat: 2
		distance: 30
		direction: 'horizontal'
		time: .05
		curve: 'spring(800, 30, 0)' }
```

To do something after the shake event ends, just write:

```javascript
box.on "ShakeEnd", ->
	print "Shake Ended"
```

If you want to improve the module or have anything to add, feel free to open a Pull Request. 🙂

## Contact
Say Hi, I’m on <a href="https://twitter.com/johnmpsherwin">Twitter 👋</a>.

Follow me on <a href="https://dribbble.com/johnsherwin">Dribbble 🏀</a>.

