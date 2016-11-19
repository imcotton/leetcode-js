
// 1. Two Sum
// https://leetcode.com/problems/two-sum/


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = exports = function (nums = [], target = 0) {
    var hash = {};

    for (var i = 0, n = 0; i < nums.length; i++) {
        n = nums[i];

        if (n in hash) {
            return [hash[n], i];
        }

        hash[target - n] = i;
    }
};



Object.assign(exports, {

    title: '001. Two Sum',

    cases: [
        [[2, 7, 11, 15], 9],            [0, 1],
        [[3, 2, 4], 6],                 [1, 2],
        [[0, 4, 3, 0], 0],              [0, 3],
        [[-1, -2, -3, -4, -5], -8],     [2, 4],
    ],
});



exports.iteration = {

    brute:
    function (nums = [], target = 0) {
        for (let i = 0, j = 0; i < nums.length - 1; i++) {
            for (j = i + 1; j < nums.length; j++) {
                if (nums[i] + nums[j] === target) {
                    return [i, j];
                }
            }
        }
    },

    cache:
    function (nums = [], target = 0) {
        var hash = {};

        for (var n = 0; n < nums.length; n++) {
            hash[nums[n]] = n;
        }

        for (var i = 0, j = 0, sub = 0; i < nums.length; i++) {
            sub = target - nums[i];
            j = hash[sub];

            if (target > 0 && sub < 0) { continue; }
            if (target < 0 && sub > 0) { continue; }

            if (j && i !== j) {
                return [i, j];
            }
        }
    },

    default: exports,
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

