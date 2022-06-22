const fibonacci = function(num) {
    if(num < 0){
        return "OOPS"
    }
    let fib = [0,1];
    for(let i= 1; i <= num; i++){
        fib.push(fib[i] + fib[i-1])
        console.log(fib)
    }
    return fib[num]
};

// Do not edit below this line
module.exports = fibonacci;
