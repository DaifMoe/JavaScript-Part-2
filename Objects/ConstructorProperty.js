// Every object has a constrcutor Property and that references the function used to create that object

// Constructor Function
function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("draw");
  };
}
const another = new Circle(1);

// In the console type another.constructor youll get the function used to create the new circle
