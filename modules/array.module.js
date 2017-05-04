function isArray(object){
    if(typeof(object)!=='object'){
        return false;
    }
    if(object.length===undefined){
        return false;
    }
    return true;
}

function isValid(object, rules) {
    var errors = new Array();
    if (!isArray(object)) {
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
    this.type = 'array';
    this.validation = new Object();
    this.error = 'This Variable is expected to be an Array';
}



module.exports.isArray = isArray;
module.exports.Rule = Rule;
module.exports.isValid = isValid;