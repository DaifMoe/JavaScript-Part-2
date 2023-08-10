// Modularity
// Benefits: Maintainability, Reuse the code, and Abstract (hide some of the complexity and only show whats necessary)
// Module Types ES5: AMD (Browser), CommonJS (Node.js), and UMD (Browser and Node.js)
// ES6 Modules: Browser

const _radius = new WeakMap();

class Circle {
  constructor(radius) {
    _radius.set(this, radius);
  }

  draw() {
    console.log("Circle with radius" + _radius.get(this));
  }
}

const c = new Circle(10);
console.log(_radius.get(c));
c.draw();
