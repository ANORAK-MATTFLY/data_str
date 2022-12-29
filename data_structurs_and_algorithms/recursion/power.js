
function power(number, exponent) {
    let product = 1;
    function helper(exp) {
        if (exp == 0) {
            return;
        }
        product = product * number;

        return helper(exp - 1);
    }
    helper(exponent);
    return product;
}

const data = power(2, 4);

console.log(data);

console.log(Math.pow(2, -4));
