
// 338. Counting Bits
// https://leetcode.com/problems/counting-bits/


var countBits = exports = function (num = 0) {
    const list = [0];

    for (let i = 0; i <= num + num % 2; i += 2) {
        list[i] = list[i >> 1];
        list[i + 1] = list[i] + 1;
    }

    return list.slice(0, num + 1);
};



Object.assign(exports, {

    title: '338. Counting Bits',

    cases: [
        4,         [0, 1, 1, 2, 1],
        5,         [0, 1, 1, 2, 1, 2],
    ],
});



exports.iteration = {

    'to strings': function (num = 0) {
        const list = [];
        const hash = {0: 0, 1: 1};

        const count = function (n = 0) {
            if (n in hash) { return hash[n]; }

            return hash[n] = n.toString(2).split('1').length - 1;
        };

        for (let i = 0; i <= num; i++) {
            list.push(count(i));
        }

        return list;
    },

    'shift counting': function (num = 0) {
        const list = [];
        const hash = {0: 0, 1: 1};

        const count = function (n = 0, m = n) {
            if (n in hash) { return hash[n]; }

            let sum = 0, bit = 0, base = 0, out = 0;

            while (n > 0) {
                bit = n & 1;
                base++;

                if (bit === 1) {
                    out += 1 << base;
                    hash[out] = ++sum;
                }

                n >>>= 1;
            }

            return hash[m] = sum;
        };

        for (let i = 0; i <= num; i++) {
            list.push(count(i));
        }

        return list;
    },

    'reuse previous': function (num = 0) {
        const list = [0];

        for (let i = 0; i <= num; i++) {
            list[i] = list[i >> 1] + (i & 1);
        }

        return list;
    },

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

