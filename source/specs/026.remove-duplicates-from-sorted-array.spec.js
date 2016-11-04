
// 26. Remove Duplicates from Sorted Array
// https://leetcode.com/problems/remove-duplicates-from-sorted-array/


/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = exports = function (nums = []) {

    for (var i = 1, j = 0; i < nums.length; i += 1) {
        if (nums[j] !== nums[i]) {
            j += 1;
            nums[j] = nums[i];
        }
    }

    // return j + 1;  // for OJ submitting

    nums.length = j + 1;

    return nums;
};



Object.assign(exports, {

    title: '026. Remove Duplicates from Sorted Array',

    cases: [
        [[1, 2]],              [1, 2],
        [[1, 1, 2]],           [1, 2],
        [[1, 2, 2, 3, 4]],     [1, 2, 3, 4],
    ],
});



exports.iteration = {

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

