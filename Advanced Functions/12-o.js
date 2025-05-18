function removeEgg(foods) {
  let count = 0;
  return foods.filter((value) => {
    if (value === "egg" && count < 2) {
      count++;
      return false;
    } else return true;
  });
}

console.log(removeEgg(["egg", "applpe", "egg", "egg", "ham"]));
