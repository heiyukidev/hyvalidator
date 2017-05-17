const Arrays = require('./modules/array.module.js');
const Booleans = require('./modules/boolean.module.js');
const Numbers = require('./modules/number.module.js');
const Objects = require('./modules/object.module.js');
const Strings = require('./modules/string.module.js');


function validate(object, rules) {
    if (rules.type === 'number') {
        return Numbers.isValid(object, rules);
    } else if (rules.type === 'string') {
        return Strings.isValid(object, rules);
    } else if (rules.type === 'array') {
        return Arrays.isValid(object, rules);
    } else if (rules.type === 'boolean') {
        return Booleans.isValid(object, rules);
    } else if (rules.type === 'object') {
        return Objects.isValid(object, rules);
    }
    return null;
}



/////////////////////////////////////////////////////////////////////////////////////////////////////////
/////Exports
/////////////////////////////////////////////////////////////////////////////////////////////////////////

module.exports.Arrays = Arrays;
module.exports.Booleans = Booleans;
module.exports.Numbers = Numbers;
module.exports.Objects = Objects;
module.exports.Strings = Strings;
module.exports.validate = validate;