const failureMessage = "No anagram found :(";


function lettersCollector(string) {
    const lettersStorage = {};
    for (let letter of string) {
        lettersStorage[letter] = (lettersStorage[letter] || 0) + 1;
    }
    return lettersStorage;
}

function anagramVerification(firstStringLettersCollection, secondStringLettersCollection) {
    const firstCollectionValues = Object.values(firstStringLettersCollection);
    const firstCollectionKeys = Object.keys(firstStringLettersCollection);
    const secondCollectionValues = Object.values(secondStringLettersCollection);
    const secondCollectionKeys = Object.keys(secondStringLettersCollection);

    for (let index = 0; index < firstCollectionValues.length; index++) {
        const letterFromFirstString = firstCollectionKeys[index];
        const letterFromSecondString = secondCollectionKeys[index];
        const letterFrequencyFromFirstString = firstCollectionValues[index];
        const letterFrequencyFromSecondString = secondCollectionValues[index];
        if (letterFromFirstString != letterFromSecondString) {
            return failureMessage;
        }
        if (letterFrequencyFromFirstString != letterFrequencyFromSecondString) {
            return failureMessage;
        }
    }
    return "Great!!! This is a an anagram :)";
}


function anagram(firstString, secondString) {
    if (firstString.length != secondString.length) return failureMessage;

    const firstStringLettersCollection = lettersCollector(firstString);
    const secondStringLettersCollection = lettersCollector(secondString);

    const result = anagramVerification(firstStringLettersCollection, secondStringLettersCollection);

    return result;
}

const data = anagram("car", "car");

console.log(data);
