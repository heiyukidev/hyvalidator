function isObject(object) {
    if(typeof(object)!=='object'){
        return false;
    }
    return true;
}



module.exports.isObject = isObject;