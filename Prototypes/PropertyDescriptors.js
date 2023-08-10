let person = { name: "Mosh" };

Object.defineProperty(person, "name", {
  writable: false,
  enumerable: false,
  configurable: false,
});

delete person.name;

console.log(Object.keys(person));
