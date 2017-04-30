const assert = require('assert');

const arrays = require('../modules/array.module.js');
const booleans = require('../modules/boolean.module.js');
const numbers = require('../modules/number.module.js');
const objects = require('../modules/object.module.js');
const strings = require('../modules/string.module.js');


function gentest(type) {
    return describe(type + ' Type', function () {
        let x;
        if (type === 'array') {
            x = new Array();
        } else if (type === 'string') {
            x = "hello";
        } else if (type === 'boolean') {
            x = true;
        } else if (type === 'number') {
            x = 10;
        } else if (type === 'object') {
            x = new Object();
        }

        it('checking type array', function () {
            assert.equal(type === 'array', arrays.isArray(x));
        });

        it('checking type string', function () {
            let rules = {
                type: 'string'
            }
            assert.equal(type === 'string', strings.isString(x));
        });
        it('checking type boolean', function () {
            let rules = {
                type: 'boolean'
            }
            assert.equal(type === 'boolean', booleans.isBoolean(x));
        });
        it('checking type number', function () {
            let rules = {
                type: 'number'
            }
            assert.equal(type === 'number', numbers.isNumber(x));
        });
        it('checking type object', function () {
            let rules = {
                type: 'object'
            }
            var verif = type === 'object';
            if (type === 'array') {
                verif = true;
            }
            assert.equal(verif, objects.isObject(x));
        });
    });
}
module.exports = gentest;