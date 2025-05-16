function greeting() {
  console.log("hello");
}

greeting();

const num = 2;
const function1 = function greeting() {
  console.log("hello2");
};

// console.log(function1);
// console.log(typeof function1);
function1();

const object1 = {
  num: 2,
  fun: function greeting() {
    console.log("hello3");
  },
};

object1.fun();

setTimeout(function () {
  console.log("timeout");
}, 3000);

let intervalID = setInterval(function () {
  console.log("interval");
}, 3000);

setTimeout(function () {
  clearInterval(intervalID);
}, 15000);

console.log("next-line-2");

fruits = ["apple", "banana", "strawberry"];
fruits.forEach(function (value, index) {
  console.log(index);
  console.log(value);
});



// Some more functions


// filter ((value, index) => {
//  });
// It can return a value, if the value is truthful then it returns the value of the array and store it in the new array, otherwise it doesn't include the value in that array.
// It kind of works like forEach loop.

console.log(
  [1, -3, 5].filter((value, index) => {
    if (value >= 0) {
      return true;
    } else {
      return false;
    }

    // return value >= 0; does the same thing as above
  })
); // its going to return a new array which is [1, 5]


// map function
// Creates a new array[]
// Whatever we return => added to new array
console.log([1, 1, 3].map((value, index) => {
  return value * 2;
}))

// Creating more shortcut way to write the above code
console.log([1, 1, 3].map(value => value * 3));


// Closure function
// If a function has access to a value
// It will always have access to that value
