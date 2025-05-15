function findIndex(array, word) {
    for (let i = 0; i < array.length; i++){
        if (array[i] === word) {
            return 1;
        }
    }
    return -1;
}

console.log(findIndex(['green', 'red', 'blue', 'red'], 'yellow'));