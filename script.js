function convertToRoman(num) {
    // Check if the number is in the valid range
    if (num <= 0 || num > 10000) {
        return "Invalid input. Please enter a number between 1 and 10000.";
    }

    // Roman numeral mapping
    const romanMapping = [
        ['M', 1000], 
        ['D', 500], 
        ['C', 100], 
        ['L', 50], 
        ['X', 10], 
        ['V', 5], 
        ['I', 1]
    ];

    let result = "";

    // Construct the Roman numeral
    for (let [symbol, value] of romanMapping) {
        while (num >= value) {
            result += symbol;
            num -= value;
        }
    }

    return result;
}

// // Example usage
// console.log(convertToRoman(36)); // Output: XXXVI

// Do not edit below this line
module.exports = convertToRoman;
