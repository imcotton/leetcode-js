
// 283. Move Zeroes
// https://leetcode.com/problems/move-zeroes/


/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = exports = function (nums = []) {

    const length = nums.length;

    for (var i = 0, j = 0; j < length; i += 1) {
        if (i >= length) {
            nums[j++] = 0;
            continue;
        }

        if (nums[i] !== 0) {
            if (j !== i) {
                nums[j] = nums[i];
            }
            j += 1;
        }
    }

    return nums;
};



exports.title = '283. Move Zeroes';



exports.cases = [
    [[0, 1, 0, 3, 9]],     [1, 3, 9, 0, 0],
    [[0, 0, 0, 0, 1]],     [1, 0, 0, 0, 0],
];



exports.iteration = {

    default: exports,
};



// run current test only
exports.only = false;

// to skip currnet test
exports.skip = false;





if (typeof module !== 'undefined' && 'exports' in module) {
    module.exports = exports;
}

