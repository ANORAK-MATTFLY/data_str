function frequencyCounter(firstString, secondString) {
    if (firstString.length != secondString.length) {
        return false;
    }

    const firstObj = {};
    const secondObj = {};

    for (let letter of firstString) {
        firstObj[letter] = (firstObj[letter] || 0) + 1;
    }

    for (let letter of secondString) {
        secondObj[letter] = (secondObj[letter] || 0) + 1;
    }

    console.log(secondObj);

    const firstObjAsArray = Object.keys(firstObj);

    for (let letter of firstObjAsArray) {
        if (firstObj[letter] != secondObj[letter]) {
            return false;
        }
    }

    return true;
}

let data = frequencyCounter("car", "car");
console.log('data: ', data);
