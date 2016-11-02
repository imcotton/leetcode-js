
const path = require('path');
const file = require('fs');

const { deepStrictEqual: eql } = require('assert');

if (!Object.entries) {
    require('object.entries').shim();
}





const vars = {
    specs: path.resolve(__dirname, '../source/specs'),
    pattern: /\.spec\.js$/,
};



file.readdirSync(vars.specs)
    .filter(name => vars.pattern.test(name))
    .forEach(name => {
        const def = require(path.resolve(vars.specs, name));

        const { title, skips, only = false } = def;
        const { cases = [], iteration = {default: def} } = def;

        const skiping = skips === true || cases.length < 2;

        describe(title, function () {
            if (skiping) { return it.skip('skipped'); }

            for (let [name, func] of Object.entries(iteration)) {

                (only === true ? it.only : it)(`- ${ name }`, function () {
                    return Promise.resolve().then(_ => {
                        for (let i = 0; i < cases.length; i += 2) {
                            eql(
                                func(...[].concat(cases[i])),
                                cases[i + 1]
                            );
                        }
                    });
                });
            }
        });
    })
;

