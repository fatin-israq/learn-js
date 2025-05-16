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

setInterval(function () {
  console.log("interval");
}, 3000);

console.log("next-line-2");

fruits = ["apple", "banana", "strawberry"];
fruits.forEach(function (value, index) {
  console.log(index);
  console.log(value);
});
