function isObject(object) {
    if (typeof (object) !== 'object') {
        return false;
    }
    return true;
}


function isValid(object, rules) {
    var errors = new Array();
    if (!isObject(object)) {
        errors.push(rules.error);
    }
    if (errors.length === 0) {
        return null;
    }
    return errors;
}


//////////////////////////////////////////////////////////////////////////////////////
////////Rule Constructor
//////////////////////////////////////////////////////////////////////////////////////
function Rule() {
    this.type = 'object';
    this.validation = new Object();
    this.error = 'This Variable is expected to be a Object';
}

module.exports.isObject = isObject;
module.exports.Rule = Rule;
module.exports.isValid = isValid;