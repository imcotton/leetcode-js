
// 344. Reverse String
// https://leetcode.com/problems/reverse-string/


/**
 * @param {string} s
 * @return {string}
 */
var reverseString = exports = function (s = '') {
    const list = [];

    for (var i = 0, j = s.length - 1; i <= j; i++, j--) {
        list[i] = s[j];
        list[j] = s[i];
    }

    return list.join('');
};



exports.title = '344. Reverse String';



exports.cases = [
      '123', '321',
     '1234', '4321',
    'hello', 'olleh',
];



exports.iteration = {

    'split reverse': function (s = '') {
        return s.split('').reverse().join('');
    },

    'loop append': function (s = '') {
        let list = '';

        for (var i = s.length - 1; i >= 0; i--) {
            list += s[i];
        }

        return list;
    },

    default: exports,
};



// run current test only
exports.only = false;

// to skip currnet test
exports.skip = false;





if (typeof module !== 'undefined' && 'exports' in module) {
    module.exports = exports;
}

