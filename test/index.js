
const path = require('path');
const file = require('fs');

const { deepStrictEqual: eql } = require('assert');





const vars = {
    specs: path.resolve(__dirname, '../source/specs'),
    pattern: /\.spec\.js$/,
};



file.readdirSync(vars.specs)
    .filter(name => vars.pattern.test(name))
    .forEach(name => {
        const func = require(path.resolve(vars.specs, name));
        const { skips, title, cases = [] } = func;
        const skiping = skips === true || cases.length < 2;

        describe(title, function () {
            (skiping ? it.skip : it)(': passes', function () {
                for (let i = 0; i < cases.length; i += 2) {
                    eql(
                        func(...[].concat(cases[i])),
                        cases[i + 1]
                    );
                }
            });
        });
    })
;

