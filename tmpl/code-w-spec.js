
// $[id]. $[title]
// https://leetcode.com/problems/$[slug]/


var TBD = exports = function (a, b) {
    return a + b;
};



Object.assign(exports, {

    title: '$[sid]. $[title]',

    cases: [
        [1, 1],     2,

        [2, 3],     5,

        [4, 6],     10,
    ],


    skips: typeof TBD !== 'undefined',
});



exports.iteration = {
    default: exports,
};





if (typeof module !== 'undefined' && 'exports' in module) {
    module.exports = exports;
}

