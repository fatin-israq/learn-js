const myArray = [10, 20, 30];
console.log(myArray[0]);

console.log(myArray[1]);
myArray[1] = 50;
console.log(myArray[1]);

console.log(myArray.length); // Length of the array

myArray.push(80);  // Adds 80 to the end of the array
console.log("Whole array:" + myArray)

myArray.splice(0, 1); // 0 is the index to start removing from, 1 is the number of elements to remove
console.log("Updated array 0th index removed:" + myArray);
