const baseNumbers = [1, 2, 1];
const squaredNumbers = [4, 4, 1];

const frequencyCounter = function (baseArray, squaredArray) {
    if (baseArray.length != squaredArray.length) return false;
    for (let i = 0; i < baseArray.length; i++) {
        let index = squaredArray.indexOf(baseArray[i] ** 2);
        if (index == -1) {
            return false;
        }
        squaredArray.splice(index, 1);
    }

    return true;
}


console.log(frequencyCounter(baseNumbers, squaredNumbers));
