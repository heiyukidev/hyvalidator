const Strings = require('../modules/string.module.js');
const assert = require('assert');



function runTest() {
    describe('Testing setEquals ', function () {
        var rules = new Strings.MakeRules();
        rules.setEquals("Toutou");

        it("Checking if 'Toutou' == setEquals('Toutou') is valid", function () {
            assert.equal(null, Strings.isValid('Toutou', rules));
        });
        it("Checking if 'Tsukki' == setEquals('Toutou') is Not valid", function () {
            assert.notEqual(null, Strings.isValid('Tsukki', rules));
        });

    });

    describe('Testing setLength ', function () {
        var rules = new Strings.MakeRules();
        rules.setLength(6);

        it("Checking if 'Toutou'.length == setLength(6) is valid", function () {
            assert.equal(null, Strings.isValid('Toutou', rules));
        });
        it("Checking if 'Chocolate' == setLength(6) is Not valid", function () {
            assert.notEqual(null, Strings.isValid('Chocolate', rules));
        });

    });

}

module.exports = runTest;