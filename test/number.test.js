const Numbers = require('../modules/number.module.js');
const assert = require('assert');



function runTest() {
    describe('Testing setEquals ', function () {
        var rules = new Numbers.Rule;
        rules.setEquals(2);

        it('Checking if 2 == setEquals(2) is valid ', function () {
            assert.equal(null, Numbers.isValid(2, rules));
        });
        it('Checking if 19 != setEquals(2) is unvalid ', function () {
            assert.notEqual(null, Numbers.isValid(19, rules));
        });

    });

    describe('Testing setMax', function () {
        var rules2 = new Numbers.Rule;
        rules2.setMin(11);
        it('Checking if 12 >= setMin(11) is valid', function () {
            assert.equal(null, Numbers.isValid(12, rules2));
        });
        it('Checking if 9 <= setMin(11) is unvalid', function () {
            assert.notEqual(null, Numbers.isValid(9, rules2));
        });
    });

    describe('Testing setMin ', function () {
        var rules3 = new Numbers.Rule;
        rules3.setMax(92);

        it('Checking if 12 <= setMax(92) is valid', function () {
            assert.equal(null, Numbers.isValid(12, rules3));
        });
        it('Checking if 200 >= setMax(92) is unvalid', function () {
            assert.notEqual(null, Numbers.isValid(200, rules3));
        });
    });
}

module.exports = runTest;