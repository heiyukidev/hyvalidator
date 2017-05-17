const hyvalidator = require('../index.js');
const assert = require('assert');
const typeTest = require('./type.test.js');
const numberTest = require('./number.test.js');
const stringTest = require('./string.test.js');


const Strings = require('../modules/string.module.js');
const Numbers = require('../modules/number.module.js');
const Arrays = require('../modules/array.module.js');
const Booleans = require('../modules/boolean.module.js');
const Objects = require('../modules/object.module.js');


const types = [
    'array',
    'object',
    'number',
    'string',
    'boolean'
]

describe('Type Module Unit Testing ', function() {
    for (var i = 0; i < types.length; i++) {
        typeTest(types[i]);
    }
});


describe('Number Rules Unit Testing ', function() {
    numberTest();
});

describe('String Rules Unit Testing ', function() {
    stringTest();
});

describe('Testing Main Module', function() {
    it("Checking if index.js is exporting validate string", function() {
        let rules = new Strings.Rule;
        var err = hyvalidator.validate('toutou@gmail.com', rules);
        assert.equal(null, err);
    });
    it("Checking if index.js is exporting validate number", function() {
        let rules = new Numbers.Rule;
        var err = hyvalidator.validate(156, rules);
        assert.equal(null, err);
    });
    it("Checking if index.js is exporting validate array", function() {
        let rules = new Arrays.Rule;
        let arr = new Array();
        var err = hyvalidator.validate(arr, rules);
        assert.equal(null, err);
    });
    it("Checking if index.js is exporting validate boolean", function() {
        let rules = new Booleans.Rule;
        var err = hyvalidator.validate(true, rules);
        assert.equal(null, err);
    });
    it("Checking if index.js is exporting validate object", function() {
        let rules = new Objects.Rule;
        var err = hyvalidator.validate(new Object, rules);
        assert.equal(null, err);
    });
});