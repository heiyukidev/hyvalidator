const Strings = require('../modules/string.module.js');
const assert = require('assert');



function runTest() {
    describe('Testing setEquals ', function () {
        var rules = new Strings.Rule;
        rules.setEquals("Toutou");

        it("Checking if 'Toutou' == setEquals('Toutou') is valid", function () {
            assert.equal(null, Strings.isValid('Toutou', rules));
        });
        it("Checking if 'Tsukki' == setEquals('Toutou') is Not valid", function () {
            assert.notEqual(null, Strings.isValid('Tsukki', rules));
        });

    });

    describe('Testing setLength ', function () {
        var rules = new Strings.Rule;
        rules.setLength(6);

        it("Checking if 'Toutou'.length == setLength(6) is valid", function () {
            assert.equal(null, Strings.isValid('Toutou', rules));
        });
        it("Checking if 'Chocolate' == setLength(6) is Not valid", function () {
            assert.notEqual(null, Strings.isValid('Chocolate', rules));
        });

    });

    describe('Testing setMaxLength ', function () {
        var rules = new Strings.Rule;
        rules.setMaxLength(6);

        it("Checking if 'Toutou'.length <= setMaxLength(6) is valid", function () {
            assert.equal(null, Strings.isValid('Toutou', rules));
        });
        it("Checking if 'Chocolate' >= setLength(6) is Not valid", function () {
            assert.notEqual(null, Strings.isValid('Chocolate', rules));
        });

    });

    describe('Testing setMinLength ', function () {
        var rules = new Strings.Rule;
        rules.setMinLength(3);

        it("Checking if 'Toutou'.length >= setMinLength(3) is valid", function () {
            assert.equal(null, Strings.isValid('Toutou', rules));
        });
        it("Checking if 'yo' <= setMinLength(3) is Not valid", function () {
            assert.notEqual(null, Strings.isValid('yo', rules));
        });

    });
    describe('Testing setIsEmail ', function () {
        var rules = new Strings.Rule;
        rules.setIsEmail();

        it("Checking if 'Toutou@cherrs.love'  setIsEmail() is valid", function () {
            assert.equal(null, Strings.isValid('Toutou@cherrs.love', rules));
        });
        it("Checking if 'Toutou@nothing' setIsEmail() is Not valid", function () {
            assert.notEqual(null, Strings.isValid('Toutou@nothing', rules));
        });
        it("Checking if 'Cheers love! The Cavalry's here!' setIsEmail() is Not valid", function () {
            assert.notEqual(null, Strings.isValid('Cheers love! The Cavalry\'s here!', rules));
        });
         it("Checking if 'Toutou@.hey' setIsEmail() is Not valid", function () {
            assert.notEqual(null, Strings.isValid('Toutou@.hey', rules));
        });
        it("Checking if '@.' setIsEmail() is Not valid", function () {
            assert.notEqual(null, Strings.isValid('@.', rules));
        });
        it("Checking if 'a@a.a'  setIsEmail() is valid", function () {
            assert.equal(null, Strings.isValid('a@a.a', rules));
        });
    });

}

module.exports = runTest;