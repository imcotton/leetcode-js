
// 136. Single Number
// https://leetcode.com/problems/single-number/


/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = exports = function (nums = []) {

    for (var i = 1, j = nums.length - 1; i < j; i += 1, j -= 1) {
        nums[0] ^= nums[i];
        nums[0] ^= nums[j];
    }

    return nums[0];
};



Object.assign(exports, {

    title: '136. Single Number',

    cases: [
        [[1, 1, 2]],     2,
        [[2, 1, 2]],     1,
        [[3, 2, 2]],     3,
    ],
});



exports.iteration = {

    xor:
    function (nums = []) {
        for (var i = 1; i < nums.length; i += 1) {
            nums[0] ^= nums[i];
        }
        return nums[0];
    },

    'two points': exports,
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

