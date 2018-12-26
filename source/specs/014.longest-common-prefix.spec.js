
// 14. Longest Common Prefix
// https://leetcode.com/problems/longest-common-prefix/


/**
 * @param {string[]} strs
 */
var longestCommonPrefix = exports = function(strs) {

    if (strs.length < 1) {
        return "";
    }

    var max = -1 >>> 1;
    var length = strs.length;

    for (var i = 0; i < max; i++) {

        var str = strs[0][i];

        if (!str) {
            break;
        }

        var letter = str[0];

        for (var j = 0; j < length; j++) {
            if (letter !== strs[j][i]) {
                break;
            }
        }

        if (j !== length) {
            break;
        }

    }

    return strs[0].substr(0, i);
};




exports.title = '014. Longest Common Prefix';



exports.cases = [
    [[]],                                 '',
    [[ 'a', 'b', 'c' ]],                  '',
    [[ 'flower', 'flow', 'flight' ]],     'fl',
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


