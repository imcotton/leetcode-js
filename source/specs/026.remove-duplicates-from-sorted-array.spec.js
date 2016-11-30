
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



exports.title = '026. Remove Duplicates from Sorted Array';



exports.cases = [
    [[1, 2]],              [1, 2],
    [[1, 1, 2]],           [1, 2],
    [[1, 2, 2, 3, 4]],     [1, 2, 3, 4],
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

