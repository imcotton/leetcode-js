
// 258. Add Digits
// https://leetcode.com/problems/add-digits/


/**
 * @param {number} num
 * @return {number}
 */
var addDigits = exports = function (num) {
    return num;
};



Object.assign(exports, {

    title: '258. Add Digits',

    cases: [
        38,     2,
        42,     6,
    ],
});



exports.iteration = {

    default: exports,
};



Object.assign(exports, {

    // run current test only
    only: false,

    // to skip currnet test
    skip: true,
});





if (typeof module !== 'undefined' && 'exports' in module) {
    module.exports = exports;
}

