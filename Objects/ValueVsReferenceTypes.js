// Value (Primitive) Types: Number, String, Boolean, Symbol, Undefined, Null
// Reference Types: Object, Function, Arrays

let number = 10;

function increase(number) {
  number++;
}

increase(number);
console.log(number);
// This is copied by value meaning when we log number it will still be 10

let obj = { value: 10 };

function increase2(obj) {
  obj.value++;
}

increase2(obj);
console.log(obj);
// This is copied by refernce so it will return 11 when logged
