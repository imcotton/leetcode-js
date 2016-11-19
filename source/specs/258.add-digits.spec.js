
// 258. Add Digits
// https://leetcode.com/problems/add-digits/


/**
 * @param {number} num
 * @return {number}
 */
var addDigits = exports = function (num = 0) {
    var left = num % 9;
    return left ? left : (num ? 9 : 0);
};



Object.assign(exports, {

    title: '258. Add Digits',

    cases: [
          0,     0,
         10,     1,
         38,     2,
         42,     6,
        111,     3,
    ],
});



exports.iteration = {

    looping:
    function (num = 0) {
        var dig = 0;

        while (num > 9) {
            dig = num % 10;
            num = ~~(num / 10) + dig;
        }

        return num;
    },

    formula:
    function (num = 0) {
        return 1 + (num - 1) % 9;
    },

    condition: exports,
};



Object.assign(exports, {

    // run current test only
    only: false,

    // to skip currnet test
    skip: false,
});





if (typeof module !== 'undefined' && 'exports' in module) {
    module.exports = exports;
}

