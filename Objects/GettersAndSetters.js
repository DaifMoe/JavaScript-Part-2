function Circle(radius) {
  this.radius = radius;

  let defaultLocation = { x: 0, y: 0 };

  this.getDefaultLocation = function () {
    return defaultLocation;
  };
  this.draw = function () {
    console.log("draw");
  };

  // Use Object.defineProperty to define getters and setter like below
  Object.defineProperty(this, "defaultLocation", {
    get: function () {
      return defaultLocation;
    },
    set: function (value) {
      if (!value.x || !value.y) throw new Error("Invalid Location");
    },
  });
}

const circle = new Circle(10);
circle.defaultLocation(1);
circle.draw();
