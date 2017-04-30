function isArray(object){
    if(typeof(object)!=='object'){
        return false;
    }
    if(object.length===undefined){
        return false;
    }
    return true;
}



module.exports.isArray = isArray;