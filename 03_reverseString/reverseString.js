const reverseString = function(string) {
    const reverseArray = [];

    for (let i = 0; i <= string.length; i++) {
        reverseArray[i] = string.charAt(string.length - i);
    }
let reversedString = reverseArray.join("");

return reversedString;
}

// Do not edit below this line
module.exports = reverseString;
