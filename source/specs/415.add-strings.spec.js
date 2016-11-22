
// 415. Add Strings
// https://leetcode.com/problems/add-strings/


/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = exports = function (num1 = '', num2 = '') {
    var sum = '';
    var carry = false;
    var base = '0'.charCodeAt(0);
    var num1_length = num1.length;
    var num2_length = num2.length;
    var max = Math.max(num1.length, num2.length);

    for (var i = 1, tmp = 0; i <= max; i += 1) {
        tmp = (num1.charCodeAt(num1_length - i) || base)
            + (num2.charCodeAt(num2_length - i) || base)
            - base * 2
            + ~~carry
        ;

        sum = tmp % 10 + sum;
        carry = tmp > 9;
    }

    return carry ? '1' + sum : sum;
};



exports.title = '415. Add Strings';



exports.cases = [
    ['0', '0'],         '0',
    ['1', '0'],         '1',
    ['1', '9'],         '10',
    ['4', '5'],         '9',
    ['8', '88'],        '96',
    ['4', '24'],        '28',
    ['42', '4'],        '46',
    ['42', '24'],       '66',
    ['111', '111'],     '222',
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

