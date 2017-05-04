function isBoolean(object) {
    if(typeof(object)!=='boolean'){
        return false;
    }
    return true;
}



function isValid(object, rules) {
    var errors = new Array();
    if (!isBoolean(object)) {
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
    this.type = 'boolean';
    this.validation = new Object();
    this.error = 'This Variable is expected to be a Boolean';
}



module.exports.isBoolean = isBoolean;
module.exports.Rule = Rule;
module.exports.isValid = isValid;