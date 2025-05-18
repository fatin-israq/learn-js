function removeEgg(foods) {
  return foods.filter((value) => {
    if (value === "egg") return false;
    else return true;
  });
}

console.log(removeEgg(["egg", "applpe", "egg", "egg", "ham"]));
