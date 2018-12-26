
// 136. Single Number
// https://leetcode.com/problems/single-number/


/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = exports = function (nums = []) {

    for (var i = 1, j = nums.length - 1; i < j; i++, j--) {
        nums[0] ^= nums[i] ^ nums[j];
    }

    return nums[0];
};



exports.title = '136. Single Number';



exports.cases = [
    [[1, 1, 2, 3, 3]],     2,
    [[2, 1, 2, 3, 3]],     1,
    [[3, 2, 2, 1, 1]],     3,
];



exports.iteration = {

    'one point':
    function (nums = []) {
        for (var i = 1; i < nums.length; i += 1) {
            nums[0] ^= nums[i];
        }
        return nums[0];
    },

    'two points': exports,
};



// run current test only
exports.only = false;

// to skip currnet test
exports.skip = false;





if (typeof module !== 'undefined' && 'exports' in module) {
    module.exports = exports;
}
