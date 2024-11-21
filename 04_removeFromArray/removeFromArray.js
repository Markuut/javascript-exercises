const removeFromArray = function(array, ...theArgs) {
   // return array.filter(item => !theArgs.includes(item)); // using .filter array function
    let resultArray = [];

    for (let i = 0; i < array.length; i++) {
        if (!theArgs.includes(array[i])) {
            resultArray.push(array[i]);
        }
    }
    return resultArray;
};

// Do not edit below this line
module.exports = removeFromArray;
