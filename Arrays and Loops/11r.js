function removeEgg(foods) {
    const foods_w_eggs = [];
    for (let i = 0; i < foods.length; i++) {
        if (foods[i] === 'egg') {
            continue;
        } else {
            foods_w_eggs.push(foods[i]);
        }
    }
    return foods_w_eggs;
}

console.log(removeEgg(['egg', 'apple', 'egg', 'ham']));