// Avoid Extending the Built in Objects
// This this example below
Array.prototype.shuffle = function () {};

const array = [];
array.shuffle();

// The lesson here is DON'T MODIFY OBJECTS YOU DON"T OWN!
