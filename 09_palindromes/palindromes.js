const palindromes = function (word) {
    const characters = word.toLowerCase().split('');
    const filtered = characters.filter(element => {
        if(element === ',' || element === '.' ||element === '!' ||element === ';' || element === '?' || element === ' '){
            return false
        }else{
            return true
        }
    });
    for(let i = 0; i < filtered.length; i++){
        console.log(filtered[i], filtered[filtered.length - i - 1])
        if(filtered[i] !== filtered[filtered.length - i - 1]){
            return false
        }
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
