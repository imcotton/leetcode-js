
// 412. Fizz Buzz
// https://leetcode.com/problems/fizz-buzz/


/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = exports = function (n = 0) {
    var list = [];
    var temp = '';

    for (var i = 1; i <= n; i += 1, temp = '') {

        if (i % 3 === 0) temp += 'Fizz';
        if (i % 5 === 0) temp += 'Buzz';
        if (temp === '') temp += i;

        list[i - 1] = temp;
    }

    return list;
};



exports.title = '412. Fizz Buzz';



exports.cases = [
    15,   [
              '1',
              '2',
              'Fizz',
              '4',
              'Buzz',
              'Fizz',
              '7',
              '8',
              'Fizz',
              'Buzz',
              '11',
              'Fizz',
              '13',
              '14',
              'FizzBuzz',
          ],
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

