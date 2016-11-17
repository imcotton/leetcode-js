
// 283. Move Zeroes
// https://leetcode.com/problems/move-zeroes/


/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = exports = function (nums) {

    for (var i = 0, j = 0; i < nums.length; i++) {

    }

    return nums;
};



Object.assign(exports, {

    title: '283. Move Zeroes',

    cases: [
        [0, 1, 0, 3, 12],     [1, 3, 12, 0, 0],
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

