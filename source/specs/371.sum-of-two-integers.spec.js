
// 371. Sum of Two Integers
// https://leetcode.com/problems/sum-of-two-integers/


var getSum = exports = function (a = 0, b = 0) {
    while (a !== 0) {
        [a, b] = [(a & b) << 1, a ^ b];
    }

    return b;
};



Object.assign(exports, {

    title: '371. Sum of Two Integers',

    cases: [
        [1, 1],   2,
        [1, 2],   3,
        [4, 2],   6,
       [-1, 1],   0,
        [7, 5],   12,
    ],
});



exports.iteration = {

    recursive: (function () {
        return function add (a = 0, b = 0) {
            if (a === 0) { return b; }

            return add((a & b) << 1, a ^ b);
        };
    }()),

    default: exports,
};



Object.assign(exports, {

    // run current test only
    only: false,

    // to skip currnet test
    skip: typeof TBD !== 'undefined',
});





if (typeof module !== 'undefined' && 'exports' in module) {
    module.exports = exports;
}

