const removeFromArray = function() {
    const inputs = [...arguments];
    let newArr = [];
    let arr = inputs[0];
    for(let i = 0;i < inputs.length - 1 ; i++){
       const newArr =  arr.filter(num => num !== inputs[i+1])
       arr = newArr;
       console.log(arr)
    }
    
    return arr;

    

};

// Do not edit below this line
module.exports = removeFromArray;
