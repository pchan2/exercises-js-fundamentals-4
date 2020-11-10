function compareNumbers(a, b) {
    return a - b;
  }
  
const removeFromArray = function(arr, ...vals) {

    vals.sort(compareNumbers);
        
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < vals.length; j++) {
            if (arr[i] === vals[j]) {
                arr.splice(i, 1);
            }
        }
    }
    return arr;
    
}

module.exports = removeFromArray
