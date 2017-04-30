function isBoolean(object) {
    if(typeof(object)!=='boolean'){
        return false;
    }
    return true;
}



module.exports.isBoolean = isBoolean;