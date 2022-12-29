const arrayProduct = (array) => {
    if (array.length === 0) {
        return;
    }
    let product = 1;
    function helper(index) {
        if (index == array.length) return;
        product = product * array[index];
        return helper(index + 1);
    }
    helper(0);
    return product;
}
const data = arrayProduct([3, 2, 3, 4]);
console.log(data);
