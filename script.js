function convertToRoman(num) {
    // Check if the number is in the valid range
    

    // Roman numeral mapping
    const obj = [
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
	if (num >=0 && num <= 10000) {
        for (let [symbol, value] of obj) {
        while (num >= value) {
            result += symbol;
            num -= value;
        }
    }

    }
    
    return result;
}

// // Example usage
// console.log(convertToRoman(36)); // Output: XXXVI

// Do not edit below this line
module.exports = convertToRoman;
