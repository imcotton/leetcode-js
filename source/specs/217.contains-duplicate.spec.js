
// 217. Contains Duplicate
// https://leetcode.com/problems/contains-duplicate/


/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = exports = function (nums = []) {
    var hash = new Set();

    for (var i = 0, n = nums[0]; i < nums.length; n = nums[i += 1]) {
        if (hash.has(n)) {
            return true;
        }
        hash.add(n);
    }

    return false;
};



Object.assign(exports, {

    title: '217. Contains Duplicate',

    cases: [
        [[1, 1]],              true,
        [[2, 3]],              false,
        [[1, 2, 4, 5, 1]],     true,
    ],
});



exports.iteration = {

    object:
    function (nums = []) {
        var hash = {};

        for (var i = 0, n = nums[0]; i < nums.length; n = nums[i += 1]) {
            if (n in hash) {
                return true;
            }
            hash[n] = true;
        }

        return false;
    },

    set: exports,
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

