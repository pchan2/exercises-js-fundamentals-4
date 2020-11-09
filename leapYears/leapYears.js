const leapYears = function(year) {

    if (!(year % 400)) {
        return true;
    } else if (year % 100 && !(year % 4)) {
        return true;
    } return false;
    
}

module.exports = leapYears
