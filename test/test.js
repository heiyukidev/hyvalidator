const validate = require('../index.js');
const assert = require('assert');
const typeTest = require('./type.test.js');
const numberTest = require('./number.test.js');
const stringTest = require('./string.test.js');


const Strings = require('../modules/string.module.js');


const types = [
    'array',
    'object',
    'number',
    'string',
    'boolean'
]

describe('Type Module Unit Testing ', function () {
    for (var i = 0; i < types.length; i++) {
        typeTest(types[i]);
    }
});


describe('Number Rules Unit Testing ', function () {
    numberTest();
});

describe('String Rules Unit Testing ', function () {
    stringTest();
});


describe('Testing Main Module', function () {

    it("Checking if index.js is exporting validate String", function () {
        let rules = new Strings.Rule;
        console.log(rules);
        assert.equal(null, validate('Toutou', rules));
    });
});


