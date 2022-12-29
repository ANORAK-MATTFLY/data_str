function equal(n, left, right, di) {
    // TWO BASE CASES
    // If there are no more characters to add (n is 0)
    if (n == 0) {
        // If difference between counts of 1s and
        // 0s is 0 (di is 0)
        if (di == 0)
            console.log(left + right + " ");
        return;
    }

    /* If 1 remains than string length was odd */
    if (n == 1) {
        // If difference is 0, we can put
        // remaining bit in middle.
        if (di == 0) {
            console.log(left + "0" + right + " ");
            console.log(left + "1" + right + " ");
        }
        return;
    }

    /* If difference is more than what can be
    be covered with remaining n digits
    (Note that lengths of left and right
     must be same) */
    if ((2 * Math.abs(di) <= n)) {

        // add 0 to end in both left and right
        // half. Sum in both half will not
        // change
        equal(n - 2, left + "0", right + "0", di);

        // add 0 to end in both left and right
        // half* subtract 1 from di as right
        // sum is increased by 1
        equal(n - 2, left + "0", right + "1", di - 1);


        // add 1 in end in left half and 0 to the
        // right half. Add 1 to di as left sum is
        // increased by 1*
        equal(n - 2, left + "1", right + "0", di + 1);

        // add 1 in end to both left and right
        // half the sum will not change
        equal(n - 2, left + "1", right + "1", di);
    }
}

// Driver Code
let n = 5;

// n-bits
const data = equal(n, "", "", 0);
console.log('data: ', data);
