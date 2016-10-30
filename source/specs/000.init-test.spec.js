
var add = exports = function (a, b) {
    return a + b;
};



Object.assign(exports, {

    title: '000. Init Test',

    cases: [
        [1, 1],   2,
        [1, 2],   3,
        [4, 2],   6,
        [7, 5],   12,
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

