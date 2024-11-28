const sumAll = function(firstNumber, lastNumber) {
 
    if (!Number.isInteger(firstNumber) || firstNumber < 0 || !Number.isInteger(lastNumber) || lastNumber < 0) return "ERROR";
    if (firstNumber > lastNumber) [firstNumber, lastNumber] = [lastNumber, firstNumber];
        
    let sumOfNumbers = 0;
    for (let i = firstNumber; i <= lastNumber; i++) {
        sumOfNumbers = sumOfNumbers + i;
    }

return sumOfNumbers;
};

// Do not edit below this line
module.exports = sumAll;
