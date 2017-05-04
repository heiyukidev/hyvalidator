function isString(object) {
    if (typeof (object) !== 'string') {
        return false;
    }
    return true;
}


function isValid(object, rules) {
    var errors = new Array();
    if (!isString(object)) {
        errors.push(rules.error);
    } else {
        for (var i = 0; i < tests.length; i++) {
            var auxErrors = tests[i](object, rules);
            if (auxErrors) {
                errors.push(auxErrors);
            }
        }
    }
    if (errors.length === 0) {
        return null;
    }
    return errors;
}
//////////////////////////////////////////////////////////////////////////////////////
////////Tests Declarations
//////////////////////////////////////////////////////////////////////////////////////
const tests = [
    equalsValidation, lengthValidation, maxLengthValidation, minLengthValidation, emailValidation
]

function equalsValidation(object, rules) {
    if (rules.validation.equals) {
        if (rules.validation.equals.value != object) {
            return rules.validation.equals.error;
        }
    }
    return;
}
function lengthValidation(object, rules) {
    if (rules.validation.length) {
        if (rules.validation.length.value != object.length) {
            return rules.validation.length.error;
        }
    }
    return;
}

function maxLengthValidation(object, rules) {
    if (rules.validation.maxLength) {
        if (rules.validation.maxLength.value < object.length) {
            return rules.validation.maxLength.error;
        }
    }
    return;
}

function minLengthValidation(object, rules) {
    if (rules.validation.minLength) {
        if (rules.validation.minLength.value >= object.length) {
            return rules.validation.minLength.error;
        }
    }
    return;
}
function emailValidation(object, rules) {
    if (rules.validation.email) {
        var regex = /\S+@\S+\.\S+/;
        if (!regex.test(object)) {
            return rules.validation.email.error;
        }
    }
    return;
}
//////////////////////////////////////////////////////////////////////////////////////
////////Rule Constructor
//////////////////////////////////////////////////////////////////////////////////////
function Rule() {
    this.type = 'string';
    this.validation = new Object();
    this.error = 'This Variable is expected to be a string';
    this.setEquals = function (x, msg) {
        var eq = new Object();
        eq.value = x;
        if (msg) {
            eq.error = msg;
        } else {
            eq.error = "This String Should Be Equal to " + x;
        }
        this.validation.equals = eq;
        return this;
    }
    this.setLength = function (x, msg) {
        var length = new Object();
        length.value = x;
        if (msg) {
            length.error = msg;
        } else {
            length.error = "This String's Length Should Be Equal to " + x;
        }
        this.validation.length = length;
        return this;
    }
    this.setMinLength = function (x, msg) {
        var minLength = new Object();
        minLength.value = x;
        if (msg) {
            minLength.error = msg;
        } else {
            minLength.error = "This String's Length Should Be Superior to " + x;
        }
        this.validation.minLength = minLength;
        return this;
    }

    this.setMaxLength = function (x, msg) {
        var maxLength = new Object();
        maxLength.value = x;
        if (msg) {
            maxLength.error = msg;
        } else {
            maxLength.error = "This String's Length Should Be Inferior to " + x;
        }
        this.validation.maxLength = maxLength;
        return this;
    }
    this.setIsEmail = function (msg) {
        var email = new Object();
        if (msg) {
            email.error = msg;
        } else {
            email.error = "This String Should Be an Email";
        }
        this.validation.email = email;
        return this;
    }
}


module.exports.isString = isString;
module.exports.Rule = Rule;
module.exports.isValid = isValid;