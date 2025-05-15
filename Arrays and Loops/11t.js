function removeEgg(foods) {
  foods.reverse();
  const foods_w_eggs = [];
  let countegg = 0;
  for (let i = 0; i < foods.length; i++) {
    if (foods[i] === "egg") {
      ++countegg;
    }
    if (countegg <= 2 && foods[i] === "egg") {
      continue;
    } else {
      foods_w_eggs.push(foods[i]);
    }
  }
  return foods_w_eggs.reverse();
}

console.log(removeEgg(["egg", "apple", "egg", "egg", "egg", "ham"]));
