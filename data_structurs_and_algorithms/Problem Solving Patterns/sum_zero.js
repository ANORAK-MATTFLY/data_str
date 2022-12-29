

// function sumZero(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[i] + arr[j] === 0) {
//                 return [arr[i], arr[j]];
//             }
//         }
//     }
//     return "undefined"
// }


function sumZero(array) {
    const N = array.length;
    const halfN = (N / 2);
    for (let i = 0, j = i + 1; j < N, i < N; i++, j++) {
        let left = array[i];
        let right = array[j];
        if (left + right === 0) {
            return [left, right];
        }
    }
    return "undefined";
}


const data = sumZero([-4, -3, -2, -1, 0, 1, 2, 3, 4, 5]);

console.log(data);
