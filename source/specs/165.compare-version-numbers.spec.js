
// 165. Compare Version Numbers
// https://leetcode.com/problems/compare-version-numbers/


/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = exports = function (v1 = '', v2 = '') {

    if (v1 === v2) return 0;

    const vv1 = v1.split('.');
    const vv2 = v2.split('.');

    const length = Math.max(vv1.length, vv2.length);

    for (var i = 0; i < length; i += 1) {
        if (~~vv1[i] > ~~vv2[i]) return  1;
        if (~~vv1[i] < ~~vv2[i]) return -1;
    }

    return 0;
};



Object.assign(exports, {

    title: '165. Compare Version Numbers',

    cases: [
        ['1',      '0'],        1,
        ['1',      '1.1'],     -1,
        ['1.0.1',  '1'],        1,
        ['0.1',    '1.0'],     -1,
        ['01',     '1'],        0,
        ['1.1',    '1.2'],     -1,
        ['13.1',   '1.2'],      1,
        ['1.20',   '1.17'],     1,
        ['1.2',    '1.17'],    -1,
        ['1.4',    '1.4'],      0,
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

