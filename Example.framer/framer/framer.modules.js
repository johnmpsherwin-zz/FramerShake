require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"myModule":[function(require,module,exports){
exports.myVar = "myVariable";

exports.myFunction = function() {
  return print("myFunction is running");
};

exports.myArray = [1, 2, 3];


},{}],"shake":[function(require,module,exports){
Events.ShakeEnd = "ShakeEnd";

exports.shakeLayer = function(options) {
  var curve, direction, distance, layer, repeat, shake, time;
  layer = options.layer;
  repeat = options.repeat;
  distance = options.distance;
  direction = options.direction;
  time = options.time;
  curve = options.curve;
  if (layer === void 0) {
    throw Error("Shake needs a layer. Pass a layer in as an argument -> shake.shakeLayer(layerName). 🐢");
  }
  if (repeat === void 0) {
    repeat = 1;
  }
  if (distance === void 0) {
    distance = 30;
  }
  if (direction === void 0) {
    direction = 'vertical';
  }
  if (time === void 0) {
    time = .08;
  }
  if (curve === void 0) {
    curve = 'spring(300, 25, 10)';
  }
  shake = function() {
    var animationA, animationB, animationC, count, obj, obj1, obj2, origin, prop;
    prop = void 0;
    if (direction === 'vertical') {
      prop = 'y';
    } else {
      prop = 'x';
    }
    origin = void 0;
    if (prop === 'y') {
      origin = layer.y;
    } else {
      origin = layer.x;
    }
    count = 0;
    animationA = new Animation(layer, (
      obj = {},
      obj["" + prop] = origin - distance,
      obj.options = {
        time: time
      },
      obj
    ));
    animationB = new Animation(layer, (
      obj1 = {},
      obj1["" + prop] = origin + distance,
      obj1.options = {
        time: time
      },
      obj1
    ));
    animationC = new Animation(layer, (
      obj2 = {},
      obj2["" + prop] = origin,
      obj2.options = {
        curve: curve,
        time: time
      },
      obj2
    ));
    animationA.start(layer.ignoreEvents = true);
    animationA.on(Events.AnimationEnd, animationB.start);
    animationB.on(Events.AnimationEnd, animationA.start);
    animationB.on(Events.AnimationEnd, function() {
      count += 1;
      if (count > repeat) {
        animationA.stop();
        animationC.start();
        return this.emit(Events.ShakeEnd, event);
      }
    });
    return animationC.on(Events.AnimationEnd, function() {
      return layer.ignoreEvents = false;
    });
  };
  return shake();
};


},{}]},{},[])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJhbWVyLm1vZHVsZXMuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL1VzZXJzL2pvaG5zaGVyd2luL0Rlc2t0b3AvRnJhbWVyU2hha2UvRXhhbXBsZS5mcmFtZXIvbW9kdWxlcy9zaGFrZS5jb2ZmZWUiLCIuLi8uLi8uLi8uLi8uLi9Vc2Vycy9qb2huc2hlcndpbi9EZXNrdG9wL0ZyYW1lclNoYWtlL0V4YW1wbGUuZnJhbWVyL21vZHVsZXMvbXlNb2R1bGUuY29mZmVlIiwibm9kZV9tb2R1bGVzL2Jyb3dzZXItcGFjay9fcHJlbHVkZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJFdmVudHMuU2hha2VFbmQgPSBcIlNoYWtlRW5kXCJcblxuZXhwb3J0cy5zaGFrZUxheWVyID0gKG9wdGlvbnMpIC0+XG5cblx0IyBQYXNzIG9wdGlvbnMgZm9yIGxheWVyXG5cdGxheWVyID0gb3B0aW9ucy5sYXllclxuXHRyZXBlYXQgPSBvcHRpb25zLnJlcGVhdFxuXHRkaXN0YW5jZSA9IG9wdGlvbnMuZGlzdGFuY2Vcblx0ZGlyZWN0aW9uID0gb3B0aW9ucy5kaXJlY3Rpb25cblx0dGltZSA9IG9wdGlvbnMudGltZVxuXHRjdXJ2ZSA9IG9wdGlvbnMuY3VydmVcblxuXHQjIEVycm9yIGhhbmRsaW5nIGFuZCBzZXQgZGVmYXVsdCB2YWx1ZXNcblx0aWYgbGF5ZXIgaXMgdW5kZWZpbmVkXG4gXHRcdHRocm93IEVycm9yIFwiU2hha2UgbmVlZHMgYSBsYXllci4gUGFzcyBhIGxheWVyIGluIGFzIGFuIGFyZ3VtZW50IC0+IHNoYWtlLnNoYWtlTGF5ZXIobGF5ZXJOYW1lKS4g8J+QolwiXG5cblx0aWYgcmVwZWF0IGlzIHVuZGVmaW5lZFxuIFx0XHRyZXBlYXQgPSAxXG5cbiBcdGlmIGRpc3RhbmNlIGlzIHVuZGVmaW5lZFxuIFx0XHRkaXN0YW5jZSA9IDMwXG5cbiBcdGlmIGRpcmVjdGlvbiBpcyB1bmRlZmluZWRcbiBcdFx0ZGlyZWN0aW9uID0gJ3ZlcnRpY2FsJ1xuXG4gXHRpZiB0aW1lIGlzIHVuZGVmaW5lZFxuIFx0XHR0aW1lID0gLjA4XG5cbiBcdGlmIGN1cnZlIGlzIHVuZGVmaW5lZFxuIFx0XHRjdXJ2ZSA9ICdzcHJpbmcoMzAwLCAyNSwgMTApJ1xuXG4gXHQjIFNoYWtlXG5cdHNoYWtlID0gLT5cblxuXHRcdCMgU3RvcmUgZGlyZWN0aW9uXG5cdFx0cHJvcCA9IHVuZGVmaW5lZFxuXG5cdFx0aWYgZGlyZWN0aW9uID09ICd2ZXJ0aWNhbCdcblx0XHRcdHByb3AgPSAneSdcblx0XHRlbHNlXG5cdFx0XHRwcm9wID0gJ3gnXG5cblx0XHQjIFN0b3JlIHBvc2l0aW9uIG9mIHNlbGVjdGVkIGxheWVyXG5cdFx0b3JpZ2luID0gdW5kZWZpbmVkXG5cblx0XHRpZiBwcm9wID09ICd5J1xuXHRcdFx0b3JpZ2luID0gbGF5ZXIueVxuXHRcdGVsc2Vcblx0XHRcdG9yaWdpbiA9IGxheWVyLnhcblxuXHRcdCMgU2V0IGNvdW50ZXIuIFRoaXMgaXMgY29tcGFyZWQgdG8gdGhlICdyZXBlYXQnIHZhbHVlIGFuZCBpcyB1c2VkIHRvIHN0b3AgdGhlIHNoYWtlIGFuaW1hdGlvbi5cblx0XHRjb3VudCA9IDBcblxuXHRcdCMgU2hha2UgYW5pbWF0aW9uIHNldHVwXG5cdFx0YW5pbWF0aW9uQSA9IG5ldyBBbmltYXRpb24gbGF5ZXIsXG5cdFx0XHRcIiN7cHJvcH1cIjogb3JpZ2luIC0gZGlzdGFuY2Vcblx0XHRcdG9wdGlvbnM6XG5cdFx0XHRcdHRpbWU6IHRpbWVcblx0XHRhbmltYXRpb25CID0gbmV3IEFuaW1hdGlvbiBsYXllcixcblx0XHRcdFwiI3twcm9wfVwiOiBvcmlnaW4gKyBkaXN0YW5jZVxuXHRcdFx0b3B0aW9uczpcblx0XHRcdFx0dGltZTogdGltZVxuXHRcdGFuaW1hdGlvbkMgPSBuZXcgQW5pbWF0aW9uIGxheWVyLFxuXHRcdFx0XCIje3Byb3B9XCI6IG9yaWdpblxuXHRcdFx0b3B0aW9uczpcblx0XHRcdFx0Y3VydmU6IGN1cnZlXG5cdFx0XHRcdHRpbWU6IHRpbWVcblxuXHRcdCMgQmxvY2sgZXZlbnRzIHdoaWxlIGxheWVyIGlzIGFuaW1hdGluZ1xuXHRcdGFuaW1hdGlvbkEuc3RhcnQobGF5ZXIuaWdub3JlRXZlbnRzID0gdHJ1ZSlcblxuXHRcdCMgU2V0IHNoYWtlWCBhbmltYXRpb24gYnkgY2hhaW5pbmcgYW5pbWF0aW9ucyBBLCBCICYgQy5cblx0XHRhbmltYXRpb25BLm9uIEV2ZW50cy5BbmltYXRpb25FbmQsIGFuaW1hdGlvbkIuc3RhcnRcblx0XHRhbmltYXRpb25CLm9uIEV2ZW50cy5BbmltYXRpb25FbmQsIGFuaW1hdGlvbkEuc3RhcnRcblx0XHRhbmltYXRpb25CLm9uIEV2ZW50cy5BbmltYXRpb25FbmQsIC0+XG5cdFx0XHRjb3VudCArPSAxXG5cdFx0XHRpZiBjb3VudCA+IHJlcGVhdFxuXHRcdFx0XHRhbmltYXRpb25BLnN0b3AoKVxuXHRcdFx0XHRhbmltYXRpb25DLnN0YXJ0KClcblxuXHRcdFx0XHQjIEVtaXQgJ1NoYWtlRW5kJyBldmVudC5cblx0XHRcdFx0QGVtaXQoRXZlbnRzLlNoYWtlRW5kLCBldmVudClcblxuXHRcdCMgUmVhY3RpdmF0ZSBldmVudHMgb24gbGF5ZXIgd2hlbiBhbmltYXRpb24gZW5kcy5cblx0XHRhbmltYXRpb25DLm9uIEV2ZW50cy5BbmltYXRpb25FbmQsIC0+XG5cdFx0IFx0bGF5ZXIuaWdub3JlRXZlbnRzID0gZmFsc2VcblxuXHQjIFJ1biB0aGUgc2hha2UgYW5pbWF0aW9uXG5cdHNoYWtlKClcblxuIiwiIyBBZGQgdGhlIGZvbGxvd2luZyBsaW5lIHRvIHlvdXIgcHJvamVjdCBpbiBGcmFtZXIgU3R1ZGlvLiBcbiMgbXlNb2R1bGUgPSByZXF1aXJlIFwibXlNb2R1bGVcIlxuIyBSZWZlcmVuY2UgdGhlIGNvbnRlbnRzIGJ5IG5hbWUsIGxpa2UgbXlNb2R1bGUubXlGdW5jdGlvbigpIG9yIG15TW9kdWxlLm15VmFyXG5cbmV4cG9ydHMubXlWYXIgPSBcIm15VmFyaWFibGVcIlxuXG5leHBvcnRzLm15RnVuY3Rpb24gPSAtPlxuXHRwcmludCBcIm15RnVuY3Rpb24gaXMgcnVubmluZ1wiXG5cbmV4cG9ydHMubXlBcnJheSA9IFsxLCAyLCAzXSIsIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBRUFBO0FESUEsT0FBTyxDQUFDLEtBQVIsR0FBZ0I7O0FBRWhCLE9BQU8sQ0FBQyxVQUFSLEdBQXFCLFNBQUE7U0FDcEIsS0FBQSxDQUFNLHVCQUFOO0FBRG9COztBQUdyQixPQUFPLENBQUMsT0FBUixHQUFrQixDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUDs7OztBRFRsQixNQUFNLENBQUMsUUFBUCxHQUFrQjs7QUFFbEIsT0FBTyxDQUFDLFVBQVIsR0FBcUIsU0FBQyxPQUFEO0FBR3BCLE1BQUE7RUFBQSxLQUFBLEdBQVEsT0FBTyxDQUFDO0VBQ2hCLE1BQUEsR0FBUyxPQUFPLENBQUM7RUFDakIsUUFBQSxHQUFXLE9BQU8sQ0FBQztFQUNuQixTQUFBLEdBQVksT0FBTyxDQUFDO0VBQ3BCLElBQUEsR0FBTyxPQUFPLENBQUM7RUFDZixLQUFBLEdBQVEsT0FBTyxDQUFDO0VBR2hCLElBQUcsS0FBQSxLQUFTLE1BQVo7QUFDRSxVQUFNLEtBQUEsQ0FBTSx3RkFBTixFQURSOztFQUdBLElBQUcsTUFBQSxLQUFVLE1BQWI7SUFDRSxNQUFBLEdBQVMsRUFEWDs7RUFHQyxJQUFHLFFBQUEsS0FBWSxNQUFmO0lBQ0MsUUFBQSxHQUFXLEdBRFo7O0VBR0EsSUFBRyxTQUFBLEtBQWEsTUFBaEI7SUFDQyxTQUFBLEdBQVksV0FEYjs7RUFHQSxJQUFHLElBQUEsS0FBUSxNQUFYO0lBQ0MsSUFBQSxHQUFPLElBRFI7O0VBR0EsSUFBRyxLQUFBLEtBQVMsTUFBWjtJQUNDLEtBQUEsR0FBUSxzQkFEVDs7RUFJRCxLQUFBLEdBQVEsU0FBQTtBQUdQLFFBQUE7SUFBQSxJQUFBLEdBQU87SUFFUCxJQUFHLFNBQUEsS0FBYSxVQUFoQjtNQUNDLElBQUEsR0FBTyxJQURSO0tBQUEsTUFBQTtNQUdDLElBQUEsR0FBTyxJQUhSOztJQU1BLE1BQUEsR0FBUztJQUVULElBQUcsSUFBQSxLQUFRLEdBQVg7TUFDQyxNQUFBLEdBQVMsS0FBSyxDQUFDLEVBRGhCO0tBQUEsTUFBQTtNQUdDLE1BQUEsR0FBUyxLQUFLLENBQUMsRUFIaEI7O0lBTUEsS0FBQSxHQUFRO0lBR1IsVUFBQSxHQUFpQixJQUFBLFNBQUEsQ0FBVSxLQUFWLEVBQ2hCO1lBQUEsRUFBQTtVQUFBLEVBQUEsR0FBRyxRQUFRLE1BQUEsR0FBUyxRQUFwQjtVQUNBLFVBQ0M7UUFBQSxJQUFBLEVBQU0sSUFBTjtPQUZEOztLQURnQjtJQUlqQixVQUFBLEdBQWlCLElBQUEsU0FBQSxDQUFVLEtBQVYsRUFDaEI7YUFBQSxFQUFBO1dBQUEsRUFBQSxHQUFHLFFBQVEsTUFBQSxHQUFTLFFBQXBCO1dBQ0EsVUFDQztRQUFBLElBQUEsRUFBTSxJQUFOO09BRkQ7O0tBRGdCO0lBSWpCLFVBQUEsR0FBaUIsSUFBQSxTQUFBLENBQVUsS0FBVixFQUNoQjthQUFBLEVBQUE7V0FBQSxFQUFBLEdBQUcsUUFBUSxNQUFYO1dBQ0EsVUFDQztRQUFBLEtBQUEsRUFBTyxLQUFQO1FBQ0EsSUFBQSxFQUFNLElBRE47T0FGRDs7S0FEZ0I7SUFPakIsVUFBVSxDQUFDLEtBQVgsQ0FBaUIsS0FBSyxDQUFDLFlBQU4sR0FBcUIsSUFBdEM7SUFHQSxVQUFVLENBQUMsRUFBWCxDQUFjLE1BQU0sQ0FBQyxZQUFyQixFQUFtQyxVQUFVLENBQUMsS0FBOUM7SUFDQSxVQUFVLENBQUMsRUFBWCxDQUFjLE1BQU0sQ0FBQyxZQUFyQixFQUFtQyxVQUFVLENBQUMsS0FBOUM7SUFDQSxVQUFVLENBQUMsRUFBWCxDQUFjLE1BQU0sQ0FBQyxZQUFyQixFQUFtQyxTQUFBO01BQ2xDLEtBQUEsSUFBUztNQUNULElBQUcsS0FBQSxHQUFRLE1BQVg7UUFDQyxVQUFVLENBQUMsSUFBWCxDQUFBO1FBQ0EsVUFBVSxDQUFDLEtBQVgsQ0FBQTtlQUdBLElBQUMsQ0FBQSxJQUFELENBQU0sTUFBTSxDQUFDLFFBQWIsRUFBdUIsS0FBdkIsRUFMRDs7SUFGa0MsQ0FBbkM7V0FVQSxVQUFVLENBQUMsRUFBWCxDQUFjLE1BQU0sQ0FBQyxZQUFyQixFQUFtQyxTQUFBO2FBQ2pDLEtBQUssQ0FBQyxZQUFOLEdBQXFCO0lBRFksQ0FBbkM7RUFwRE87U0F3RFIsS0FBQSxDQUFBO0FBdEZvQiJ9
