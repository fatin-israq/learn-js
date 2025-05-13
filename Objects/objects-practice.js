/*
8e. Create a function 'isSameProduct(product1, product2)', which returns true if 2 products
have the same values inside ('name' and 'price'). If not, return false.
Create 2 products and try out the function. 
(Hint: objects are references so you can't compare them directly). 
*/

function isSameProduct(product1, product2) {
  const key1 = Object.keys(product1);
  const key2 = Object.keys(product2);

  if (key1.length !== key2.length) return false;

  for (let key of key1) {
    if (product1[key] !== product2[key]) {
      return false;
    }
  }
  return true;
}

let productA = {
  name: "Shirt",
  price: 1200,
};

let productB = {
  name: "Shirt",
  price: 1200,
};

console.log(isSameProduct(productA, productB));

/*
8f. convert a string to all lowercase
*/

let str = "Good Morning";
str = str.toLowerCase();

console.log(str);

/*
8g. Repeat a string many times.
*/

let str1 = "Test";
let repeatedText = str1.repeat(5);

console.log(repeatedText);

