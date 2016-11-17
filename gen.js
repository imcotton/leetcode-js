
const { Observable, ReplaySubject } = require('rxjs');

const path = require('path');
const fetch = require('node-fetch');

const curry = require('lodash.curry');
const padStart = require('string.prototype.padstart');

const replace = curry(
    (option, content) =>
        require('rollup-plugin-replace')(option)
            .transform(content, '')
            .code
);

const fs = require('mz/fs');
const readFile = (file) => fs.readFile(file, 'utf8');

const confirm = (bool) =>
    !!bool ? Promise.resolve(bool) : Promise.reject(bool);


const { argv } = require('yargs')
    .usage('Usage: $0 -p [num]')
    .demand(['p'])
    .alias('p', 'problem')
    .nargs('p', 1)
    .help()
;





const vars = {
    api: {
        get algorithms () {
            return this.base('algorithms');
        },
        base (category = '') {
            return `https://leetcode.com/api/problems/${ category }/`;
        },
    },

    specs: 'source/specs',
    tmpl: {
        get template () {
            return path.join(this.base, 'code-w-spec.js');
        },
        base: 'tmpl',
    },

    p: argv.problem,
};



const fetchObservable = (url) => Observable
    .fromPromise(fetch(url).then(res => res.json()))
    .flatMap(res => res.stat_status_pairs)
    .map(pairs => pairs.stat)
    .map(({
        question_id: id,
        question__title_slug: slug,
        question__title: title,
    }) => ({
        id,
        slug,
        title,
    }))
    .multicast(new ReplaySubject(Number.MAX_VALUE))
    .refCount()
;



let algorithms$ = fetchObservable(vars.api.algorithms);


    algorithms$

        .filter(item => item.id == vars.p)

        .map(item => {
            const { id, slug, title } = item;
            const sid = padStart(id, 3, '0');

            return Object.assign(item, {
                sid,
                spec: `-wip.${ sid }.${ slug }.spec.js`,
            });
        })

        .zip(readFile(vars.tmpl.template))

        .map(([values, tmpl]) => {
            const config = replace({
                values,
                delimiters: ['$[', ']'],
            });

            return {
                content: config(tmpl),
                name: values.spec,
            };
        })

        .subscribe(({content, name}) => {
            const location = path.resolve(vars.specs, name);

            fs.exists(location)
                .then(confirm)
                .then(_ => {
                    console.info(`[${ name }] exists under [${ vars.specs }]`);
                })
                .catch(_ => {
                    fs.writeFile(location, content);
                })
            ;
        })
    ;

