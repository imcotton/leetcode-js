
// 371. Sum of Two Integers
// https://leetcode.com/problems/sum-of-two-integers/


/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = exports = function (a = 0, b = 0) {
    while (a !== 0) {
        [a, b] = [(a & b) << 1, a ^ b];
    }

    return b;
};



exports.title = '371. Sum of Two Integers';



exports.cases = [
    [1, 1],   2,
    [1, 2],   3,
    [4, 2],   6,
   [-1, 1],   0,
    [7, 5],   12,
];



exports.iteration = {

    recursive:
    (function () {
        return function add (a = 0, b = 0) {
            if (a === 0) { return b; }

            return add((a & b) << 1, a ^ b);
        };
    }()),

    default: exports,
};



// run current test only
exports.only = false;

// to skip currnet test
exports.skip = false;





if (typeof module !== 'undefined' && 'exports' in module) {
    module.exports = exports;
}

