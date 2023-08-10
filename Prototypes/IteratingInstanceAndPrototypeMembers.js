function Circle(radius) {
  // Instance Members
  this.radius = radius;

  this.move = function () {
    console.log("move");
  };
}

// Prototype Members
Circle.prototype.draw = function () {
  console.log("draw");
};

// Returns Instance Members
console.log(Object.keys(c1));

// Returns all members (instance + prototype)
for (let key in c1) console.log(key);
