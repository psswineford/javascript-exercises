const reverseString = function(phrase) {
    var newString = '';
    for (var i = phrase.length - 1; i >= 0; i--) {
        newString += phrase[i];
    }
    return newString;
};

// Do not edit below this line
module.exports = reverseString;
