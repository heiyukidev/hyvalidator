function isNumber(object) {
    if (typeof (object) !== 'number') {
        return false;
    }
    return true;
}

function isValid(object, rules) {
    var errors = new Array();
    if (!isNumber(object)) {
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
    equalsValidation, maxValidation, minValidation
];

function equalsValidation(object, rules) {
    if (rules.validation.equals) {
        if (rules.validation.equals.value != object) {
            return rules.validation.equals.error;
        }
    }
    return;
}

function maxValidation(object, rules) {
    if (rules.validation.max) {
        if (rules.validation.max.value <= object) {
            return rules.validation.max.error;
        }
    }
    return;
}

function minValidation(object, rules) {
    if (rules.validation.min) {
        if (rules.validation.min.value >= object) {
            return rules.validation.min.error;
        }
    }
    return;
}
//////////////////////////////////////////////////////////////////////////////////////
////////Rule Constructor
//////////////////////////////////////////////////////////////////////////////////////
function Rule() {
    this.type = 'number';
    this.validation = new Object();
    this.error = 'This Variable is expected to be a number';
    this.setEquals = function (x, msg) {
        var eq = new Object();
        eq.value = x;
        if (msg) {
            eq.error = msg;
        } else {
            eq.error = "This Number Should Be Equal to " + x;
        }
        this.validation.equals = eq;
        return this;
    }
    this.setMin = function (x, msg) {
        var min = new Object();
        min.value = x;
        if (msg) {
            min.error = msg;
        } else {
            min.error = "This Number Should Be Superior to " + x;
        }
        this.validation.min = min;
        return this;
    }

    this.setMax = function (x, msg) {
        var max = new Object();
        max.value = x;
        if (msg) {
            max.error = msg;
        } else {
            max.error = "This Number Should Be Inferior to " + x;
        }
        this.validation.max = max;
        return this;
    }
}


module.exports.isNumber = isNumber;
module.exports.Rule = Rule;
module.exports.isValid = isValid;