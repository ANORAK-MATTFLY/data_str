function unityCheck(array) {
    const uniqueNumbers = [];
    for (let i = 0; i < array.length; i++) {
        const number = array[i];
        if (!(uniqueNumbers.includes(number))) {
            uniqueNumbers.push(number);
        }
    }
    return uniqueNumbers;
}

function countUniqueValues(array) {
    const uniqueNumbers = unityCheck(array);
    return uniqueNumbers.length;
}

const data = countUniqueValues([-2, -1, -1, 0, 1]);

console.log(data);
