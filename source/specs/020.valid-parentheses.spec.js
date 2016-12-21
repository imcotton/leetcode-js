
// 20. Valid Parentheses
// https://leetcode.com/problems/valid-parentheses/


/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = exports = function (s = '') {
    var hash = {
        '(' : ')',
        '[' : ']',
        '{' : '}',
    };

    var stack = [];

    for (var i = 0, item = s[i], pair = hash[item], head;
         i < s.length;
         item = s[++i], pair = hash[item], head = stack[stack.length - 1]
    ) {
        if (head === undefined && head === pair) {
            return false;
        } else if (item === head) {
            stack.pop();
        } else {
            stack.push(pair);
        }
    }

    return stack.length === 0;
};



exports.title = '020. Valid Parentheses';



exports.cases = [
    '()',         true,
    '()[]{}',     true,
    '([]{()})',   true,
    '(]',         false,
    '([)]',       false,
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

