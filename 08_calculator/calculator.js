const add = function(num1,num2) {
	return num1 + num2;
};

const subtract = function(num1,num2) {
	return num1 - num2;
};

const sum = function(nums) {
	const product = nums.reduce((sum,num)=>{
    sum += num;
    return sum;
  },0);
  return product;
};

const multiply = function(nums) {
  const product = nums.reduce((product,num)=>{
    product *= num;
    return product;
  },1);
  return product;
};

const power = function(num,power) {
	let total = 1;
  for(power; power > 0; power --){
    total *= num;
  }
  return total;
};

const factorial = function(num) {
	if(num === 0){
    return 1
  }
  let total = 1;
  for(num; num > 0; num -- ){
    total *= num;
  }
  return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
