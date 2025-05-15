function findIndex(array, word) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === word) {
      return 1;
    }
  }
  return -1;
}

function unique(array) {
  const unique_array = [];
  for (let i = 0; i < array.length; i++) {
    let is_unique = true;
    for (let j = 0; j < unique_array.length; j++) {
      if (array[i] === unique_array[j]) {
        is_unique = false;
        break;
      }
    }
    if (is_unique) {
      unique_array.push(array[i]);
    } else {
      continue;
    }
  }
  return unique_array;
}

console.log(unique(["green", "red", "green", "red"]));
