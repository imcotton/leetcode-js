
// 27. Remove Element
// https://leetcode.com/problems/remove-element/


/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = exports = function (nums = [], val = 0) {
    for (var i = 0, j = 0; i < nums.length; i += 1) {
        if (nums[i] !== val) {
            if (j !== i) {
                nums[j] = nums[i];
            }
            j += 1;
        }
    }

    // return j;  // for OJ submitting

    nums.length = j;

    return nums;
};



Object.assign(exports, {

    title: '027. Remove Element',

    cases: [
        [[1, 2, 3, 4], 5],    [1, 2, 3, 4],
        [[1, 2, 3, 4], 3],    [1, 2, 4],
        [[3, 2, 2, 3], 3],    [2, 2],
        [[3, 3, 3, 1], 3],    [1],
        [[1, 1, 3,  ], 3],    [1, 1],
        [[3, 3,     ], 5],    [3, 3],
        [[1,        ], 1],    [    ],
        [[2,        ], 3],    [2   ],
    ],
});



exports.iteration = {

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

