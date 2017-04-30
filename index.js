const arrays = require('./modules/array.module.js');
const booleans = require('./modules/boolean.module.js');
const numbers = require('./modules/number.module.js');
const objects = require('./modules/object.module.js');
const strings = require('./modules/string.module.js');



function validate(object, rules) {
    numbers.isValid(object,rules);
}



/////////////////////////////////////////////////////////////////////////////////////////////////////////
/////Exports
/////////////////////////////////////////////////////////////////////////////////////////////////////////

module.exports = validate;