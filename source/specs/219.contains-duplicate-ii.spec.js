
// 219. Contains Duplicate II
// https://leetcode.com/problems/contains-duplicate-ii/


/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = exports = function (nums = [], k = 0) {
    var hash = new Map();

    for (var i = 0, n = nums[0]; i < nums.length; n = nums[i += 1]) {
        if (hash.has(n)) {
            if (k >= i - hash.get(n)) {
                return true;
            }
        }
        hash.set(n, i);
    }

    return false;
};



exports.title = '219. Contains Duplicate II';



exports.cases = [
    [[99, 99],  2],          true,
    [[-1, -1],  1],          true,
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
