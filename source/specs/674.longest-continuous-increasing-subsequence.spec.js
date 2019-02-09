
// 674. Longest Continuous Increasing Subsequence
// https://leetcode.com/problems/longest-continuous-increasing-subsequence/

/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = exports = function (nums) {

    if (nums.length < 2) {
        return nums.length;
    }

    var max = 0;
    var acc = 0;
    var len = nums.length;

    for (var i = 1; i < len; i++) {

        acc += 1;

        if (nums[i - 1] >= nums[i]) {

            if (acc >= max) {
                max = acc;
            }

            acc = 0;
        }

        if (max > len / 2) {
            break;
        }

    }


    return Math.max(max, acc + 1);
};



exports.title = '674. Longest Continuous Increasing Subsequence';



exports.cases = [
    [[   ]],                    0,
    [[ 0 ]],                    1,
    [[ 1 ]],                    1,
    [[ 1, 3, 5, 4, 7, 8 ]],     3,
    [[ 1, 3, 2, 4, 7, 8 ]],     4,
    [[ 2, 2, 2, 2, 2, 2 ]],     1,
    [[ 1, 3, 5, 4, 2, 3, 4 ]],  3,
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

