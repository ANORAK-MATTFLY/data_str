// 1) create a function that generates an array based on two other arrays.

// 2) create a function that evaluates the number of possibilities.

// 3) create a function that returns a matrix that contains all arrays generated.

// arrayA.length < arrayB.length ? arrayB.length : arrayB.length < arrayA.length ? arrayA.length : arrayA.length

function swapper(arrayOne, arrayTwo, start, execNumber) {
    const newArr = [];
    let left = 0;
    let right = 0;


    for (let i = 0; i < arrayTwo.length; i++) {
        right = i;
        if (newArr.length == 0 && (newArr.length != execNumber)) {
            newArr.push(arrayOne[start]);
        }

        if (newArr[newArr.length - 1] < arrayTwo[right] && (newArr.length != execNumber)) {
            newArr.push(arrayTwo[right]);
            right = arrayTwo.indexOf(arrayTwo[right]);
            left = right;
        }
        if (newArr[newArr.length - 1] < arrayOne[left] && (newArr.length != execNumber)) {
            newArr.push(arrayOne[left]);
        }

    }



    return newArr;
}
const we = swapper([10, 15, 25], [1, 5, 20, 30], 0, 2)
console.log(we);

const arrayGenerator = (arrayA, arrayB) => {
    const biggestArray = arrayA.length > arrayB.length ? arrayA.length : arrayB.length;
    const smallestArray = arrayA.length < arrayB.length ? arrayA.length : arrayB.length;
    console.log(smallestArray);
    let i = 0;
    let j = 0;
    let k = 0;
    let l = 3;
    const storageArray = [];

    let combinationSet = [];
    let limit = (smallestArray * biggestArray) * 2;
    let rangeMatches = 2;


    function helper(execCount) {
        if (execCount == (smallestArray * biggestArray)) {
            rangeMatches += 1;
        }
        if (execCount == limit) {
            return;
        }
        let left = arrayA[i];
        let right = arrayB[j];

        if (rangeMatches == 2) {
            if (left > right) {
                j += 1;
            }
            if (left < right) {
                combinationSet = [left, right];
                if (!storageArray.includes(combinationSet)) {
                    storageArray.push(combinationSet);

                    j += 1;
                    if (right === arrayB[biggestArray - 1]) {
                        i += 1;
                        j = 0;
                    }
                }
            }
        }
        if (rangeMatches > 2) {
            if (k == smallestArray) {
                return;
            }
            if (l == biggestArray) {
                l = 3;
                k++;
            }
            l++;
            if (arrayA[arrayA.length - 1] == arrayA[k]) {
                return;
            }
            combinationSet = swapper(arrayA, arrayB, k, l);
            if (!storageArray.includes(combinationSet)) {
                storageArray.push(combinationSet);
            }
        }
        return helper(execCount + 1);

    }

    helper(0)

    return storageArray;
}

const data = arrayGenerator([10, 15, 25], [1, 5, 20, 30]);
const dat = [1, 5, 20, 30]
console.log(data);






