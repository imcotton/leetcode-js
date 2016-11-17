
// 165. Compare Version Numbers
// https://leetcode.com/problems/compare-version-numbers/


/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = exports = function (version1 = '', version2 = '') {
    return 0;
};



Object.assign(exports, {

    title: '165. Compare Version Numbers',

    cases: [
        ['1.1',  '1.2'],     -1,
        ['13.1', '1.2'],      1,
        ['1.20', '1.17'],     1,
        ['1.2',  '1.17'],    -1,
        ['1.4',  '1.4'],      0,
    ],
});



exports.iteration = {

    default: exports,
};



Object.assign(exports, {

    // run current test only
    only: false,

    // to skip currnet test
    skip: true,
});





if (typeof module !== 'undefined' && 'exports' in module) {
    module.exports = exports;
}

