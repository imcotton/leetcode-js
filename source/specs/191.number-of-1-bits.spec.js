
// 191. Number of 1 Bits
// https://leetcode.com/problems/number-of-1-bits/


/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = exports = function (n = 0) {
    var sum = 0;

    while (n) {
        n &= n - 1;
        sum += 1;
    }

    return sum;
};



exports.title = '191. Number of 1 Bits';



exports.cases = [
             0,    0,
             1,    1,
            11,    3,

        0b1001,    2,
        0b1111,    4,

      16777216,    1,
    2147483648,    1,
];



exports.iteration = {

    'to strings':
    function (n = 0) {
        return n.toString(2).split('1').length - 1;
    },

    'shift counting':
    function (n = 0) {
        var sum = 0;

        do {
            if (n & 1) {
                sum += 1;
            }
        } while (n >>>= 1)

        return sum;
    },

    default: exports,
};



// run current test only
exports.only = false;

// to skip currnet test
exports.skip = false;





if (typeof module !== 'undefined' && 'exports' in module) {
    module.exports = exports;
}

