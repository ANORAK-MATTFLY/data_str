


const generate = (str, startingPoint, eachChar, numberOfSpaces) => {
    if ((numberOfSpaces >= str.length) || numberOfSpaces < 0) {
        return "The number of spaces must be less than string's length and greater than zero.";
    }
    const digitStorage = [];
    const N = str.length;
    const maxNumberOfDigits = (N - 1) + N;
    let insertionCount = 0;
    let spaceLimit = 0;
    let lm = 0;
    function helper(limit) {
        let digit = str[limit]

        if (str[str.length - 1] == digitStorage[digitStorage.length - 1]) {
            return digitStorage;
        }
        if ((limit == maxNumberOfDigits)) {
            return digitStorage;
        }
        if (spaceLimit == numberOfSpaces) {
            insertionCount = 0;
            digitStorage.push(digit);
            return helper(limit + 1);
        }


        if (limit >= startingPoint) {

            if (insertionCount !== eachChar) {
                digitStorage.push(digit);
            }

            if ((insertionCount == eachChar)) {
                digitStorage.push(" ");
                digitStorage.push(digit);
                insertionCount = 0;
                spaceLimit += 1;
            }
            insertionCount++;
        } else {
            digitStorage.push(digit);
        }

        return helper(limit + 1);
    }
    helper(0);
    return digitStorage;
}

console.log(Math.abs(9));

const test = generate("12345678", 0, 2, 7);

console.log(test);





const generateCombinations = (str) => {
    const combinations = [];
    let arr = []
    if (str.length == 0) {
        return 0;
    }

    const N = str.length;
    const numberOfCombinations = (N - 1) * (N - 2) + 2;
    function helper(limit) {
        if (limit == 0) {
            combinations.push(str)
            return;
        }
        return helper(limit - 1);
    }
    helper(numberOfCombinations);
    return numberOfCombinations;
}

const data = generateCombinations("123");


console.log(data);
