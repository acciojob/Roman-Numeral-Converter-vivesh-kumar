function convertToRoman(num) {
    // Check if the number is in the valid range
    if (num <= 0 || num > 100000) {
        return "Invalid input. Please enter a number between 1 and 100000.";
    }

    // Roman numeral mapping with overlines for large numbers
    const romanMapping = [
        ['M̅', 100000], // Overline M for 100,000
        ['C̅M̅', 90000], // Overline CM for 90,000
        ['L̅', 50000], // Overline L for 50,000
        ['X̅L̅', 40000], // Overline XL for 40,000
        ['X̅', 10000], // Overline X for 10,000
        ['M', 1000],
        ['CM', 900],
        ['D', 500],
        ['CD', 400],
        ['C', 100],
        ['XC', 90],
        ['L', 50],
        ['XL', 40],
        ['X', 10],
        ['IX', 9],
        ['V', 5],
        ['IV', 4],
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

// Example usage
// console.log(convertToRoman(36)); // 

// Do not edit below this line
module.exports = convertToRoman;
