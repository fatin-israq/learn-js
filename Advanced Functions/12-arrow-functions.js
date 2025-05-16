const regularFunction = function (param, param2) {
  console.log("hello inside regular function");
  return 5;
};

const arrowFunction = (param, param2) => {
  console.log("hello inside arrow function");
  return 5;
};

arrowFunction();

// <---------------------- Arrow shortcuts ---------------------->

// with one param the brackets are optional
const oneParam = (param) => {
  console.log(param + 1);
};

// If it has a single line of return, we could write it like this
const oneLine = () => 2 + 3;     //returns 5
console.log(oneLine());
