"use strict";

// 1) create a function that generates an array based on two other arrays.
// 2) create a function that evaluates the number of possibilities.
// 3) create a function that returns a matrix that contains all arrays generated.
// arrayA.length < arrayB.length ? arrayB.length : arrayB.length < arrayA.length ? arrayA.length : arrayA.length
var generateRandom = function generateRandom(range) {
  return Math.floor(Math.random() * range);
};

var arrayGenerator = function arrayGenerator(arrayA, arrayB) {
  var biggestArray = arrayA.length > arrayB.length ? arrayA.length : arrayB.length;
  var smallestArray = arrayA.length < arrayB.length ? arrayA.length : arrayB.length;
  console.log(smallestArray);
  var i = 0;
  var j = 0;
  var storageArray = [];
  var indexCombinations = [];
  var c = 0;
  var combinationSet = [];
  var limit = smallestArray * biggestArray;
  var rangeMatches = 2;

  function helper(execCount) {
    if (execCount == limit) {
      rangeMatches = rangeMatches + 1;
      i = 0;
      j = 0;
      limit = Math.pow(smallestArray, biggestArray);
    }

    if (execCount == limit) {
      return;
    }

    var left = arrayA[i];
    var right = arrayB[j];

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

    if (rangeMatches > 2) {}

    c = execCount;
    return helper(execCount + 1);
  }

  helper(0);
  console.log(rangeMatches);
  console.log(c);
  return storageArray;
};

var data = arrayGenerator([10, 15, 25], [1, 5, 20, 30]);
console.log(data);