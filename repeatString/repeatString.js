const repeatString = function(str, times) {

    if(times < 0) {
        return "ERROR"
    }
    if(times === 0 || str === "") {
        return "";
    }
    if(times === 1) {
        return str
    }
    if(times > 1) {
        let newString = "";
        for(let i = 0; i < times; i++) {
            newString = newString.concat(str);
        }
        return newString;
    }

}

module.exports = repeatString
