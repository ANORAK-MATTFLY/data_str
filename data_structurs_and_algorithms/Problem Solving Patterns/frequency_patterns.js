const baseNumbers = [1, 2, 3];
const squaredNumbers = [4, 1, 9];


const frequencyCounter = function (baseArray, squaredArray) {
    let baseNumbersObject = {};
    let squaredNumbersObject = {};

    if (baseArray.length != squaredArray.length) {
        return false;
    }


    for (let value of baseArray) {
        baseNumbersObject[value] = (baseNumbersObject[value] || 0) + 1;
    }
    for (let value of squaredArray) {
        squaredNumbersObject[value] = (squaredNumbersObject[value] || 0) + 1;

    }

    const baseNumbersObjectKeys = Object.keys(baseNumbersObject);

    for (let key of baseNumbersObjectKeys) {
        const squaredKey = key ** 2;
        const baseValue = baseNumbersObject[key];

        if (!(squaredKey in squaredNumbersObject)) {
            return false;
        }
        if (squaredNumbersObject[squaredKey] != baseValue) {
            return false;
        }
    }
    return true;

}


const res = frequencyCounter(baseNumbers, squaredNumbers)
console.log(res);
