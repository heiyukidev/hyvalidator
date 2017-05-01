const arrays = require('./modules/array.module.js');
const booleans = require('./modules/boolean.module.js');
const numbers = require('./modules/number.module.js');
const objects = require('./modules/object.module.js');
const strings = require('./modules/string.module.js');



function validate(object, rules) {
    if (rules.type === 'number') {
        numbers.isValid(object, rules);
    } else if (rules.type === 'string') {
        numbers.isValid(object, rules);
    }
    return null;
}



/////////////////////////////////////////////////////////////////////////////////////////////////////////
/////Exports
/////////////////////////////////////////////////////////////////////////////////////////////////////////

module.exports = validate;