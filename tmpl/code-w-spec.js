
// $[id]. $[title]
// https://leetcode.com/problems/$[slug]/


var TBD = exports = function (a, b) {
    return a + b;
};



exports.title = '$[sid]. $[title]';



exports.cases = [
    [1, 1],     2,

    [2, 3],     5,

    [4, 6],     10,
];



exports.iteration = {

    default: exports,
};



// run current test only
exports.only = false;

// to skip currnet test
exports.skip = typeof TBD !== 'undefined';





if (typeof module !== 'undefined' && 'exports' in module) {
    module.exports = exports;
}

