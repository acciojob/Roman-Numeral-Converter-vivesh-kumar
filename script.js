function convertToRoman(num) {
    // Check if the number is in the valid range
    

    // Roman numeral mapping
    const obj = [
        ['M', 1000], 
		['CM',900],
        ['D', 500],
		['CD',400],
        ['C', 100],
		['XC',90],
        ['L', 50],
		['XL',40],
        ['X', 10], 
		['IX',9]
        ['V', 5],
		['IV',4],
        ['I', 1]
    ];

    let result = "";

    // Construct the Roman numeral
	if (num >=0 && num <= 100000) {
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
