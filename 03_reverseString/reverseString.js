const reverseString = function(str) {
    let chars = str.split('');
    let revStr = '';

    chars.reverse();
    
    for(char in chars){
        revStr += chars[char];
    }
    console.log(revStr);
    return revStr;
};

// Do not edit below this line
module.exports = reverseString;
